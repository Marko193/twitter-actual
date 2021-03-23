const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');
const Chat = require('../../schemas/ChatSchema');
// const Message = require('../../schemas/MessageSchema');

app.use(bodyParser.urlencoded({ extended: false }));


router.post("/", async(req, res, next) => {

});

module.exports = router;