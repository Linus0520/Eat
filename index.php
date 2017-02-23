<!Doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<meta name= "viewport" content="width=device-width, initial-scale=1.0">
	<title>Eat</title>
	<link rel="stylesheet" type="text/css" href="css/eat.css"/>
	<script src="js/myScript.js"></script>
</head>
<body>
<!-- Use div+id to seperate the main body into four parts -->
	<div id="folk">
		<div class="arrow"><span><a href="#slogan">&#8964;</a></span></div>
	</div>

	<div id="slogan">
<!-- Create a php function to change the greeting sentence based on the time -->		
        <h1><?php
			date_default_timezone_set('America/Toronto');
			$time = date("H");
			if( $time < 13 ) {
				echo "Don't know what to eat for lunch?";			
			} else {
				echo "Don't know what to eat for dinner?";
			}
	    ?></h1>
		<div class="btn"><a href="#main" >Ask Me</a></div>
	</div>

<!-- The images in the main part will constantly change in every 0.1s and can be stoped or started by click a same button -->
	<div id="main">
		<img class="food" src='images/01.png' />
		<button id="bt" value="Stop" onclick = "stop();" style="outline: none;">Stop</button>
		<h3>Click the button to see the option</h3>
	</div>

	<div id ="footer">
		<h2>Enjoy!</h2>
	</div>
</body>
</html>
