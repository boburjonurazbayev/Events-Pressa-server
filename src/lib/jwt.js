import jwt from "jsonwebtoken";

import { SECRET } from "../config.js";

export default {
  sign: (payload) => {
    try {
      return jwt.sign(payload, SECRET)
    } catch (error) {
      console.error(error)
    }
  },
  verify: (token) => {
    try {
      return jwt.verify(token, SECRET)
    } catch (error) {
      console.error(error)
    }
  },
};
