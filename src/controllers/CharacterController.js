const Character = require('../models/Character')

const getAll = async (req, res) => {
    try {
        const characterList = await Character.findAll()
        res.render("index", { characterList, check: 1, message: "", characterPut: null, characterDel: null, characterDtl:null })
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
}

const add = async (req, res) => {
    try {
        const characterList = await Character.findAll()
        res.render("add", { characterList, character: undefined, check: 1, message: "" })
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
}

const create = async (req, res) => {
    try {
        const character = req.body;

        if (!character) {
            return res.redirect("/add")
        }

        await Character.create(character)
        res.redirect("/")
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
}

const getById = async (req, res) => {
    try {
        const method = req.params.method
        const characterList = await Character.findAll()
        const character = await Character.findByPk(req.params.id)

        if (method == 'put') {
            res.render("index", {
                check: 1,
                message: "",
                characterList,
                characterPut: character,
                characterDel: null,
                characterDtl: null
            })
        } else if(method == 'delete') {
            res.render("index", {
                check: 1,
                message: "",
                characterList,
                characterPut: null,
                characterDel: character,
                characterDtl: null
            }) 
        } else{
            res.render("index", {
                check: 1,
                message: "",
                characterList,
                characterPut: null,
                characterDel: null,
                characterDtl: character
            }) 
        }


    } catch (err) {
        res.status(500).send({ err: err.message })
    }
}

const update = async (req, res) => {
    try {
        const character = req.body;
        await Character.update(character, { where: { id: req.params.id } });
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
}

const del = async (req, res) => {
    try {
        await Character.destroy({where:{id:req.params.id}})
        res.redirect("/")
    } catch (err) {
        res.status(500).send({ err: err.message })
    }

}


module.exports = {
    getAll,
    add,
    create,
    getById,
    update,
    del,
};