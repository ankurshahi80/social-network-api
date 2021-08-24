const { Thought, User } = require('../models'); // import the Thought model

const thoughtController = {
    // get all thoughts
    // get a single thougth by its _id
    // add a new thought
    addThought({params,body},res){
        console.log(body);
        Thought.create(body)
        .then(({_id})=> {
            return User.findOneAndUpdate(
                {_id:params.userId},
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