export default class PlaySequence {
  constructor({ id, duration }) {
    this._id = id;
    this._mediaDuration = duration;
    this._start = 0;
    this._end = 0;
  }

  set start(value) {
    this._start = value;
  }

  get start() {
    return this._start;
  }

  set end(value) {
    this._end = value;
  }

  get end() {
    return this._end;
  }

  get duration() {
    return Math.max(this.end - this.start, 0);
  }

  get id() {
    return this._id;
  }

  get mediaDuration() {
    return this._mediaDuration;
  }
};
