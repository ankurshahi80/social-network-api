const { Schema, model, Types } = require('mongoose'); // import the Schema constructor and model function
const dateFormat = require('../utils/dateFormat'); // import the dateFormat function
// create the Reaction schema
const ReactionSchema = new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            defalut:() => new Types.ObjectId()
        },
        reactionBody: {
            type:String,
            required: true,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default:Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON:{
            getters:true
        },
        // id:flase
    }
);

// create the thought schema
const ThoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minLength: [1, "must include text"],
            max:[280, "too long. Please reduce to less than 280 characters!"]
        },
        createdAt:{
            type:Date,
            default:Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions:[ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters:true
        },
        id:false
    }
);
ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// create the Thought model using ThoughtSchema
const Thought = model('Thought',ThoughtSchema);

// export the Thought model
module.exports = Thought;