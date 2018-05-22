export const vpScale = (
  minSize,
  maxSize,
  minScreen,
  maxScreen,
  viewportUnit
) => {
  let minmaxScale = {
    withPx(viewport) {
      return `calc(${minSize}px + (${maxSize} - ${minSize}) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen}));`;
    },
    withVp(viewport) {
      return `calc(
        calc(${minScreen / 100}px * ${minSize}) + (calc(${maxScreen /
        100} * ${maxSize}) - calc(${minScreen /
        100} * ${minSize})) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen})
      )`;
    }
  };

  switch (viewportUnit) {
    case 'vwUnit':
      return minmaxScale.withVp('100vw');
    case 'vhUnit':
      return minmaxScale.withVp('100vh');
    case 'vwPx':
      return minmaxScale.withPx('100vw');
    case 'vhPx':
      return minmaxScale.withPx('100vh');
    case 'sUnit':
      return minmaxScale.withVp('100vmin');
    case 'sPx':
      return minmaxScale.withPx('100vmin');
    default:
      console.log('vpScale - recieved invalid scale type vvv');
      console.log(
        `${minSize}, ${maxSize}, ${minScreen}, ${maxScreen}, '${viewportUnit}'`
      );
  }
};
