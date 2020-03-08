// api의 로직

const models = require('../../models');

const index = (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if(Number.isNaN(limit)){
        return res.status(400).end();
    }

    models.User
        .findAll({
            limit
        })
        .then(users => {
            res.json(users)
        })

    // res.json(users.slice(0, limit))
}

const show = (req,res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();
    
    // const user = users.filter((user) => user.id === id)[0];

    models.User.findOne({
        where : {
            id
        }
    }).then(user => {
        if(!user) return res.status(404).end();
        res.json(user)
    })  
}

const destory = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();
    
    // users = users.filter(user => user.id !== id);
    models.User.destroy({
        where : { 
            id
        }
    }).then(() => {
        res.status(204).end();
    })
}

const create  = (req, res) => {
    const name = req.body.name;
    if(!name) return res.status(400).end();

    // const isConflic = users.filter(user => user.name === name).length
    // if(isConflic) return res.status(409).end();

    models.User.create({name})
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            if(err.name === 'SequelizeUniqueConstraintError' ){
                return res.status(409).end() 
            }
            res.status(500).end();
        })
    // const id = Date.now()  >>> 데이터 베이스에서 자동으로 id생성
    
}

const update = (req, res) => {
    const id = parseInt(req.params.id, 10)
    if(Number.isNaN(id)) return res.status(400).end();

    const name = req.body.name;
    if(!name) return res.status(400).end();

    // const user = users.filter(user => user.id === id )[0]

    // if(users.filter(user => user.name === name).length) return res.status(409).end();
    // if(!user) return res.status(404).end();
    // user.name = name;

    models.User.findOne({where : {id}})
        .then(user => {
            if(!user) return res.status(404).end();
            user.name = name;
            user.save()
                .then(_ => {
                    res.json(user);
                })
                .catch(err => {
                    if(err.name === "SequelizeUniqueConstraintError"){
                        return res.status(409).end();
                    }
                    return res.status(500).end();
                })
        })

    
}

module.exports={
    index,
    show,
    destory,
    create,
    update
}