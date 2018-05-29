import { playedServiceUrl } from '../config';
import graph from './graph';

export default (player) => {

  const g = graph(player.get('stageElement'));
  let current;

  player.on('playedupdated', (data) => {
    if (!current) {
      return;
    }
    g.plot(data, current.duration);
  });

  function update(sequence) {
    g.plot(sequence, current.duration);
  }

  return { update };
};
