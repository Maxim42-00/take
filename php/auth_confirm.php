<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

$accounts_json = file_get_contents("accounts.txt");
$accounts = json_decode($accounts_json, true);

$input_account_json = file_get_contents("php://input");
$input_account = json_decode($input_account_json, true);

unset($id);

foreach($accounts as $account)
{
    if(($account["e_mail"] === $input_account["e_mail"]) &&
       ($account["password"] === $input_account["password"]))
    {
        $id=$account["id"];
        $cur_user = $account;
        break;
    }
}

if(isset($id))
{
    setcookie("e_mail", $input_account["e_mail"]);
    setcookie("password", $input_account["password"]);
    $cur_user["status"]="ok";
    echo json_encode($cur_user, JSON_UNESCAPED_UNICODE);
}
else
{
    echo json_encode(["status"=>"error"]);
}