const colorNames = {
  torchRed: "#FF0046",
  oldBrick: "#891F30",
  azalea: "#F7CDD0",
  carnation: "#F44864",
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  porcelain: "#F2F3F4",
  mercury: "#E5E5E5",
  slateGrey: "#6E7E91",
  doveGrey: "#6D6D6D",
  tundora: "#414141",
  swamp: "#00141E",
  firefly: "#0F2D37",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.torchRed,
    textPrimary: colorNames.swamp,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGrey,
    },
    buttonLink: {
      text: colorNames.white,
      hover: colorNames.porcelain,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
    tile: {
      text: colorNames.torchRed,
      border: colorNames.porcelain,
      borderHover: colorNames.azalea,
      header: colorNames.torchRed,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.torchRed,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.swamp,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      hover: colorNames.whiteLilac,
    },
    boxBackground: colorNames.firefly,
    headerLine: colorNames.tundora,
    tile: {
      text: colorNames.carnation,
      border: colorNames.tundora,
      borderHover: colorNames.oldBrick,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGrey,
      icon: colorNames.swamp,
    },
  },
};
