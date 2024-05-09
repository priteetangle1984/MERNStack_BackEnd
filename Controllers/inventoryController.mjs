import mongoose from 'mongoose';
import User from '../models/User.mjs';
import Inventory from '../models/inventory.mjs';

// CREATE INVENTORY
export const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    //validation
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }

    if (req.body.inventoryType == "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      const organization = new mongoose.Types.ObjectId(req.body.userId);

      //calculate Blood Quanitity
      const totalInOfRequestedBlood = await Inventory.aggregate([
        {
          $match: {
            organization,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);

      const totalIn = totalInOfRequestedBlood[0]?.total || 0;

      //calculate OUT Blood Quanitity
      const totalOutOfRequestedBloodGroup = await Inventory.aggregate([
        {
          $match: {
            organization,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);

      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

      //in & Out Calc
      const availableQuanityOfBloodGroup = totalIn - totalOut;
      
      //quantity validation
      if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuanityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`,
        });
      }

      req.body.hospital = user?._id;
    } else {
      req.body.donar = user?._id;
    }

    //save record
    const inventory = new Inventory(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Inventory API",
      error,
    });
  }
};

// GET ALL BLOOD RECORDS
export const getInventoryController = async (req, res) => {
  try {
    const inventory = await Inventory
      .find({ organization: req.body.userId })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Inventory",
      error,
    });
  }
};

// GET HOSPITAL BLOOD RECORDS
export const getInventoryHospitalController = async (req, res) => {
  try {
    const inventory = await Inventory
      .find(req.body.filters)
      .populate("donar")
      .populate("hospital")
      .populate("organization")
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Get hospital consumer records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get consumer Inventory",
      error,
    });
  }
};

// GET RECENT BLOOD RECORDS
export const getRecentInventoryController = async (req, res) => {
  try {
    const inventory = await Inventory
      .find({ organization: req.body.userId })
      .limit(3)
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Recent Inventory Data",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Recent Inventory API",
      error,
    });
  }
};

// GET DONAR RECORDS
export const getDonarsController = async (req, res) => {
  try {
    const organization = req.body.userId;
    const donorId = await Inventory.distinct("donar", { organization });
    const donars = await User.find({ _id: { $in: donorId } });

    return res.status(200).send({
      success: true,
      message: "Donar Record Fetched Successfully",
      donars,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donar records",
      error,
    });
  }
};

// GET HOSPITAL RECORDS
export const getHospitalController = async (req, res) => {
  try {
    const organization = req.body.userId;
    const hospitalId = await Inventory.distinct("hospital", { organization });
    const hospitals = await User.find({ _id: { $in: hospitalId } });

    return res.status(200).send({
      success: true,
      message: "Hospitals Data Fetched Successfully",
      hospitals,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In get Hospital API",
      error,
    });
  }
};

// GET ORG PROFILES
export const getOrgnaisationController = async (req, res) => {
  try {
    const donar = req.body.userId;
    const orgId = await Inventory.distinct("organization", { donar });
    const organizations = await User.find({ _id: { $in: orgId } });

    return res.status(200).send({
      success: true,
      message: "Org Data Fetched Successfully",
      organizations,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In ORG API",
      error,
    });
  }
};

// GET ORG for Hospital
export const getOrgnaisationForHospitalController = async (req, res) => {
  try {
    const hospital = req.body.userId;
    const orgId = await Inventory.distinct("organization", { hospital });
    const organizations = await User.find({ _id: { $in: orgId } });

    return res.status(200).send({
      success: true,
      message: "Hospital Org Data Fetched Successfully",
      organizations,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital ORG API",
      error,
    });
  }
};

export default {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
};