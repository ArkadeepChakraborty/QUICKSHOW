import Owner from '../models/Owner.js';

export const getOwnerInfo = async (req, res) => {
  try {
    const owner = await Owner.findOne();
    res.json(owner);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch owner info' });
  }
};

export const uploadOwnerImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: 'Image URL is required' });
    }

    let owner = await Owner.findOne();
    if (!owner) return res.status(404).json({ message: 'Owner not found' });

    owner.imageUrl = imageUrl;
    await owner.save();

    res.json({ message: 'Image updated', imageUrl: owner.imageUrl });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload image' });
  }
};


export const createOrUpdateOwnerName = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    let owner = await Owner.findOne();

    if (owner) {
      // Update existing owner's name
      owner.name = name;
    } else {
      // Create new owner
      owner = new Owner({ name });
    }

    await owner.save();

    res.status(200).json({ message: 'Owner saved successfully', owner });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save owner name' });
  }
};

