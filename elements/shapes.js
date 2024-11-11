// elements/shapes.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const addShapes = async (page, writer, eb) => {
    const line = await eb.createRect(100, 600, 200, 620); // Linha horizontal
    line.setPathStroke(true);
    writer.writePlacedElement(line);
};

module.exports = {
    addShapes,
};
