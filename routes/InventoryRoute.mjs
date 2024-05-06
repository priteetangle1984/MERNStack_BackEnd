import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.mjs';
import {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} from '../Controllers/inventoryController.mjs';

const router = express.Router();

// Routes

// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

// GET RECENT BLOOD RECORDS
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

// GET HOSPITAL BLOOD RECORDS
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

// GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

// GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

// GET organization RECORDS
router.get("/get-organization", authMiddleware, getOrgnaisationController);

// GET organization RECORDS FOR HOSPITAL
router.get("/get-organization-for-hospital", authMiddleware, getOrgnaisationForHospitalController);

export default router;