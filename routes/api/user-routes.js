const router = require('express').Router();
// import functionality
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriendById,
    deleteFriendById
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Set up POST one and DELETE one at /api/users/:userID/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriendById)
    .delete(deleteFriendById);

module.exports = router;