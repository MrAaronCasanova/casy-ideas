import { scaleWidth, scaleHeight, scale } from './ScaleContext';

function isMobileDevice() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

const isMobile = isMobileDevice();

export const vpScale = (
  minSize,
  maxSize,
  minScreen,
  maxScreen,
  viewportUnit,
  scaleProp
) => {
  let minmaxScale = {
    withPx(viewport, w, h, s) {
      if (isMobile) {
        // console.log(`${minmaxScale.devicePx(scaleProp)}-test`);
        console.log(
          `${minmaxScale.devicePx(w ? w : h || s)}-testPx-${
            w ? scaleWidth : scaleHeight
          }`
        );
        return minmaxScale.devicePx(w ? w : h || s);
      }
      return `calc(${minSize}px + (${maxSize} - ${minSize}) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen}));`;
    },
    withVp(viewport, w, h, s) {
      if (isMobile) {
        // console.log(minmaxScale.deviceVp(scaleHeight));
        console.log(
          `${minmaxScale.deviceVp(w ? w : h || s)}-testVp-${
            w ? scaleWidth : scaleHeight
          }`
        );
        return minmaxScale.deviceVp(w ? w : h || s);
      }
      return `calc(
        calc(${minScreen / 100}px * ${minSize}) + (calc(${maxScreen /
        100} * ${maxSize}) - calc(${minScreen /
        100} * ${minSize})) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen})
      )`;
    },
    deviceVp(viewport) {
      return `${Math.floor(
        minScreen / 100 * minSize +
          (maxScreen / 100 * maxSize - minScreen / 100 * minSize) *
            (viewport - minScreen) /
            (maxScreen - minScreen)
      )}px`;
    },
    devicePx(viewport) {
      return `${Math.floor(
        minSize +
          (maxSize - minSize) * (viewport - minScreen) / (maxScreen - minScreen)
      )}px`;
    }
  };

  switch (viewportUnit) {
    case 'vwUnit':
      return minmaxScale.withVp('100vw', scaleWidth);
    case 'vhUnit':
      return minmaxScale.withVp('100vh', false, scaleHeight);
    case 'vwPx':
      return minmaxScale.withPx('100vw', scaleWidth);
    case 'vhPx':
      return minmaxScale.withPx('100vh', false, scaleHeight);
    case 'sUnit':
      return minmaxScale.withVp(`${scaleProp}px`, false, false, scale);
    case 'sPx':
      return minmaxScale.withPx(`${scaleProp}px`, false, false, scale);
    default:
      console.log('vpScale - recieved invalid scale type');
  }
};
