const { User } = require('../models'); // import the User model

const userController = {
    // get all users
    getAllUser(req,res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err=> {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // get a single user by its _id and populated thought and friend data
    getUserById({params}, res) {
        User.findOne({_id:params.id})
        .populate({
            path:'thoughts',
            path: 'friends'
            // select:'- __v'
        })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err=> {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // create a new user
    createUser({body},res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    // update user by id
    updateUser({params,body}, res){
        User.findOneAndUpdate({_id:params.id}, body, {new:true, runvalidators:true})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message:'No pizza found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    // delete a user
    deleteUser({params}, res){
        User.findOneAndDelete({_id:params.id})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err=>res.status(400).json(err));
    },
    // add a friend by Id
    addFriendById({params},res){
        User.findOneAndUpdate(
            {_id: params.userId},
            {$push:{friends:params.friendId}},
            {new:true, runValidators:true}
        )
        .then(dbUserData => {
            if(!dbUserData){
                return res.status(404).json({message: 'No user with this id!'});
            }
            res.json(dbUserData);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json(err);
        });
    },
    // remove a friend by Id
    deleteFriendById({params},res){
        User.findOneAndUpdate(
            {_id: params.userId},
            {$pull:{friends:params.friendId}},
            {new:true}
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }
};

module.exports = userController;