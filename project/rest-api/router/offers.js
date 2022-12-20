const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { offerController} = require('../controllers');

// middleware that is specific to this router

router.get('/', offerController.getOffers);
router.post('/', auth(), offerController.createOffer);
router.get('/:offerId', offerController.getOffer);
router.delete('/:offerId',auth(), offerController.deleteOffer);

module.exports = router