const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    // removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
// router.route('/:userId').post(addThought);
router.route('/')
.get(getAllThought)
.post(addThought);

// /api/thoughts/<thoughtId>
router.route('/:id')
.get(getThoughtById);
//.delete(removeThought);

module.exports = router;