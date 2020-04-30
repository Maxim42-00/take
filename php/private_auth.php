<?php

//require_once("auth.php");
$incoming_user = ["name"=>"Kate", "surname"=>"ostin79", "e_mail"=>"1", "password"=>"1", "id"=>58];

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");


if(!isset($incoming_user))
{
    echo json_encode(["status"=>"error"]);
    exit();
}

$incoming_user["status"] = "ok";

echo json_encode($incoming_user, JSON_UNESCAPED_UNICODE);