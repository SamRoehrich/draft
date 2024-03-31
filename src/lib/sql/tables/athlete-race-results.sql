CREATE TABLE IF NOT EXISTS "athlete_race_results" (
    id serial primary key,
    athlete_id integer,
    race_id integer,
    result integer,
    points integer,
    constraint fk_athlete foreign key (athlete_id) references athletes(id),
    constraint fk_race_id foreign key (race_id) references races(id)
)
