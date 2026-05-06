const Poem = require("../models/poem");

exports.addPoem = async (req, res) => {
    try {
        const poem = new Poem(req.body);
        await poem.save();
        res.json({message: "Poem Added Successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getPoems = async (req, res) => {
    try {
        const poems = await Poem.find();
        res.json(poems);
    } catch (error) {
        res.status(500).json(error);
    }
};