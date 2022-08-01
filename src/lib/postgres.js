import pg from "pg";
import { pgConfig } from "../config.js";

const Pool = pg.Pool;

const pool = new Pool(pgConfig);

async function fetch(SQL, ...params) {
  const client = await pool.connect();

  try {
    const {
      rows: [row],
    } = await client.query(SQL, params?.length ? params : null);

    return row;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}

async function fetchAll(SQL, ...params) {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(SQL, params?.length ? params : null);

    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}

export { fetch, fetchAll };
