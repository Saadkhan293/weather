<?php
 
// Importing DBConfig.php file.
include 'config.php';
 

 
$encodedata=file_get_contents('php://input');
$decodedata=json_decode($encodedata,true);
 
 // Populate User name from JSON $obj array and store into $name.
$username = $decodedata['username'];
 
 
// Populate Password from JSON $obj array and store into $password.
$password = $decodedata['password'];
$hashpassword=password_hash($password,PASSWORD_DEFAULT);


 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "INSERT INTO users (username,password) VALUES ('$username','$hashpassword')";
 
 
 if(mysqli_query($link,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'User Registered Successfully' ;
 
// Converting the message into JSON format.

 
 }
 else{
 
 $MSG= 'Try Again';
 
 
 }

 
 $Response[]=array("Message"=>$MSG);
 echo json_encode($Response);

?>