import express from 'express';
import routes from './routes/scrapperRoutes.js';

const app = express();
const port = 3000;

app.use('/scrape', routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});