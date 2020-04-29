<?php

require_once("auth.php");
//$incoming_user = ["name"=>"Kate", "surname"=>"ostin", "e_mail"=>"kate@princess.com", "password"=>"123", "status"=>"ok"];

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");


if(!isset($incoming_user))
{
    echo "non_auth";
    exit();
}

$incoming_user["status"] = "ok";

echo json_encode($incoming_user, JSON_UNESCAPED_UNICODE);