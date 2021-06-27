const express = require('express');
const livereload = require('livereload');
const connectlivereload = require('connect-livereload');

const PORT = 3000;
const app = express();

// live reload in browser on change
const reloadServer = livereload.createServer({
    exts: ['html', 'js', 'png']
});
reloadServer.watch(`${__dirname}/public`);
app.use(connectlivereload({
    port: 35729
}));

// serve static game files
app.use(express.static('public'));
app.listen(3000, () => console.log(`Listening on port ${PORT}`));