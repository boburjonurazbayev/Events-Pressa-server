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
    organiser_fullname,
    organiser_profession,
    organiser_tel1,
    organiser_tel2,
    event_date,
    event_category,
    event_type,
    event_link,
    post_title,
    post_desc,
    post_text,
  },
  post_image
) => {
  try {
    console.log(
      organiser_fullname,
      "/n",
      organiser_profession,
      "/n",
      organiser_tel1,
      "/n",
      organiser_tel2,
      "/n",
      event_date,
      "/n",
      event_category,
      "/n",
      event_type,
      "/n",
      event_link,
      "/n",
      post_title,
      "/n",
      post_desc,
      "/n",
      post_image,
      "/n",
      post_text
    );

    return await fetch(query.POST);
  } catch (error) {
    console.error(error);
  }
};

const PUT = async ({ event_id, status }, { token }) => {
  try {
    const userId = token ? jwt?.verify(token)?.adminId : null;

    if (userId) {
      return await fetch(query.PUT, status, event_id);
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export default {
  GET,
  POST,
  PUT,
};
