import express from 'express';
import { getOwnerInfo, uploadOwnerImage, createOrUpdateOwnerName } from '../controllers/ownerController.js';

const router = express.Router();

router.get('/info', getOwnerInfo);
router.put('/upload-image', uploadOwnerImage); // No multer
router.post('/save-name', createOrUpdateOwnerName);

export default router;
