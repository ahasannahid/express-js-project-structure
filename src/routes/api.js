const express = require('express');

const router = express.Router();

const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');
const messageController = require('../controllers/messageController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');

router.get('/create-blog',blogController.create);
router.get('/read-blog',blogController.read);
router.get('/update-blog',blogController.update);
router.get('/delete-blog',blogController.delete);

router.get('/create-comment',commentController.create);
router.get('/read-comment',commentController.read);
router.get('/update-comment',commentController.update);
router.get('/delete-comment',commentController.delete);

router.get('/create-message',messageController.create);
router.get('/read-message',messageController.read);
router.get('/update-message',messageController.update);
router.get('/delete-message',messageController.delete);

router.get('/create-portfolio',portfolioController.create);
router.get('/read-portfolio',portfolioController.read);
router.get('/update-portfolio',portfolioController.update);
router.get('/delete-portfolio',portfolioController.delete);

router.get('/create-product',productController.create);
router.get('/read-product',productController.read);
router.get('/update-product',productController.update);
router.get('/delete-product',productController.delete);


module.exports= router;