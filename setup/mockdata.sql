---------------------------------Admins data

INSERT INTO 
admins 
    (username, password) 
VALUES 
    ('Bobur', crypt('1111', gen_salt('bf'))) RETURNING *;


---------------------------------Events data 

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
  RETURNING *;

    UPDATE events SET status = 'active' WHERE event_id = 1 RETURNING *; 