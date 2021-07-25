function Timer(callback, delay) {
  this.delay = delay;
  this.callback = callback;
  this.id;

  this.start = () => {
    this.id = setTimeout(this.callback, this.delay);
  };

  this.pause = () => {
    clearTimeout(this.id);
  };
}

export default Timer;
