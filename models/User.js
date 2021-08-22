const { Schema, model } = require('mongoose'); // import the Schema constructor and model function

// create the user schema

const UserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: 'You need to provide a username!',
        trim: true
    },
    email:{
        type: String,
        required: 'You need to provide an email!',
        match:/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/i ,
        unique: true,
    },
    thoughts:[
        {
            type:Schema.Types.ObjectId,
            ref:'Thought'
        }
    ],
    friends:[
        {
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    ]
},
{
    toJSON:{
        virtuals:true
    }
}
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.reduce((total, friend) => total+ friend.username.length+1,0);
})

// create the User model using UserSchema
const User = model('User',UserSchema);

// export the User model
module.exports = User;