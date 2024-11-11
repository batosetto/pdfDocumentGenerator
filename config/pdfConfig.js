// config/pdfConfig.js
const { PDFNet } = require('@pdftron/pdfnet-node');


const createBorder = async (page, writer, eb) => {
    const rect = await eb.createRect(25, 25, 565, 750); // Define a borda da página
    rect.setPathStroke(true);
    rect.setPathFill(false);
    writer.writePlacedElement(rect);
};

module.exports = {
    createBorder,
};
