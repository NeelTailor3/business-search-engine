const Business = require('../models/Business');

// Get all businesses or search by location and category
const getBusinesses = async (req, res) => {
  try {
    const { location, category } = req.query;
    let query = {};

    console.log('Location:', location);
    console.log('Category:', category);

    // Build search query based on location and category if provided
    if (location || category) {
      query = {
        $and: [
          location ? { location: { $regex: location, $options: 'i' } } : {},
          category ? { category: { $regex: category, $options: 'i' } } : {},
        ],
      };
    }

    // Fetch businesses and sort by prime businesses first
    const businesses = await Business.find(query).sort({ type: -1 });

    // Increment searchCount for each found business
    await Promise.all(
      businesses.map(async (business) => {
        await Business.findByIdAndUpdate(business._id, { $inc: { searchCount: 1 } });
      })
    );

    res.json(businesses);
  } catch (err) {
    console.error("Error fetching businesses:", err);
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
    console.error("Error registering business:", err);
    res.status(500).json({ message: err.message });
  }
};

// Get most searched businesses
const getMostSearchedBusinesses = async (req, res) => {
  try {
    const mostSearched = await Business.find().sort({ searchCount: -1 }).limit(5); // Adjust limit as needed
    res.json(mostSearched);
  } catch (err) {
    console.error("Error fetching most searched businesses:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getBusinesses, registerBusiness, getMostSearchedBusinesses };
