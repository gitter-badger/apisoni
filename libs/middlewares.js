import bodyParser from 'body-parser';

module.exports = app => {
    app.set("port", 3000);
    app.use(bodyParser.json());
};