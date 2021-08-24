const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought
    // removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
// router.route('/:userId').post(addThought);
router.route('/')
.get(getAllThought)
.post(addThought);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router.route('/:id')
.get(getThoughtById)
.put(updateThought);
//.delete(removeThought);

module.exports = router;