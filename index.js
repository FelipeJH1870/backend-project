import express from 'express';

const app = express();

/* 
app.get('/', (req, res) => {
  res.send("Hello, world!");
});
 */
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('Express server listening on port %s', PORT);