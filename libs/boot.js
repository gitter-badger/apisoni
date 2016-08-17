module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get('port'), () => {
      console.log(`Apisoni - Port ${app.get('port')}`);
    });
  }
};

