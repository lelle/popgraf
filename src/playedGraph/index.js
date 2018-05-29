import { playedServiceUrl } from '../config';
import graph from './graph';

export default (player) => {

  const g = graph(player.get('stageElement'));
  let current;

  player.on('prepared', () => {
    current = player.current();

    return fetch(`${playedServiceUrl()}/intervals/${current.id}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('response', data);
      g.plot(data, current.duration);
    });
  });

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
