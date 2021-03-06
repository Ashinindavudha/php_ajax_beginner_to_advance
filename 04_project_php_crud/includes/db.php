<?php
//mysql connection 
$dbServer = "localhost";
$dbUser = "root";
$dbPassword = "";
$db_name = "php_crud";
$conn = mysqli_connect($dbServer, $dbUser, $dbPassword, $db_name) or die('Mysql Connection Error:' . mysqli_connect_error());