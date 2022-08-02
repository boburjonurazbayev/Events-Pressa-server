import { fetch, fetchAll } from "../../lib/postgres.js";
import query from "./query.js";
import jwt from "../../lib/jwt.js";

const GET = async ({ token }) => {
  try {
    const userId = token ? jwt?.verify(token)?.adminId : null;

    if (userId) {
      return await fetchAll(query.GETALL);
    }

    return await fetchAll(query.GETACTIVE);
  } catch (error) {
    console.error(error);
  }
};

const POST = async (
  {
    category,
    sub_category,
    date,
    time,
    event_type,
    title,
    description,
    text,
    personality,
    fullname,
    profession,
    contact,
    link,
    company,
  },
  images
) => {
  try {
    let img = images.map((i) => i.filename)

    return await fetch(query.POST, category,
      sub_category,
      date,
      time,
      event_type,
      title,
      description,
      text,
      img,
      personality,
      fullname,
      profession,
      contact,
      link,
      company);
  } catch (error) {
    console.error(error);
  }
};

const PUT = async ({event_id, status}, {token}) => {
  try {

    const userId = token ? jwt?.verify(token)?.adminId : null;

    if (userId) {
      return await fetch(query.PUT, status, event_id)
    } else {
      return null
    }
  } catch (error) {
    console.error(error);
  }
}

export default {
  GET,
  POST,
  PUT
};
