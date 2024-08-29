import asyncHandler from "../middlewares/asyncHandler.js";
import Category from "../models/categoryModel.js";

const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error });
  }
});

export { createCategory };
