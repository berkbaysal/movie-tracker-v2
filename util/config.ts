const config: Config = {
  TRENDING_DISPLAY_AMOUNT: 9, // Amount of movies shown in trending section - DEFAULT VALUE: "9"
  FEAUTRED_BUFFER_SLIDES: 2, // Amount of buffer slides to be rendered each side of the featured slider, recommended >= 2 - DEFAULT VALUE: 2
};

interface Config {
  TRENDING_DISPLAY_AMOUNT: number;
  FEAUTRED_BUFFER_SLIDES: number;
}

export default config;
