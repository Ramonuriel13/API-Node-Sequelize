const express = require('express');
const app = express();
const db = require('./app/models');
const { SeedFunction } = require('./app/seedersFunction')

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

    


app.get('/', async (req, res) => {
        res.send('Api rodando')
});

//Listar todos
app.get('/produtos', async (req, res) => {
    try {

        let fruits = await  db.produtos.findAll({})
        res.json(fruits);
        
    } catch (error) {
        console.log(error)
        res.send(500);
    }
}); 

// Criar
app.post('/produtos', async (req, res) => {
    try {

        let produto = await db.produtos.create(req.body)
        res.json(produto)
        
    } catch (error) {
        console.log(error)
        res.send(500);        
    }
}); 

//Buscar
app.get('/produtos/:id', async (req, res) => {
    try {
        
        let produto = await db.produtos.findByPk(req.params.id)
        res.json(produto)
        
    } catch (error) {
        console.log(error)
        res.send(500);
    }
}); 

//Editar
app.put('/produtos/:id', async (req, res) => {
    try {

        let produto = await db.produtos.update(req.body,{where: {id: req.params.id}})
        res.sendStatus(204)
        
    } catch (error) {
        console.log(error)
        res.send(500);
    }

}); 

//Deletar
app.delete('/produtos/:id', async (req, res) => {
    try {
        
        let result = await db.produtos.destroy({where: {id: req.params.id}})
        res.sendStatus(204)
        
    } catch (error) {
        
    }
}); 

app.listen(3000,() => {
    console.log('Server running!!')
});