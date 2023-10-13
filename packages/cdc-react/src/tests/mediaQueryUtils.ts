const breakpointPixels = {
  mobile: 0,
  "mobile-lg": 480,
  tablet: 640,
  "tablet-lg": 880,
  desktop: 1024,
  "desktop-lg": 1200,
  widescreen: 1400,
};
export type ScreenSize = keyof typeof breakpointPixels;

export const resizeView = (screenSize: ScreenSize) => {
  window.innerWidth = breakpointPixels[screenSize];
  window.dispatchEvent(new Event("resize"));
};
