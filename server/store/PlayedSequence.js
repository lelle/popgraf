export default class PlaySequence {
  constructor({ id, start, end, duration, mediaDuration }) {
    Object.assign(this, { id, start, end, duration, mediaDuration });
  }
}
