import cors from 'cors';
import express from 'express';
import useRoute from './router/userRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(useRoute);

app.listen(5000, () => console.log('successfull'));
