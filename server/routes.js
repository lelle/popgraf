import PlayedSequenceStore from './store/PlayedSequenceStore';
import Played from './store/Played';

export default (app) => {

  const store = new PlayedSequenceStore();

  app.get("/", (req, res) => {
    res.status(200).send("popgraf api");
  });

  app.post("/played", (req, res) => {
    const playedSequence = new Played(req.body);

    store.add(playedSequence);

    res.status(200).send(store.reduceSequence(playedSequence.id));
  });

  app.get("/intervals/:id", (req, res) => {
    res.status(200).send(store.reduceSequence(req.params.id));
  });
};
