const GETALL = `
        SELECT * FROM events;
`;

const GETACTIVE = `
        SELECT * FROM events WHERE status = 'active';
`;

const POST = `
INSERT INTO 
events  (
    category,
    sub_category,
    date,
    time,
    event_type,
    title,
    description,
    text,
    images,
    personality,
    fullname,
    profession,
    contact, 
    link,
    company
) VALUES  ($1, $2, $3, $4, $5 , $6, $7, $8, ARRAY $9, $10, $11, $12, ARRAY $13, $14, $15 ) RETURNING *;
`;

const PUT = `
    UPDATE events SET status = $1 WHERE event_id = $2 RETURNING *;
`

export default {
  GETALL,
  GETACTIVE,
  POST,
  PUT,
};

// `
// INSERT INTO
// events  (
//     category,
//     sub_category,
//     date,
//     time,
//     event_type,
//     title,
//     description,
//     text,
//     images,
//     personality,
//     fullname,
//     profession,
//     contact,
//     link,
//     company
//     ) VALUES  ('Information Technologies',
//     'Python developer',
//     '2022-08-08',
//     '10:00',
//     'online' ,
//     'Go nima',
//     'about python',
//     'python afzallik taraflari shundaki ...',
//     ARRAY [
//         'images-1659412243993-920848662.png',
//         'images-1659412243996-777964000.png',
//         'images-1659412244000-895337079.png'
//       ],
//     'yuridik',
//     'Muhiddin Khalimetov',
//     'Backend Engineer',
//     ARRAY [ '998990142545', '998902501520' ],
//     'https://www.youtube.com/liver24',
//     'OSG GROUP' ) RETURNING *;
//     `
