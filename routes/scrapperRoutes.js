import { Router } from 'express';
import { scrapeData } from '../controllers/scrapperController.js';

const router = Router();

router.get('/', scrapeData);

export default router;