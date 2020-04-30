<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

$accounts_json = file_get_contents("accounts.txt");
$accounts = json_decode($accounts_json, true);

$new_account_json = file_get_contents("php://input");
$new_account = json_decode($new_account_json, true);

unset($error);

foreach($accounts as $account)
{
    if($account["e_mail"] === $new_account["e_mail"]) $error = "exists";
}

if(isset($error))
{
    echo json_encode(["status"=>"error"]);
    exit();
}
else
{
    $id_json = file_get_contents("id.txt");
    $id_obj = json_decode($id_json, true);
    $id = $id_obj["id"];
    $new_account["id"] = $id;

    ++$id_obj["id"];
    file_put_contents("id.txt", json_encode($id_obj));

    setcookie("e_mail", $new_account["e_mail"]);
    setcookie("password", $new_account["password"]);

    $accounts[] = $new_account;
    $accounts_json = json_encode($accounts, JSON_UNESCAPED_UNICODE);
    file_put_contents("accounts.txt", $accounts_json);


    $new_account["status"] = "ok";
    echo json_encode($new_account, JSON_UNESCAPED_UNICODE);
}