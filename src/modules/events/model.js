import {fetch, fetchAll} from "../../lib/postgres.js";
import query from "./query.js";
import jwt from "../../lib/jwt.js"

const GET = async ({ token }) => {
  try {
    const userId = token ? jwt?.verify(token)?.adminId : null
    
    if (userId) {
      return await fetchAll(query.GETALL)
    }
    
    return await fetchAll(query.GETACTIVE);
  } catch (error) {
    console.error(error);
  }
};

export default {
  GET,
};
