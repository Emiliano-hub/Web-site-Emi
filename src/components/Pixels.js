const section1 = document.querySelector('.Pixels');

export const pixel = {
  pixelX: function (number) {
    return number * 31;
  },
  pixelY: function (number) {
    return number * 31;
  },
  pixelWidth: function (number) {
    return number * 31 - 1;
  },
  pixelHeight: function (number) {
    return number * 31 - 1;
  },
};
