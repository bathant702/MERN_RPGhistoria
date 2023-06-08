const Character = require('../../models/character')

module.exports = {
    index,
    create,
    detail,
    deleteCharacter,
    update
}

async function index(req, res){
    try{
        const characters = await Character.find();
        res.status(200).json(characters)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newCharacter = await Character.create(req.body);
        res.status(201).json(newCharacter)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const character = await Character.findById(req.params.id)
        res.status(200).json(character)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteCharacter(req, res){
    try{
        await Character.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedCharacter)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}