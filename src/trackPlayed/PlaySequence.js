export default class PlaySequence {
  constructor({ id, duration }) {
    this._id = id;
    this._mediaDuration = duration;
    this._start = 0;
    this._end = 0;
  }

  set start(value) {
    this._startSetTime = new Date().getTime();
    this._start = value;
  }

  get start() {
    return this._start;
  }

  set end(value) {
    this._endSetTime = new Date().getTime();
    this._end = value;
  }

  get end() {
    return this.start + this.duration;
  }

  get duration() {
    const timeDuration = (this._endSetTime - this._startSetTime)/1000 || 0;
    let videoDuration = this._end - this._start;
    if (videoDuration <= 0) {
      return Math.max(timeDuration, 0) ;
    }
    const lowestDuration = Math.min(timeDuration, videoDuration);
    return Math.max(lowestDuration, 0);
  }

  get id() {
    return this._id;
  }

  get mediaDuration() {
    return this._mediaDuration;
  }
};
