CREATE TABLE questions (
   id serial primary key,
   question text not null,
   game_level text not null
);

CREATE TABLE player (
   id serial primary key,
   name text not null,
   unique_code varchar(255);
);

CREATE TABLE player_stats (
   id serial primary key,
   player_id int not null,
   score int not null,
   level text not null,
   hint_count int not null,
   foreign key (player_id) references player(id)
);

