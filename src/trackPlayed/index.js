import sendSequence from './sendSequence';
import PlaySequence from './PlaySequence';

export default (player) => {

  player.once('prepared', () => {

    const current = player.current();

    const sequences = [];
    let sequence;

    function startSequence() {
      sequence = new PlaySequence({ id: current.id, duration: current.duration });
      sequence.start = player.currentTime();
    }

    function endSequence() {
      if (!sequence) {
        return;
      }

      sequence.end = player.currentTime();
      sequences.push(sequence);
      sendSequence(sequence);
      sequence = null;
    }

    player.on('seeked', () => {
      if (player.isPaused()) {
        return;
      }
      startSequence();
    });

    player.on('playing', startSequence);

    player.on('pause', endSequence);

    player.on('seeking', endSequence);

  });

};
