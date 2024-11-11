// elements/formFields.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const addFormFields = async (doc, page, writer, eb) => {
    // Inicia o escritor de elementos para adicionar labels
    writer.beginOnPage(page);

    // Adiciona o label para o campo de texto
    const font = await PDFNet.Font.create(doc, PDFNet.Font.StandardType1Font.e_helvetica);
    const labelText = await eb.createTextBeginWithFont(font, 10);
    writer.writeElement(labelText);
    
    const textLabel = await eb.createTextRun("Full Name:", font, 15);  // Adiciona fonte e tamanho
    const labelMatrix = await PDFNet.Matrix2D.create(1, 0, 0, 1, 50, 255);
    textLabel.setTextMatrix(labelMatrix);
    writer.writeElement(textLabel);
    writer.writeElement(await eb.createTextEnd());

    // Cria o campo de texto
    const textField = await doc.fieldCreate("SampleTextField", PDFNet.Field.Type.e_text);
    const textRect = await PDFNet.Rect.init(50, 200, 550, 230);
    const textWidget = await PDFNet.WidgetAnnot.create(doc, textRect, textField);
    page.annotPushBack(textWidget);

    // Adiciona o label para a caixa de seleção
    writer.writeElement(await eb.createTextBeginWithFont(font, 10));

    const checkBoxLabel = await eb.createTextRun("Accept Terms:", font, 10);  // Adiciona fonte e tamanho
    const checkBoxLabelMatrix = await PDFNet.Matrix2D.create(1, 0, 0, 1, 75, 155);
    checkBoxLabel.setTextMatrix(checkBoxLabelMatrix);
    writer.writeElement(checkBoxLabel);
    writer.writeElement(await eb.createTextEnd());

    // Cria a caixa de seleção
    const checkBoxField = await doc.fieldCreate("SampleCheckBox", PDFNet.Field.Type.e_check);
    const checkBoxRect = await PDFNet.Rect.init(150, 150, 170, 170);
    const checkBoxWidget = await PDFNet.WidgetAnnot.create(doc, checkBoxRect, checkBoxField);
    page.annotPushBack(checkBoxWidget);

    writer.end();
};

module.exports = {
    addFormFields,
};
