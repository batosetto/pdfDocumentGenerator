// elements/footer.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const addFooter = async (doc, pageNumber, writer, eb) => {
    const fontFooter = await PDFNet.Font.create(doc, PDFNet.Font.StandardType1Font.e_helvetica_oblique);
    const footerElement = await eb.createTextBeginWithFont(fontFooter, 10);
    writer.writeElement(footerElement);

    const footerText = await eb.createTextRun(`Page ${pageNumber}`, fontFooter, 10);
    const footerMatrix = await PDFNet.Matrix2D.create(1, 0, 0, 1, 275, 10); // Posição do rodapé na parte inferior central da página
    footerText.setTextMatrix(footerMatrix);
    writer.writeElement(footerText);
    writer.writeElement(await eb.createTextEnd());
};

module.exports = {
    addFooter,
};
