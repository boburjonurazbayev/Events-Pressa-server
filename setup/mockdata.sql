---------------------------------Admins data

INSERT INTO 
admins 
    (username, password) 
VALUES 
    ('Bobur', crypt('1111', gen_salt('bf'))) RETURNING *;


---------------------------------Events data 

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
) VALUES  (
        'Information Technologies', 
        'Java developer',
        '2022-02-22',
        '13:00',
        'online',
        'Alisher Isaevdan biznes va IT bo`yicha master klass',
        'Najot Ta`lim jamoasi o`z o`quvchilari uchun manfaatli bo`lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya`ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to`plashga qaror qildik.',
        'Najot Ta`lim jamoasi o`z o`quvchilari uchun manfaatli bo`lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya`ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to`plashga qaror qildik. Kuni kecha bo`lib o`tgan uchrashuvda to`rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to`g`risida e`lonli ma`lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi. Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o`rin egalari qimmatbaho sovg`alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.',
        '{biznesvait.png}',
        'yuridik',
        'Abbos Janizakov', 
        'Product designer', 
        '{"998998455055", "998330033033"}',
        'https://www.youtube.com/liver24',
        'Najot Talim MCHJ' ) RETURNING *;

    UPDATE events SET status = 'active' WHERE event_id = 1 RETURNING *; 