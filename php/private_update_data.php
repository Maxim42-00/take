<?php

require_once("auth.php");
//$incoming_user = ["name"=>"Kate", "surname"=>"ostin", "e_mail"=>"kate@princess.com", "password"=>"123", "id"=>54];

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");


if(!isset($incoming_user))
{
    echo "non_auth";
    exit();
}



$accounts_json = file_get_contents("accounts.txt");
$accounts = json_decode($accounts_json, true);

$new_account_json = file_get_contents("php://input");
$new_account = json_decode($new_account_json, true);

unset($error);

foreach($accounts as $account)
{
    if($account["id"] === $incoming_user["id"])
        continue;
    if($account["e_mail"] === $new_account["e_mail"]) $error = "exists";
}

if(isset($error))
{
    echo $error;
    exit();
}

foreach($accounts as &$account)
{
    if($account["id"] === $incoming_user["id"])
    {
        $account["name"] = $new_account["name"];
        $account["surname"] = $new_account["surname"];
        $account["e_mail"] = $new_account["e_mail"];
        $account["password"] = $new_account["password"];
        break;
    }
}

{

    setcookie("e_mail", $new_account["e_mail"]);
    setcookie("password", $new_account["password"]);

    $accounts_json = json_encode($accounts, JSON_UNESCAPED_UNICODE);
    file_put_contents("accounts.txt", $accounts_json);


    $new_account["status"] = "ok";
    echo json_encode($new_account, JSON_UNESCAPED_UNICODE);
}

