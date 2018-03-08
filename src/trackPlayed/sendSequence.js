export default (sequence) => {
  const jsonSequence = JSON.stringify({
    id: sequence.id,
    start: sequence.start,
    end: sequence.end,
    duration: sequence.duration,
    mediaDuration: sequence.mediaDuration
  });

  console.log(jsonSequence);

  const data = new FormData();
  data.append('json', jsonSequence);

  console.log(data);

  return fetch('http://localhost:3300/playedsequence', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: jsonSequence
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(JSON.stringify(data));
    });
}
