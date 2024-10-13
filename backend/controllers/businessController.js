const Business = require('../models/Business');

// Get all businesses or search by location and category
const getBusinesses = async (req, res) => {
  try {
    const { location, category } = req.query;
    let query = {};

    console.log(location);
    console.log(category);
    

    // Build search query based on location and category if provided
    if (location && category) {
      query = {
        $and: [
          { location: { $regex: location, $options: 'i' } },
          { category: { $regex: category, $options: 'i' } },
        ],
      };
    }

    // Find businesses and sort by prime businesses first (type: -1 for descending)
    const businesses = await Business.find(query).sort({ type: -1 });
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Register a new business
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
