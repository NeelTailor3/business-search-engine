const express = require('express');
const router = express.Router();
const { getBusinesses, registerBusiness, getMostSearchedBusinesses} = require('../controllers/businessController');

router.get('/', getBusinesses);
router.post('/', registerBusiness);
router.get('/most-searched', getMostSearchedBusinesses);

module.exports = router;
