import express from "express";
import * as cemRepo from './cementery-repo';
import {Human} from "./human-model";


export const cementeryRouter = express.Router();

cementeryRouter.get('/all',(req, res) =>{
    const humans = cemRepo.getAllHumans();
    res.json(humans);
});

// cementeryRouter.get('/:id',(req, res)=>{
//     const id:number = Number(req.params.id);
//     const person = cemRepo.getById(id);
//     if(person === null){
//         res.status(404).json('Person Not Found');
//     }
//
//     res.status(200).json(person);
// });

cementeryRouter.get('/:name',(req, res)=>{
    const name = req.params.name;
    const person = cemRepo.getByName(name);
    if(person === null){
        res.status(404).json('Person Not Found');
    }

    res.status(200).json(person);
});

cementeryRouter.post('/add/person', (req, res) => {
    const { firstName, lastName, yearOfBirth, yearOfDeath, isMale, placeOfBirth, placeOfDeath } = req.body;
    const person = cemRepo.addPerson(firstName, lastName, yearOfBirth, yearOfDeath, isMale, placeOfBirth, placeOfDeath);

    res.status(200).send( person);
});
