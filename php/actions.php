<?php

require_once("auth.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

if(!isset($incoming_user))
{
    echo '{"error": "non_auth"}';
    exit();
}

$items = file_get_contents("actions.txt");

echo $items;