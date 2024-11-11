// index.js
const { PDFNet } = require('@pdftron/pdfnet-node');
const { createBorder } = require('./config/pdfConfig');
//const { addShapes } = require('./elements/shapes');
const { addText } = require('./elements/text');
const { addImage } = require('./elements/image');
const { addHeader } = require('./elements/header');
const { addFooter } = require('./elements/footer');
const { addFormFields } = require('./elements/formFields');
const { addDigitalSignature } = require('./elements/digitalSignature'); 
const { saveAndClose } = require('./utils/pdfUtils');

const main = async () => {
    try {
        const doc = await PDFNet.PDFDoc.create();
        
        // Criando uma nova página e adicionando elementos
        const page = await doc.pageCreate();
        doc.pagePushBack(page);

        const writer = await PDFNet.ElementWriter.create();
        const eb = await PDFNet.ElementBuilder.create();
        writer.beginOnPage(page);

        // Adiciona o cabeçalho na página
        await addHeader(doc, page, writer, eb);

        // Adiciona uma borda na página
        await createBorder(page, writer, eb);

        // Adiciona formas (linhas) na página
        //await addShapes(page, writer, eb);

        // Adiciona o título e a legenda na página
        await addText(doc, writer, eb);

        // Adiciona a imagem na página
        await addImage(doc, writer, eb);

        // Adiciona campos de formulário interativos
        await addFormFields(doc, page, writer, eb);

        // Adiciona um campo de assinatura digital
        await addDigitalSignature(doc, page);

        // Adiciona o rodapé com a numeração da página
        await addFooter(doc, 1, writer, eb);

        writer.end();
        
        await saveAndClose(doc, "myFirstPDF.pdf");
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

// Inicializa o PDFNet com a chave de licença e executa a função principal
PDFNet.runWithCleanup(main, 'YOUR-TRIAL-KEY')
    .catch(function (error) {
        console.log('Error during PDF creation:', error);
    })
    .then(function () {
        PDFNet.shutdown();
    });
