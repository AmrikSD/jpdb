import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import os from 'os';

import postRoutes from './routes/posts.js'

const app = express();

app.use(cors());

app.use('/', (req,res) => {
     res.send(`hello from ${os.hostname()}`);
});

app.use('/posts',postRoutes);

const MONGO_URL = 'mongodb://admin:admin@mongo:27017';


const PORT = process.env.PORT || 8080;

mongoose.connect(MONGO_URL, {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) } ))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);

