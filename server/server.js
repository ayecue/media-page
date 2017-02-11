const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');

const app = express();
const defaultPage = require('./templates/default');

const PORT = 8080;

const IS_LIVE = process.env.NODE_ENV === 'production';

const ASSETS = {
    'js': 'main.js',
    'css': 'main.css'
};

if (!IS_LIVE) {
    const webpack = require('webpack');
    const config = require('../webpack.config');
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(bodyParser.json());
app.use('/static', express.static('./server/static'));

app.get('/health', (req, res) => {
    res.send({ status: 'ok' });
});

app.all('/*', (req, res) => {
    res.send(defaultPage(ASSETS, IS_LIVE));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); // eslint-disable-line no-console
});
