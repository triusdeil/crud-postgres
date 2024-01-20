import express from 'express';
import { userRouter } from './routes/user';

const app = express();

app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('server on port 3000')
})