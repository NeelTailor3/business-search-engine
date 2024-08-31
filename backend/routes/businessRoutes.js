const express = require('express');
const router = express.Router();
const { getBusinesses, registerBusiness } = require('../controllers/businessController');

router.get('/', getBusinesses);
router.post('/', registerBusiness);

module.exports = router;
