import {fetch} from "../../lib/postgres.js";
import {GET} from "./query.js";

const LOGIN = async ({ username, password }) => {
  try {
    return await fetch(GET, username, password);
  } catch (error) {
    console.error(error);
  }
};

export default {
  LOGIN,
};
