export class PlaySequence {

  constructor() {
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
}

export default (player) => {

  player.once('prepared', () => {

    const current = player.current();

    const sequences = [];
    let sequence;

    function startSequence() {
      sequence = new PlaySequence();
      sequence.start = player.currentTime();
    }

    function endSequence() {
      if (!sequence) {
        return;
      }

      sequence.end = player.currentTime();
      sequences.push(sequence);
      sequence = null;
    }

    player.on('playing', startSequence);

    player.on('pause', endSequence);

    player.on('seeking', endSequence);

  });

};
