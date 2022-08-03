---------------------------------------------------------CREATE database pressa

DROP DATABASE IF EXISTS pressa;
CREATE DATABASE pressa;
\c pressa;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

----------------------------------------------------------Events table

drop table if exists events;
create table events(
    event_id serial primary key,
    organiser_fullname varchar(50) not null,
    organiser_profession varchar(60) not null,
    organiser_tel1 varchar(12) not null,
    organiser_tel2 varchar(12) not null,
    event_date varchar(20) not null,
    event_category varchar(50) not null,
    event_type varchar(10) not null,
    event_link text default null,
    post_title varchar(200) not null,
    post_desc text not null,
    post_image text not null,
    post_text text not null,
    status varchar(50) default 'unactive'
);

---------------------------------------------------------------Admins table

DROP TABLE IF EXISTS admins;
CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(60) NOT NULL
);