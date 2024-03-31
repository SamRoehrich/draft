CREATE TABLE IF NOT EXISTS "users" (
    id serial primary key,
    redis_key varchar(255) unique,
    name varchar(255),
    email varchar(255),
    user_name varchar(255),
    is_verified boolean
)
