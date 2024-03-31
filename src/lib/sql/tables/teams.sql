CREATE TABLE IF NOT EXISTS "teams" (
    id serial primary key,
    user_id integer,
    team_name varchar(255) unique,
)
