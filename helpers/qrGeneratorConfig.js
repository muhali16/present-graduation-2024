function qrGeneratorConfig(params) {
  return {
    width: 200,
    height: 200,
    data: params,
    margin: 2,
    qrOptions: {
      typeNumber: "0",
      mode: "Byte",
      errorCorrectionLevel: "H",
    },
    imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
    dotsOptions: {
      type: "square",
      color: "#212456",
      // color: "#000",
      gradient: null,
    },
    backgroundOptions: { color: "#ffffff" },
    image:
      "data:image/png;base64,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",
    dotsOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#6a1a4c",
        color2: "#6a1a4c",
        rotation: "0",
      },
    },
    cornersSquareOptions: {
      type: "square",
      // color: "#f69221",
      color: "#000",
    },
    cornersSquareOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0",
      },
    },
    cornersDotOptions: {
      type: "square",
      // color: "#f69221",
      color: "#000",
    },
    cornersDotOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0",
      },
    },
    backgroundOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#ffffff",
        color2: "#ffffff",
        rotation: "0",
      },
    },
  };
}

module.exports = qrGeneratorConfig;