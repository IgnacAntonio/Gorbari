import express from 'express';
import cors from "cors";
import {cementeryRouter} from "./cementery-router";
import { join } from 'path';

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());    // parse JSON data and place result in req.body
app.use(express.static(join(__dirname, 'public'), { extensions: ['html'] }));  // serve frontend

app.use('/',cementeryRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});