import express from 'express';
import request from 'superagent';
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8000;

// Prepares a new request with the required headers set
const prepareRequest = (method = 'post', url) => (
    request[method](url)
        .set('content-type', 'application/json')
);

app.get('/productList', (req, res) => {
    prepareRequest('get', 'https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json')
        .timeout(15000)
        .end((error, response) => {
            if (response && response.ok) {
                res.header('Content-type', 'application/json');
                res.end(JSON.stringify(response.body));
            } else if (error) {
                // TODO error handling
                res.header('Content-type', 'text/html');
                res.end(JSON.stringify('{error}'));
            }
        }
    );
});

app.listen(port, () => {
  console.log(`fashion app listening on port ${port}!`);
});
