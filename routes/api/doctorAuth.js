import express from 'express';
import { DoctorCrud } from '../../models/doctorCrud.js';


const server = express.Router();

server.post('/register', async (req, res, next) => {
    try {
        const doctor = await DoctorCrud.create(req.body);
        res.status(201).json(doctor);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

server.get('/all', async (req, res, next) => {
    try {
        const doctors = await DoctorCrud.readAll();
        res.status(200).json(doctors);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

server.get('/one/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const doctor = await DoctorCrud.readOne(id);
        res.status(200).json(doctor);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

// get doctor by specialization
server.get('/specialization/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const doctor = await DoctorCrud.readBySpecialization(id);
        res.status(200).json(doctor);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

server.put('/edit/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const doctor = await DoctorCrud.update(id, req.body);
        res.status(201).json(doctor);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

server.delete('/delete/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const doctor = await DoctorCrud.delete(id);
        res.status(201).json(doctor);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

export default server;