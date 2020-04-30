<?php

require_once("auth.php");
//$incoming_user = ["name"=>"Kate", "surname"=>"ostin79", "e_mail"=>"1", "password"=>"1", "id"=>54];

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

if(!isset($incoming_user))
{
    echo json_encode(["status"=>"error"]);
    exit();
}

$items = file_get_contents("actions.txt");

echo $items;