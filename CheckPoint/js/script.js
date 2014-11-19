// Code from http://www.textfixer.com/tutorials/html-search-box.php
$(function() {
	$("#search-form").click(function() {
		if ($("#search-form").val() == "Snoop out a game..."){
			$("#search-form").val(""); 
		}
	});
});

$(document).on("click", "#sign-up-btn", function() {
	$("#login-or-join").empty();
	$("#login-or-join").append(
		'<h1>SIGN UP</h1><div id="log-in-btn"><button type="button" id="log-in-btn">Log In</button></div><hr><form role="form" id="sign-up"><div class="form-group"><input type="text" class="form-control" id="inputFirst" placeholder="First name"><input type="text" class="form-control" id="inputLast" placeholder="Last name"><input type="email" class="form-control" id="inputEmail" placeholder="Enter email"></div><div class="form-group"><input type="password" class="form-control" id="inputPassword" placeholder="Password"><input type="password" class="form-control" id="inputRetypePassword" placeholder="Retype password"></div><div id="signup-btn"><button type="submit" class="btn" id="submit-btn">Sign Up</button></div></form>');
    submit=document.getElementById("submit-btn");
    var firstName,lastName,email,password,passwordRetype,answer,willRecord;
    submit.onclick=function(){
        firstName=document.getElementById("inputFirst").value;
         lastName=document.getElementById("inputLast").value;
         email=document.getElementById("inputEmail").value;
         password=document.getElementById("inputPassword").value;
         passwordRetype=document.getElementById("inputRetypePassword").value;
         willRecord=true;
         answer="";
         if(!namesOk(firstName,lastName)){
         if(willRecord==true)answer+="We can't sign you up because:\n";
         willRecord=false;
         answer+="You did not enter a valid first/last name!\n";
         }
         if(!emailOk(email)){
         if(willRecord==true)answer+="We can't sign you up because:\n";
         willRecord=false;
         answer+="You did not enter a valid email!\n";
         }
         if(!passwordOk(password,passwordRetype)){
         if(willRecord==true)answer+="We can't sign you up because:\n";
         willRecord=false;
         answer+="Your passwords don't match!";
         }
         if(willRecord) answer+="Your all set! Have fun :)";
         alert(answer);
    };










//functions
    var namesOk=function(firstName,lastName){
        if(/[a-z0-9]/.test(firstName)&&(/[a-z0-9]/.test(lastName)))return true;
        return false;
    };
    var emailOk=function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    var passwordOk=function(password,password2){
        if(password===password2)return true;
        return false;
    };
});

$(document).on("click", "#log-in-btn", function() {
	$("#login-or-join").empty();
	$("#login-or-join").append(
		'<h1>LOG IN</h1><div id="sign-up-btn"><button type="button" id="sign-up-btn">Sign Up</button></div><hr><form role="form" id="sign-in"><div class="form-group"><input type="email" class="form-control" id="inputEmail" placeholder="Email"></div><div class="form-group"><input type="password" class="form-control" id="inputPassword" placeholder="Password"></div><div class="remember-user"><label><input type="checkbox"> Remember me!</label></div><div id="login-btn"><button type="submit" class="btn">Submit</button></div></form>');	
});

 $( document ).ready(function() {
$('.dropdown-toggle').dropdown();


var max_games_returned = 5; //Number of games to be returned to the user//

// Game object
function Game(name,genre,release_date,difficulty,system)
{
this.name = name;
this.genre = genre;
this.release_data = release_date;
this.difficulty = difficulty;
this.system = system;
this.priority = 0;
};

var daGames = []; 

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
if(daGames[i].system == system)
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
returned_games[returned_games.length] = daGames[i];
games_returned++;
}
}
}

//Now to output all the games we have found//

for(var i = 0;i < returned_games.length;i++)
{
//Add some jquery code to output returned_games[i]//
}

});