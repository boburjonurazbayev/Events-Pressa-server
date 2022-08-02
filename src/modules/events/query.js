const GETALL = `
        SELECT * FROM events;
`;

const GETACTIVE = `
        SELECT * FROM events WHERE status = 'active';
`;

export default {
  GETALL,
  GETACTIVE,
};
