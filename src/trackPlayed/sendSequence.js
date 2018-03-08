export default (sequence) => {
  const data = new FormData();
  data.append('json', JSON.stringify(sequence));

  return fetch('http://localhost:3300/playedsequence', {
      method: 'POST',
      body: data
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(JSON.stringify(data));
    })
}
