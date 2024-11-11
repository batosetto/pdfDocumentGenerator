// elements/digitalSignature.js
const { PDFNet } = require('@pdftron/pdfnet-node');

const addDigitalSignature = async (doc, page) => {
    // Cria um campo de assinatura digital
    const sigField = await doc.fieldCreate("DigitalSignatureField", PDFNet.Field.Type.e_signature);
    const sigRect = await PDFNet.Rect.init(50, 50, 250, 100); // Ajuste para visibilidade
    const sigWidget = await PDFNet.WidgetAnnot.create(doc, sigRect, sigField);
    page.annotPushBack(sigWidget);

    // Indicação visual (opcional)
    const writer = await PDFNet.ElementWriter.create();
    const eb = await PDFNet.ElementBuilder.create();
    writer.beginOnPage(page);
    
    const rect = await eb.createRect(50, 50, 250, 60);
    rect.setPathStroke(true);
    rect.setPathFill(false);
    writer.writePlacedElement(rect);

    writer.end();
};

module.exports = {
    addDigitalSignature,
};
