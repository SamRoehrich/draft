CREATE TABLE if NOT EXISTS "athletes"(
    id serial primary key,
    first_name varchar(255),
    last_name varchar(255),
    age integer,
    profile_picture varchar(255),
    instagram varchar(255),
    strava varchar(255)
)
