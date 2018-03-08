export default (sequence) => {
  const jsonSequence = {
    id: sequence.id,
    start: sequence.start,
    end: sequence.end,
    duration: sequence.duration,
    mediaDuration: sequence.mediaDuration
  };

  console.log('post /playedsequence', jsonSequence);

  return fetch('http://localhost:3300/playedsequence', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonSequence)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('response', data);
    });
}
