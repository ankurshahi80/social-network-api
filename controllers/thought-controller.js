const { Thought, User } = require('../models'); // import the Thought model

const thoughtController = {

    // get all thoughts
    getAllThought(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    // get a single thougth by its _id
    // add a new thought
    addThought({body},res){
        const {userId, ...newBody} = body;
        console.log(newBody);
        
        Thought.create(newBody)
        .then(({_id})=> {
            return User.findOneAndUpdate(
                {_id:userId},
                {$push:{thoughts: _id}},
                {new:true}
            );
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message:'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
    // update thought by id
    // delete a thought
};

module.exports=thoughtController;