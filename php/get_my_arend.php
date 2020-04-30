<?php

//require_once("auth.php");
$incoming_user = ["name"=>"Kate", "surname"=>"ostin79", "e_mail"=>"1", "password"=>"1", "id"=>54];

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

if(!isset($incoming_user))
{
    echo json_encode(["status"=>"error"]);
    exit();
}

require_once "verify_my_arend.php";

if(isset($new_arend_total[$incoming_user["id"]]))
    echo json_encode($new_arend_total[$incoming_user["id"]], JSON_UNESCAPED_UNICODE);
else
    echo "[]";