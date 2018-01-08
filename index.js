const app = require('./app');

const port = process.env.PORT || 3050;
app.listen(port, () => {
   console.log('Starting server.... \nPlease wait...');
   console.log(`Hurray!\nRunning on port ${port}`);
});