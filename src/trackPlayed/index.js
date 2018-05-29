import PlaySequence from './PlaySequence';

export default (player, socket) => {

  player.once('prepared', () => {

    const current = player.current();

    const sequences = [];
    let sequence;
    let currentTime = 0;
    let startSequenceTime;

    function startSequence() {
      sequence = new PlaySequence({ id: current.id, duration: current.duration });
      sequence.start = player.currentTime();
      startSequenceTime = new Date().getTime();
    }

    function endSequence() {
      if (!sequence) {
        return;
      }

      sequence.end = currentTime;
      sequences.push(sequence);

      socket.emit('add', {
        id: sequence.id,
        duration: sequence.duration,
        end: sequence.end,
        start: sequence.start,
        mediaDuration:sequence.mediaDuration
      });

      sequence = null;
    }

    player.on('timeupdate', () => {
      currentTime = player.currentTime();
    });

    player.on('playing', () => {
      startSequence();
    });

    player.on('pause', () => {
      endSequence();
    });

    player.on('seeking', () => {
      endSequence();
    });

  });

};
