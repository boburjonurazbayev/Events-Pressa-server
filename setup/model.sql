---------------------------------------------------------CREATE database pressa

DROP DATABASE IF EXISTS pressa;
CREATE DATABASE pressa;
\c pressa;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

----------------------------------------------------------Events table

CREATE TYPE statusType AS enum('inactive', 'active', 'cancelled' );
CREATE TYPE eventType AS enum('online', 'offline');
CREATE TYPE personalityType AS enum('jismoniy', 'yuridik');

DROP TABLE IF EXISTS events;
CREATE TABLE events(
    event_id SERIAL PRIMARY KEY,
    category VARCHAR(60) NOT NULL,
    sub_category VARCHAR(60) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    event_type eventType NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    text TEXT NOT NULL,
    images TEXT [] NOT NULL,
    status statusType DEFAULT 'inactive' NOT NULL, 
    personality personalityType NOT NULL,
    fullname VARCHAR(60) NOT NULL,
    profession VARCHAR(60) NOT NULL,
    contact TEXT [],
    link VARCHAR(60),
    company VARCHAR(60)
);

CREATE INDEX status_ind ON events (status) WHERE status = 'active';

---------------------------------------------------------------Admins table

DROP TABLE IF EXISTS admins;
CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(60) NOT NULL
);