CREATE TABLE IF NOT EXISTS "most_improved_team" (
    id serial primary key,
    team_id integer,
    first_male integer,
    second_male integer,
    third_male integer,
    first_female integer,
    second_female integer,
    third_female integer,
    constraint fk_team foreign key (team_id) references teams(id),
    constraint fk_first_male_most_improved foreign key (first_male) references athletes(id),
    constraint fk_first_female_most_improved foreign key (first_female) references athletes(id),
    constraint fk_second_male_most_improved foreign key (second_male) references athletes(id),
    constraint fk_second_female_most_improved foreign key (second_female) references athletes(id),
    constraint fk_third_male_most_improved foreign key (third_male) references athletes(id),
    constraint fk_third_female_most_improved foreign key (third_female) references athletes(id)
)
