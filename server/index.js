const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const ComumModel = require("./models/Comum");
const SiglaModel = require("./models/Sigla");
const GeneralizacaoModel = require("./models/Generalizacao");
const DitadoModel = require("./models/DitadosPopulares");
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

//
//
//
//COMUNS
//
//
//

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
        
        let query = ComumModel.findById(id, (err, atualizadoComum) => {

            atualizadoComum.PalavrasComuns = novaComum;
            atualizadoComum.save();
            
            ComumModel.find({}, (err, result) => {
                if(err)
                {
                    res.send(err);
                }
                res.send(result);
            });
        })
        await query.clone();
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

//
//
//
//SIGLA
//
//
//

app.post('/insertsigla', async (req, res) => {


    const useSigla = req.body.useSigla;

    const sigla = new SiglaModel({Siglas: useSigla});

    try {
        await sigla.save();
        SiglaModel.find({}, (err, result) => {
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

app.get('/readsigla', async (req, res) => {

    SiglaModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }

        res.send(result);

    })

});

app.put('/updatesigla', async (req, res) => {

    const novaSigla = req.body.novaSigla;
    const id = req.body.id;

    try {
        let query =  SiglaModel.findById(id, (err, atualizadoSigla) => {

            atualizadoSigla.Siglas = novaSigla;
            atualizadoSigla.save();
            
            SiglaModel.find({}, (err, result) => {
                if(err)
                {
                    res.send(err);
                }
                res.send(result);
            });
        })
        await query.clone();
    } catch(err) {
        console.log(err);
    }
});

app.delete('/deletesigla/:id', async (req, res) => {

    
    const id = req.params.id;
    
    await SiglaModel.findByIdAndRemove(id).exec();
    
    SiglaModel.find({}, (err, result) => {
        if(err)
        {
            res.send(err);
        }

        res.send(result);

    });

})

//
//
//
//GENERALIZACAO
//
//
//

app.post('/insertgen', async (req, res) => {


    const useGeneralizacao = req.body.useGeneralizacao;

    const generalizacao = new GeneralizacaoModel({Generalizacoes: useGeneralizacao});

    try {
        await generalizacao.save();
        GeneralizacaoModel.find({}, (err, result) => {
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

app.get('/readgen', async (req, res) => {

    GeneralizacaoModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }

        res.send(result);

    })

});

//
//
//
//GENERALIZAÇAO
//
//
//

app.put('/updategen', async (req, res) => {

    const novaUseGeneralizacao = req.body.novaGeneralizacao;
    const id = req.body.id;

    try {
        let query = GeneralizacaoModel.findById(id, (err, atualizadoGeneralizacao) => {

            atualizadoGeneralizacao.Generalizacoes = novaUseGeneralizacao;
            atualizadoGeneralizacao.save();
            
            GeneralizacaoModel.find({}, (err, result) => {
                if(err)
                {
                    res.send(err);
                }
                res.send(result);
            });
        })
        await query.clone();
    } catch(err) {
        console.log(err);
    }
});

app.delete('/deletegen/:id', async (req, res) => {

    
    const id = req.params.id;
    
    await GeneralizacaoModel.findByIdAndRemove(id).exec();
    
    GeneralizacaoModel.find({}, (err, result) => {
        if(err)
        {
            res.send(err);
        }

        res.send(result);

    });

})

//
//
//
//DITADOS POPULARES
//
//
//

app.post('/insertdit', async (req, res) => {


    const Ditado = req.body.Ditado;

    const ditado = new DitadoModel({DitadosPopulares: Ditado});

    try {
        await ditado.save();
        DitadoModel.find({}, (err, result) => {
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

app.get('/readdit', async (req, res) => {

    DitadoModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }

        res.send(result);

    })

});

app.put('/updatedit', async (req, res) => {

    const novoDitado = req.body.novoDitado;
    const id = req.body.id;

    try {
        let query = DitadoModel.findById(id, (err, atualizadoDitado) => {

            atualizadoDitado.DitadosPopulares = novoDitado;
            atualizadoDitado.save();
            
            DitadoModel.find({}, (err, result) => {
                if(err)
                {
                    res.send(err);
                }
                res.send(result);
            });
        })
        await query.clone();
    } catch(err) {
        console.log(err);
    }
});

app.delete('/deletedit/:id', async (req, res) => {

    
    const id = req.params.id;
    
    await DitadoModel.findByIdAndRemove(id).exec();
    
    DitadoModel.find({}, (err, result) => {
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