// global request animation frame funtion that React depends on.

const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
}

export default requestAnimationFrame;
