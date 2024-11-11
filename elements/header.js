// elements/header.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const addHeader = async (doc, page, writer, eb) => {
    const fontHeader = await PDFNet.Font.create(doc, PDFNet.Font.StandardType1Font.e_helvetica_bold);
    const headerElement = await eb.createTextBeginWithFont(fontHeader, 10);
    writer.writeElement(headerElement);

    const headerText = await eb.createTextRun("Header Test", fontHeader, 10);
    const headerMatrix = await PDFNet.Matrix2D.create(1, 0, 0, 1, 50, 780); // Posição do cabeçalho no topo da página
    headerText.setTextMatrix(headerMatrix);
    writer.writeElement(headerText);
    writer.writeElement(await eb.createTextEnd());
};

module.exports = {
    addHeader,
};
