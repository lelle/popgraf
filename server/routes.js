import PlayedSequenceStore from './store/PlayedSequenceStore';
import PlayedSequence from './store/PlayedSequence';

export default (app) => {

  const store = new PlayedSequenceStore();

  app.get("/", (req, res) => {
    res.status(200).send("popgraf api");
  });

  app.post("/playedsequence", (req, res) => {
    const playedSequence = new PlayedSequence(req.body);

    store.add(playedSequence);

    res.status(200).send(store.reduceSequence(playedSequence.id));
  });
};
