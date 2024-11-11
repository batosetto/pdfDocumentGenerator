// elements/text.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const addText = async (doc, writer, eb) => {
    const fontTitle = await PDFNet.Font.create(doc, PDFNet.Font.StandardType1Font.e_helvetica_bold);
    const titleElement = await eb.createTextBeginWithFont(fontTitle, 16);
    writer.writeElement(titleElement);

    const titleText = await eb.createTextRun("Hi, this is my first .pdf doc generated with Apryse SDK :)", fontTitle, 16);
    const titleMatrix = await PDFNet.Matrix2D.create(1, 0, 0, 1, 75, 750);
    titleText.setTextMatrix(titleMatrix);
    writer.writeElement(titleText);
    writer.writeElement(await eb.createTextEnd());

    const fontCaption = await PDFNet.Font.create(doc, PDFNet.Font.StandardType1Font.e_helvetica_oblique);
    const captionElement = await eb.createTextBeginWithFont(fontCaption, 12);
    writer.writeElement(captionElement);

    const captionText = await eb.createTextRun("This photo below captures one of the most emotional moments of my life.", fontCaption, 12);
    const captionMatrix = await PDFNet.Matrix2D.create(1, 0, 0, 1, 100, 700);
    captionText.setTextMatrix(captionMatrix);
    writer.writeElement(captionText);
    writer.writeElement(await eb.createTextEnd());
};

module.exports = {
    addText,
};
