<?php
include 'config.php';

$json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.
$username = $obj['username'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];


 
//Applying User Login query with email and password match.
$Sql_Query = "select * from users where username = '$username' ";
 
// Executing SQL Query.
$check =mysqli_query($link,$Sql_Query);

if(mysqli_num_rows($check)>0)
{
    while($row=mysqli_fetch_array($check))
    {
        if(password_verify($password,$row['password']))
        {
            $SuccessLoginMsg = 'Data Matched';
            $SuccessLoginJson = json_encode($SuccessLoginMsg);
            echo $SuccessLoginJson ; 
 
 }
        else
        {
            $InvalidMSG = 'Invalid Username or Password Please Try Again' ;
            // Converting the message into JSON format.
            $InvalidMSGJSon = json_encode($InvalidMSG);
            // Echo the message.
            echo $InvalidMSGJSon;
        }
 
 
    }
}
mysqli_close($link);
?>
 

    
 
 