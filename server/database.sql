DROP DATABASE IF EXISTS hockey_simulation;

CREATE DATABASE hockey_simulation;

CREATE TABLE world_file(
    file_id SERIAL PRIMARY KEY,
    file_name VARCHAR(50),
    active Not NULL boolean
);

CREATE TABLE League(
    league_id SERIAL PRIMARY KEY,
    NOT NULL FOREIGN KEY file_id REFERENCES world_file(file_id),
    LeagueName NOT NULL VARCHAR(150),
    LeagueAbrv NOT NULL VARCHAR(3),
    LeagueLevel ,
    DivsPerConference int,
    Conferences int,
    NumTeams int,
    NumGP_vs_Div int,
    NumGP_vs_Conf int,
    NumGP_vs_Other int,
    SimMethod boolean,
    PlayoffSeeding VARCHAR(50),
    HasDraft boolean,
    DraftRounds int,
    FOREIGN KEY DevLeague REFERENCES League(league_id)
);

CREATE TABLE Team(
    team_id SERIAL PRIMARY KEY,
    NOT NULL FOREIGN KEY file_id REFERENCES world_file(file_id),
    NOT NULL FOREIGN KEY league_id REFERENCES League(league_id),
    City NOT NULL VARCHAR(25),
    Nickname NOT NULL VARCHAR(25),
    Abbreviation NOT NULL VARCHAR(3),
    YearFounded NOT NULL int,
    FOREIGN KEY Conf_id REFERENCES Conference(Conf_id),
    FOREIGN KEY Div_id REFERENCES Division(Div_id),
    FOREIGN KEY captain_id REFERENCES Player(player_id),
    FOREIGN KEY A1_id REFERENCES Player(player_id),
    FOREIGN KEY A2_id REFERENCES Player(player_id),
    FOREIGN KEY DevTeam_id REFERENCES Team(team_id)
);

CREATE TABLE Player (
    player_id SERIAL PRIMARY KEY,
    FOREIGN KEY file_id REFERENCES world_file(file_id),
    FOREIGN KEY currTeam_id REFERENCES Team(team_id),
    First_Name NOT NULL VARCHAR(25),
    Last_Name NOT NULL VARCHAR(50),
    Position NOT NULL VARCHAR(2),
    Age NOT NULL VARCHAR(3),
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
    FOREIGN KEY league_id REFERENCES League(league_id),
    FOREIGN Key file_id REFERENCES world_file(file_id),
    ConfName NOT NULL VARCHAR(50)
);

CREATE TABLE Division (
    Div_id SERIAL PRIMARY KEY,
    FOREIGN KEY league_id REFERENCES League(league_id),
    FOREIGN KEY file_id REFERENCES world_file(file_id),
    FOREIGN KEY Conf_id REFERENCES Conference(Conf_id),
    DivName NOT NULL VARCHAR(50),
    NumTeams int
);

CREATE TABLE GameSched (
    game_id SERIAL PRIMARY KEY,
    FOREIGN KEY home_id REFERENCES Team(team_id),
    FOREIGN KEY away_id REFERENCES Team(team_id),
    FOREIGN KEY file_id REFERENCES world_file(file_id),
    GameDate date
);

CREATE TABLE CompleteGame (
    complete_id SERIAL PRIMARY KEY,
    FOREIGN KEY game_id REFERENCES GameSched(game_id),
    FOREIGN KEY home_id REFERENCES Team(team_id),
    FOREIGN KEY away_id REFERENCES Team(team_id),
    FOREIGN KEY file_id REFERENCES world_file(file_id),
    homeGoals int,
    awayGoals int,
    Overtime boolean,
    FOREIGN KEY winner_id REFERENCES Team(team_id),
    FOREIGN KEY loser_id REFERENCES Team(team_id)
);

CREATE TABLE PlayerSeason (
    PS_id SERIAL PRIMARY KEY,
    FOREIGN KEY player_id REFERENCES Player(player_id),
    FOREIGN KEY file_id REFERENCES world_file(file_id),
    FOREIGN KEY team_id REFERENCES Team(team_id),
    YearOf int,
    GP int,
    Goals int,
    Assists int,
    PlusMinus int,
    YearlyRating int
);

CREATE TABLE GoalieSeason (
    GS_id SERIAL PRIMARY KEY,
    FOREIGN KEY goalie_id REFERENCES Player(player_id),
    FOREIGN KEY file_id REFERENCES world_file(file_id),
    FOREIGN KEY team_id REFERENCES Team(team_id),
    YearOf int,
    GP int,
    Wins int,
    GAA real,
    SavePercent real,
    YearlyRating int
);

CREATE TABLE LeagueSeason (
    LS_id SERIAL PRIMARY KEY,
    FOREIGN KEY league_id REFERENCES League(league_id),
    FOREIGN KEY file_id REFERENCES world_file(file_id),
    YearOf int,
    FOREIGN KEY champ_id REFERENCES Team(team_id),
    FOREIGN KEY runnerup_id REFERENCES Team(team_id),
    FOREIGN KEY first_id REFERENCES Team(team_id),
    FOREIGN KEY last_id REFERENCES Team(team_id)
);

CREATE TABLE TeamSeason (
    TS_id SERIAL PRIMARY KEY,
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