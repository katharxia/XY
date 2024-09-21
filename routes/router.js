const express = require("express");
const router = express.Router();
const main = require("../controllers/xyController.js");

router.get('/', main.index);
router.get('/about', main.about);
router.get('/cart', main.cart);
router.get('/profile', main.profile);
router.get('/contacts', main.contacts);

module.exports = router;
