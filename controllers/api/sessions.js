const Session = require('../../models/session')

module.exports = {
    index,
    create,
    detail,
    deleteSession,
    update
}

async function index(req, res){
    try{
        const sessions = await Session.find();
        res.status(200).json(sessions)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newSession = await Session.create(req.body);
        res.status(201).json(newSession)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const session = await Session.findById(req.params.id)
        res.status(200).json(session)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteSession(req, res){
    try{
        await Session.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedSession = await Session.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedSession)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}