--DROP DATABASE IF EXISTS hockey_simulation;

--CREATE DATABASE hockey_simulation;

CREATE TABLE world_file(
    file_name VARCHAR(50) PRIMARY KEY,
    active boolean,
    file_date date
);

CREATE TABLE League(
    league_id SERIAL PRIMARY KEY,
    file_name VARCHAR(50),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    LeagueName VARCHAR(150) NOT NULL,
    LeagueAbrv VARCHAR(3) NOT NULL,
    LeagueLevel int,
    DivsPerConf int,
    NumConferences int,
    NumTeams int,
    NumGP_vs_Div int,
    NumGP_vs_Conf int,
    NumGP_vs_Other int,
    SimMethod boolean,
    PlayoffSeeding VARCHAR(50),
    HasDraft boolean,
    DraftRounds int,
    DevLeague SERIAL,
    FOREIGN KEY (DevLeague) REFERENCES League(league_id)
);

CREATE TABLE Team(
    team_id SERIAL PRIMARY KEY,
    league_id SERIAL,
    file_name VARCHAR(50),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    FOREIGN KEY (league_id) REFERENCES League(league_id),
    City VARCHAR(25) NOT NULL,
    Nickname VARCHAR(25) NOT NULL,
    Abbreviation VARCHAR(3) NOT NULL,
    YearFounded int NOT NULL,
    Conf_id SERIAL,
    Div_id SERIAL,
    DevTeam_id SERIAL,
    FOREIGN KEY (Conf_id) REFERENCES Conference(Conf_id),
    FOREIGN KEY (Div_id) REFERENCES Division(Div_id),
    FOREIGN KEY (DevTeam_id) REFERENCES Team(team_id)
);

CREATE TABLE Player (
    player_id SERIAL PRIMARY KEY,
    file_name VARCHAR(50),
    currTeam_id SERIAL,
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    FOREIGN KEY (currTeam_id) REFERENCES Team(team_id),
    First_Name VARCHAR(25) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Position VARCHAR(2) NOT NULL,
    Age VARCHAR(3) NOT NULL,
    Rating int,
    PerformanceRating int,
    injured boolean,
    RemDaysInjured int,
    DraftYear int,
    DraftPickNum int,
    contractYears int,
    contractSalary int,
    retired boolean
);

CREATE TABLE Conference (
    Conf_id SERIAL PRIMARY KEY,
    league_id SERIAL,
    file_name VARCHAR(50),
    FOREIGN KEY (league_id) REFERENCES League(league_id),
    FOREIGN Key (file_name) REFERENCES world_file(file_name),
    ConfName VARCHAR(50) NOT NULL
);

CREATE TABLE Division (
    Div_id SERIAL PRIMARY KEY,
    league_id SERIAL,
    file_name VARCHAR(50),
    Conf_id SERIAL,
    FOREIGN KEY (league_id) REFERENCES League(league_id),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    FOREIGN KEY (Conf_id) REFERENCES Conference(Conf_id),
    DivName VARCHAR(50) NOT NULL,
    NumTeams int
);

CREATE TABLE GameSched (
    game_id SERIAL PRIMARY KEY,
    home_id SERIAL,
    away_id SERIAL,
    file_name VARCHAR(50),
    FOREIGN KEY (home_id) REFERENCES Team(team_id),
    FOREIGN KEY (away_id) REFERENCES Team(team_id),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    GameDate date
);

CREATE TABLE CompleteGame (
    complete_id SERIAL PRIMARY KEY,
    game_id SERIAL,
    home_id SERIAL,
    away_id SERIAL,
    file_name VARCHAR(50),
    winner_id SERIAL,
    loser_id SERIAL,
    FOREIGN KEY (game_id) REFERENCES GameSched(game_id),
    FOREIGN KEY (home_id) REFERENCES Team(team_id),
    FOREIGN KEY (away_id) REFERENCES Team(team_id),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    homeGoals int,
    awayGoals int,
    Overtime boolean,
    FOREIGN KEY (winner_id) REFERENCES Team(team_id),
    FOREIGN KEY (loser_id) REFERENCES Team(team_id)
);

CREATE TABLE PlayerSeason (
    PS_id SERIAL PRIMARY KEY,
    player_id SERIAL,
    file_name VARCHAR(50),
    team_id SERIAL,
    FOREIGN KEY (player_id) REFERENCES Player(player_id),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    FOREIGN KEY (team_id) REFERENCES Team(team_id),
    YearOf int,
    GP int,
    Goals int,
    Assists int,
    PlusMinus int,
    YearlyRating int
);

CREATE TABLE GoalieSeason (
    GS_id SERIAL PRIMARY KEY,
    goalie_id SERIAL,
    file_name VARCHAR(50),
    team_id SERIAL,
    FOREIGN KEY (goalie_id) REFERENCES Player(player_id),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    FOREIGN KEY (team_id) REFERENCES Team(team_id),
    YearOf int,
    GP int,
    Wins int,
    GAA real,
    SavePercent real,
    YearlyRating int
);

CREATE TABLE LeagueSeason (
    LS_id SERIAL PRIMARY KEY,
    league_id SERIAL,
    file_name VARCHAR(50),
    champ_id SERIAL,
    runnerup_id SERIAL,
    first_id SERIAL,
    last_id SERIAL,
    FOREIGN KEY (league_id) REFERENCES League(league_id),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    YearOf int,
    FOREIGN KEY (champ_id) REFERENCES Team(team_id),
    FOREIGN KEY (runnerup_id) REFERENCES Team(team_id),
    FOREIGN KEY (first_id) REFERENCES Team(team_id),
    FOREIGN KEY (last_id) REFERENCES Team(team_id)
);

CREATE TABLE TeamSeason (
    TS_id SERIAL PRIMARY KEY,
    team_id SERIAL,
    file_name VARCHAR(50),
    FOREIGN KEY (team_id) REFERENCES Team(team_id),
    FOREIGN KEY (file_name) REFERENCES world_file(file_name),
    YearOf int,
    Wins int,
    Losses int,
    OTL int,
    GoalsFor int,
    GoalsAgainst int,
    MadePlayoffs boolean,
    DivRank int,
    LeagueRank int
);