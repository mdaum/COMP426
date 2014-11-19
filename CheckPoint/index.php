<!-- Once we(or I) get php running -->
<!-- <?php include("head.php"); ?> -->

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
  <script src="js/script.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <link href='http://fonts.googleapis.com/css?family=Roboto:700,500|Exo+2:400,300,600' rel='stylesheet' type='text/css'>
  <style>
      body {
        padding-top: 70px;
        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
    }
    </style>
</head>

<body id="login-page">
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
                </ul>
            </div>
        </div>
    </nav>
    <!-- Page Content -->
 <div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <div id="popular">
        <h2>ALL TIME FAVORITES</h2>
        <div class="row"><div class="col-md-6">
          <div id="first"><div class="description"><div class="title">Evil Within</div></div></div>
        </div>
        <div class="col-md-6">
        <div id="second"><div class="description"><div class="title">Skyrim</div></div></div>
      </div></div>
      <div class="row"><div class="col-md-6">
        <div id="third"><div class="description"><div class="title">Portal 2</div></div></div>
        </div>
          <div class="col-md-6">
        <div id="fourth"><div class="description"><div class="title">Halo 4</div></div></div>
         
      </div>
      </div>
    </div>
    </div>
    <div class="col-md-6">
      <div id="login-or-join">
        <h1>LOG IN</h1>
          <div id="sign-up-btn"><button type="button" id="sign-up-btn">Sign Up</button></div>
          <hr>
          <form role="form" id="sign-in">
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="remember-user">
              <label>
                <input type="checkbox"> Remember me!
              </label>
            </div>
              <div id="login-btn"><button type="submit" class="btn">Submit</button></div>
          </form>
        </div> 
      </div>
  </div>
</div>
  <script src="js/script.js"></script>
  <script src="js/userscript.js"></script>
</body>
</html>
    