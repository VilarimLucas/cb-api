const express = require('express');
const router = express.Router();

//pegamos a entidade em si dessa forma usando .Editora
const Perfil = require('../models').Perfil;

const Infantil = require('../models').Infantil;
const Parental = require('../models').Parental;
const Gamer = require('../models').Gamer;
const Educador = require('../models').Educador;

//Cadastra Categorias (POST)
router.post('/admin/add', async (req, res) => {
    try {
        const { userName, password, name, email } = req.body;
        const nivel = 1;
        const newEdit = await Perfil.create({ userName, password, nivel, name, email })
        res.status(200).json({ message: 'Cadastrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao cadastrar perfil Admin' });
    }
});


//Cadastra Perfil Admin (POST)
// router.post('/admin/add', async (req, res) => {

//     try {
//         // Primeiro, crie o perfil
//         await Perfil.create({
//             userName: req.body.userName,
//             password: req.body.password,
//             nivel: 1,
//             name: req.body.name,
//             email: req.body.email
//         });

//         res.status(200).json({ message: 'Cadastrado do perfil Admin com sucesso' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Ocorreu um erro ao cadastrar perfil Admin'});
//     }
// });



//Cadastra Perfil Parental (POST)
router.post('/parental/add', async (req, res) => {

    try {
        // Primeiro, crie o perfil
        const perfil = await Perfil.create({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            nivel: 2
        });

        await Parental.create({
            cpf: req.body.cpf,
            dataNasc: req.body.dataNasc,
            idPerfil: perfil.id
        });

        res.status(200).json({ message: 'Cadastrado do perfil Parental com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao cadastrar perfil Parental' });
    }
});




router.post('/infantil/add', async (req, res) => {
    const { userName, password, name } = req.body;
    const nivel = 5;

    const perfil = await Perfil.create({ userName, password, name, nivel });

    res.status(200).json({ message: 'Cadastrado com sucesso' });
});


module.exports = router;