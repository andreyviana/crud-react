const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const ComumModel = require("./models/Comum");
const { restart } = require('nodemon');
const { response } = require('express');

app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb+srv://admin:1234@vocabularios.pdjfapv.mongodb.net/vocabularios?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
    }
);

app.post('/insert', async (req, res) => {


    const palavraComum = req.body.palavraComum;

    const comum = new ComumModel({PalavrasComuns: palavraComum});

    try {
        await comum.save();
        ComumModel.find({}, (err, result) => {
            if(err)
            {
                res.send(err);
            }
    
            res.send(result);
    
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/read', async (req, res) => {

    ComumModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }

        res.send(result);

    })

});

app.put('/update', async (req, res) => {

    const novaComum = req.body.novaComum;
    const id = req.body.id;

    try {
        await ComumModel.findById(id, (err, atualizadoComum) => {

            atualizadoComum.PalavrasComuns = novaComum;
            atualizadoComum.save();
            
            ComumModel.find({}, (err, result) => {
                if(err)
                {
                    res.send(err);
                }
                console.log(novaComum,result);
                res.send(result);
            });
        })
    } catch(err) {
        console.log(err);
    }
});

app.delete('/delete/:id', async (req, res) => {

    
    const id = req.params.id;
    
    await ComumModel.findByIdAndRemove(id).exec();
    
    ComumModel.find({}, (err, result) => {
        if(err)
        {
            res.send(err);
        }

        res.send(result);

    });

})

app.listen(3001, () => {
    console.log("port 3001");
});