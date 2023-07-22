import jwt from "jsonwebtoken";

const generateToken = (res, id) => {
  const userId = "64ba109aa8e2d08817bf0901";
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

export default generateToken;
