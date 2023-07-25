import cors from 'cors';
import express from 'express';
import cookieParse from 'cookie-parser';
import useRoute from './router/userRouter.js';

const app = express();
app.use(cookieParse());
app.use(cors());
app.use(express.json());
app.use(useRoute);

app.listen(5000, () => console.log('successfull'));
