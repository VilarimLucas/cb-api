const express = require('express');
const router = express.Router();

//pegamos a entidade em si dessa forma usando .Editora
const Perfil = require('../models').Perfil;

const Infantil = require('../models').Infantil;
const Parental = require('../models').Parental;
const Gamer = require('../models').Gamer;
const Educador = require('../models').Educador;

//Cadastra Perfil Parental (POST)
router.post('/parental/add', async (req, res) => {
    const { userName, password, name, dataNasc, cpf } = req.body;
    const nivel = 2;

    const perfil = await Perfil.create({ userName, password, name, nivel });

    const idPerfil = perfil.idPerfil;
    const parental = await Parental.create({ dataNasc, cpf, idPerfil });
    
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

router.post('/infantil/add', async (req, res) => {
    const { userName, password, name } = req.body;
    const nivel = 2;

    const perfil = await Perfil.create({ userName, password, name, nivel });

    res.status(200).json({ message: 'Cadastrado com sucesso' });
});


module.exports = router;