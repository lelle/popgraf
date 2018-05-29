const store = {};
const interval = 1; // aggregate by seconds

export default class PlayedSequenceStore {

  constructor() {}

  add(playedSequence) {
    const { id } = playedSequence;

    store[id] = store[id] || [];

    store[id].push(playedSequence);
  }

  reduceSequence(id) {
    const sequences = store[id] || [];

    if (!sequences) {
      return [];
    }

    return sequences.reduce((o, sequence) => {
      const { start, end } = sequence;

      const startSecond = Math.floor(start / interval);
      const endSecond = Math.ceil(end / interval);
      const intervals = Math.max(endSecond - startSecond, 0) || 0;

      [...Array(intervals)].forEach((x, i) => {
        const floor = startSecond + (i * interval);
        const ceil = floor + interval;
        const played = Math.min(ceil, end) - Math.max(floor, start);

        o[floor] = (o[floor] || 0) + played;
      });

      return o;
   }, {});
  }
}
