// utils/pdfUtils.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const saveAndClose = async (doc, filename) => {
    await doc.save(filename, PDFNet.SDFDoc.SaveOptions.e_linearized);
    console.log(`PDF created as '${filename}'`);
};

module.exports = {
    saveAndClose,
};

