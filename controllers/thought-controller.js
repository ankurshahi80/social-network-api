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
    getThoughtById({params}, res) {
        console.log(params.id);
        Thought.findOne({_id:params.id})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({message: 'No Thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err=> {
            console.log(err);
            res.status(400).json(err);
        });
    },
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
    },
    // update thought by id
    updateThought({params,body}, res){
        Thought.findOneAndUpdate({_id:params.id}, body, {new:true, runvalidators:true})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({message:'No thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }
    // delete a thought
};

module.exports=thoughtController;