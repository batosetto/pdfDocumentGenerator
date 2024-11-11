// elements/image.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const addImage = async (doc, writer, eb) => {
    const img = await PDFNet.Image.createFromFile(doc, 'images/pic1.jpeg');
    const imgElement = await eb.createImageScaled(img, 200, 525, 200, 150);
    writer.writePlacedElement(imgElement);
};

module.exports = {
    addImage,
};
