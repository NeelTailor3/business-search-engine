const Business = require('../models/Business');

// Get all businesses or search by name, category, or location
const getBusinesses = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
        ],
      };
    }

    const businesses = await Business.find(query);
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const registerBusiness = async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getBusinesses, registerBusiness };
