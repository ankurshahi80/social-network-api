const router = require('express').Router();
const {
    getAllThought,
    addThought,
    // removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
// router.route('/:userId').post(addThought);
router.route('/')
.get(getAllThought)
.post(addThought);

// /api/thoughts/<userId>/<thoughtId>
// route.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;