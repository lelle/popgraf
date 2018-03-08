import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("popgraf api");
});

app.post("/playedsequence", (req, res) => {
  res.status(200).send({
    success: 'yes'
  });
});


const port = process.env.PORT || 3300;

app.listen(port);

console.log('Server started on port: ' + port);
