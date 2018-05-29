import Played from './store/Played';

export default (app, events) => {
  app.get("/", (req, res) => {
    res.status(200).send("popgraf api");
  });

  app.post("/played", (req, res) => {
    const playedSequence = new Played(req.body);

    store.add(playedSequence);

    const sequence = store.reduceSequence(playedSequence.id);
    res.status(200).send(sequence);

    events.emit('update', sequence);
  });

  app.get("/intervals/:id", (req, res) => {
    res.status(200).send(store.reduceSequence(req.params.id));
  });
};
