import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token = undefined;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // decode token
      const decode = jwt.decode(token, process.env.JWT_SECRET);
      req.user = await userModal.findById(decode.id).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not Authorized, Token not valid");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("User Not Authorized");
  }
});

export { protect };
