const GETALL = `
        SELECT * FROM events;
`;

const GETACTIVE = `
        SELECT * FROM events WHERE status = 'active';
`;

const POST = 
`
INSERT INTO events 
(organiser_fullname, 
organiser_profession, 
organiser_tel1, 
organiser_tel2, 
event_date, 
event_category, 
event_type, 
event_link, 
post_title, 
post_desc, 
post_image, 
post_text) 
VALUES (
  'Abbos Janizakov', 
  'Software engineer', 
  '998580055', 
  '904541515', 
  '2022-12-20 13:00', 
  'Information Technologies', 
  'online', 
  'https://www.youtube.com/liver24', 
  'Flutter nima?', 
  'Flutter afzallik jihatlari ...',
  'img-1659497268541-174452207.jpg',
  'Flutter bu ...')
  RETURNING *
  `

const PUT = `
    UPDATE events SET status = $1 WHERE event_id = $2 RETURNING *;
`

export default {
  GETALL,
  GETACTIVE,
  POST,
  PUT,
};
