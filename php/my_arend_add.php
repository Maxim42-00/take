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

$my_arend_total_json = file_get_contents("my_arend.txt");
$my_arend_total = json_decode($my_arend_total_json, true);

if(isset($my_arend_total[$incoming_user["id"]]))
    $my_arend = $my_arend_total[$incoming_user["id"]];
else
    $my_arend = [];


$new_item_json = file_get_contents("php://input");
//$new_item_json = '{"img": "mouse"}';
$new_item = json_decode($new_item_json, true);



$new_id_json = file_get_contents("my_arend_id.txt");
$new_id = json_decode($new_id_json, true);
$id_value = $new_id["id"];
$new_item["id"] = $id_value;
++$new_id["id"];
file_put_contents("my_arend_id.txt", json_encode($new_id));



$my_arend[] = $new_item;

$my_arend_total[$incoming_user["id"]] = $my_arend;

file_put_contents("my_arend.txt", json_encode($my_arend_total, JSON_UNESCAPED_UNICODE));

echo json_encode(["status"=>"ok", "id"=>$id_value]);