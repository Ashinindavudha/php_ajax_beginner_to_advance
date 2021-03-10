<?php
$con = mysqli_connect("localhost", "root", "", "login_db");
//check connection
if (mysqli_connect_errno()) {
   echo "Fail to connect to Mysql:" . mysqli_connect_errno();
}