<?php

require_once("auth.php");
//$incoming_user = ["name"=>"Kate", "surname"=>"ostin79", "e_mail"=>"1", "password"=>"1", "id"=>58];

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

if(!isset($incoming_user))
{
    echo json_encode(["status"=>"error"]);
    exit();
}

$messages_json = file_get_contents("forum.txt");


if(isset($_GET["message"]))
{
    $messages = json_decode($messages_json, true);

    $new_message = [];
    $new_message["text"] = file_get_contents("php://input");
    $new_message["name"] = $incoming_user["name"]. " " . $incoming_user["surname"];
    $new_message["ip"] = $_SERVER["REMOTE_ADDR"];
    $new_message["time"] = time();

    $messages[] = $new_message;
    $messages_json = json_encode($messages, JSON_UNESCAPED_UNICODE);
    file_put_contents("forum.txt", $messages_json);
}



echo $messages_json;
