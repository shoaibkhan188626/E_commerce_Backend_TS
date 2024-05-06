import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.body;
  if (!id) return next(new ErrorHandler("Saale Login Kar le Pehle", 401));

  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("fake id hai re bhai ", 401));
  if (user.role !== "admin")
    return next(new ErrorHandler("BC Teri Aukat nahi hai", 403));
  next();
});
