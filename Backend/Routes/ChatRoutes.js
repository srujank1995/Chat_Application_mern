const express = require('express');
const { protect } = require('../Middleware/authMiddleware');
const { accessChat } = require('../Controller/ChatController');


const router = express.Router();

router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChats);
// router.route("/group").post(protect, createGroupChats);
// router.routes("/rename").put(protect, renameGroupChats);
// router.route("/groupremove").put(protect, removeGroupChats);
// router.route("/groupadd").put(protect, addToGroup);

module.export = router

