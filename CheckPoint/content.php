<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Game recomendations">
  <meta name="keywords" content="Video games, games, recomendations">
  <meta name="author" content="Tyler Newsome, Maxwell Daum, Devin Beauchamp">
  
  <title>CheckPoint</title>
  
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">

  <script src="js/jquery-1.11.0.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <link href='http://fonts.googleapis.com/css?family=Jura:600,500|Exo+2:400,300,600' rel='stylesheet' type='text/css'>
  <style>
      body {
        padding-top: 70px;
        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
    }
    </style>
</head>

<body>
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- OR SavePoint -->
                <a class="navbar-brand" href="#">CheckPoint</a>
            </div>

            <!-- Select difficulty (for game sort): easy medium hard -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="#">Shooter</a>
                    </li>
                    <li>
                        <a href="#">Indie</a>
                    </li>
                    <li>
                        <a href="#">Stategy</a>
                    </li>
                    <li>
                        <a href="#">Classic</a>
                    </li>
                    <li>
                        <a href="#">Role Playing</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <div id="search">
                          <!-- Add php code here to search games -->
                          <form id="new-search" method="get" action="http://www.google.com">
                            <input type="text" id="search-form" size="20" maxlength="120" value="Snoop out a game..."><button type="submit" class="search-button"><i class="fa fa-search"></i></button>

                          </form>
                         <div class="search-clear"></div>
                        </div>
                    </li>
                  <li>
                  <a href="index.php">Log In</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Page Content -->
<div class="container-fluid">
<div id="filter">
Advanced Search:
<ul>
<li id="date">Release Date <input type="text"></li>
<li id="console">Console<select><option>PS4</option><option>Xbox One</option><option>SNES</option></select></li>
<li id="difficulty">Difficulty <div>&starf;</div> <div>&starf;</div> <div>&starf;</div><div>&starf;</div> <div>&starf;</div></li>
</ul>
</div>
<!--Show this only if logged in-->
<div class="row games" id="suggestions">
  <h1>SUGGESTIONS</h1>
  <div class="col-md-4 top-game">here</div>
  <div class="col-md-8"><div class="supl-game">here</div>
  <div class="supl-game">here</div></div>
</div>
<hr>
<div class="row games" id="trending">
  <h1>TRENDING</h1>
  <div class="col-md-4 top-game">here</div>
</div>
<hr>
<div class="row games" id="shooter">
  <h1>SHOOTERS</h1>
</div>
<hr>
<div class="row games" id="indie">
  <h1>INDIE</h1>
</div>
  <script src="js/script.js"></script>
</body>
</html>