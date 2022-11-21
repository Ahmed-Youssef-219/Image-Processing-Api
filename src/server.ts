import express from 'express';
import bodyParser from 'body-parser';
import imageRoute from './routes/image';

const app = express();
const PORT = 3005;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/image', imageRoute);

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('welcome to my image processing api');
});

app.listen(PORT, (): void => {
    console.log(`server is running in PORT ${PORT}`);
});

export default app;
