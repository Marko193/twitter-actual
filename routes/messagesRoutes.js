const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    let payload = {
        pageTitle: "Inbox",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    };
    res.status(200).render("inboxPage", payload);
});

router.get("/new", (req, res, next) => {
    let payload = {
        pageTitle: "New Message",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    };
    res.status(200).render("newMessage", payload);
});

module.exports = router;