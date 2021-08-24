const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
// router.route('/:userId').post(addThought);
router.route('/')
.get(getAllThought)
.post(addThought);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// Set up POST one  at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction);

// DELETE One Reaction at /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);
module.exports = router;