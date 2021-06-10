<?php
include 'config.php';
$encodedata=file_get_contents('php://input');
$decodedata=json_decode($encodedata,true);
$username=$decodedata['username'];
$query="select * from users where username='$username'";
$table=mysqli_query($link,$query);
if(mysqli_num_rows($table)>0){
    $row=mysqli_fetch_assoc($table);
    $location=$row['location'];
}
else{
    $location="";

}
$response[]=array("location"=>$location);
echo json_encode($response);