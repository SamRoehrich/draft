CREATE TABLE IF NOT EXISTS "races"(
    id serial primary key,
    name varchar(255),
    start_date timestamp,
    location varchar(255),
    elevation integer,
    distance integer,
    elevation_profile varchar(255),
    host_website varchar(255),
    image varchar(255)
)
