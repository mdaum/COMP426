/**
 * Created by Maxwell on 11/19/2014.
 */
var max_games_returned = 5; //Number of games to be returned to the user//

function Game(name,genre,release_date,difficulty,system)//Definition of a Game object//
{
    this.name = name;
    this.genre = genre;
    this.release_data = release_date;
    this.difficulty = difficulty;
    this.system = system;
    this.priority = 0;
};

var daGames = []; //Array to hold all the games//

//Adding all the games to the array//
daGames[daGames.length] = new Game("Ratchet and Clank","Action/Adventure",2002,"medium","Playstation 2");
daGames[daGames.length] = new Game("Dark Souls","RPG",2011,"hard","Playstation 3"); // For cross-platform games, pick just one for now//
daGames[daGames.length] = new Game("Portal","Puzzle",2007,"hard","Playstation 3");
daGames[daGames.length] = new Game("Jak and Daxter: The Precursor Legacy","Platformer",2001,"easy","Playstation 2");
daGames[daGames.length] = new Game("Kingdom Hearts","RPG",2002,"medium","Playstation 2");
daGames[daGames.length] = new Game("Gears of War","Shooter",2006,"medium","Xbox 360");
daGames[daGames.length] = new Game("Halo:Combat Evolved","Shooter",2001,"medium","Xbox");
daGames[daGames.length] = new Game("Spyro","Platformer",1998,"easy","Playstation");
daGames[daGames.length] = new Game("Super Smash Bros","Fighter",1999,"hard","Nintendo 64");
daGames[daGames.length] = new Game("God of War","Action/Adventure",2005,"medium","Playstation 2");
daGames[daGames.length] = new Game("Call of Duty 4: Modern Warfare","Shooter",2007,"easy","Playstation 3");
daGames[daGames.length] = new Game("Super Mario 64","Platformer",1996,"medium","Nintendo 64");
daGames[daGames.length] = new Game("Diablo III","RPG",2012,"medium","PC");
daGames[daGames.length] = new Game("The Legend of Zelda: Twilight Princess","Action/Adventure",2006,"medium","Wii");
daGames[daGames.length] = new Game("Metroid Prime","Action/Adventure",2002,"easy","Gamecube");
daGames[daGames.length] = new Game("Crash Bandicoot","Platformer",1996,"easy","Playstation");
daGames[daGames.length] = new Game("Mario Kart: Double Dash","Racing",2003,"easy","Gamecube");
daGames[daGames.length] = new Game("Destiny","Shooter",2014,"hard","Playstation 4");
daGames[daGames.length] = new Game("Sunset Overdrive","Action/Adventure",2014,"medium","Xbox One");
daGames[daGames.length] = new Game("Silent Hill","Horror",1999,"hard","Playstation");


//Add some jquery stuff here to extract the information the user inputted//

var genre;
var earliest_yor;
var latest_yor;
var difficulty;
var platform;
function pickGames()
{
    $("#submit").click(function()
    {
        $(".smallhonkingdiv").empty();
        genre = $("input[name = 'genre']").val();
        earliest_yor = $("input[name = 'earliest_yor']").val();
        latest_yor = $("input[name = 'latest_yor']").val();
        difficulty = $("input[name = 'difficulty']").val();
        platform = $("input[name = 'platform']").val();


//Loop to update all of the game's priority values based on how much of the user input they match//

        for(var i = 0; i < daGames.length;i++)
        {
            if(daGames[i].genre == genre)
            {
                daGames[i].priority ++;
            }
            if(daGames[i].release_date >= earliest_yor && daGames[i].release_date <= latest_yor)
            {
                daGames[i].priority ++;
            }
            if(daGames[i].difficulty == difficulty)
            {
                daGames[i].priority ++;
            }
            if(daGames[i].system == platform)
            {
                daGames[i].priority ++;
            }
        }

//Now to build the results to be sent to the user. The max_games_returned variable will determine the size of the result set, and games will be added to the set based on their priority//



        var returned_games = [];
        var games_returned = 0;

        for(var i = 4; i >= 0 && games_returned <= max_games_returned; i--) //Start i at the highest priority and work my way down, stop when I have returned the max number of games//
        {
            for(var j = 0;j < daGames.length && games_returned <= max_games_returned;j++)
            {
                if(daGames[j].priority == i)
                {
                    returned_games[returned_games.length] = daGames[j];
                    games_returned++;
                }
            }
        }

//Now to output all the games we have found//
        for(var i = 0;i < returned_games.length;i++)
        {
            $(".smallhonkingdiv").append(returned_games[i].name);
            $(".smallhonkingdiv").append("||||");
        }
    });
}

pickGames();