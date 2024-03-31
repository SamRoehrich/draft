CREATE TABLE IF NOT EXISTS "rookie_team" (
    id serial primary key,
    team_id integer,
    first_male integer,
    first_female integer,
    constraint fk_team foreign key (team_id) references teams(id),
    constraint fk_first_male_rookie foreign key (first_male) references athletes(id),
    constraint fk_first_female_rookie foreign key (first_female) references athletes(id)
)
