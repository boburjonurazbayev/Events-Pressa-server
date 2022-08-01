const GET =
  `SELECT a.* FROM admins AS a WHERE username = $1 and password = crypt($2, a.password);`;

export {
  GET,
};
