import config from '../config';

export default (sequence) => {
  const jsonSequence = {
    id: sequence.id,
    start: sequence.start,
    end: sequence.end,
    duration: sequence.duration,
    mediaDuration: sequence.mediaDuration
  };

  console.log('post /played', jsonSequence);

  return fetch(`${config.playedServiceUrl}/played`, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonSequence)
    })
    .then((res) => res.json());
}
