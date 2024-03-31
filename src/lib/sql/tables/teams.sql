CREATE TABLE IF NOT EXISTS "teams" (
    id serial primary key,
    user_id integer,
    all_star integer,
    most_improved integer,
    salary_cap integer,
    rookie integer,
    constraint fk_user foreign key (user_id) references user(id),
    constraint fk_all_star foreign key (all_star) references all_star_team(id),
    constraint fk_most_improved foreign key (most_improved) references most_improved_team(id),
    constraint fk_rookie foreign key (rookie) references rookie_team(id),
    constraint fk_salary_cap foreign key (salary_cap) references salary_cap_team(id)
)
