<?php

unset($id);

if(isset($_COOKIE["e_mail"]) && isset($_COOKIE["password"]))
{
    $accounts_json = file_get_contents("accounts.txt");
    $accounts = json_decode($accounts_json, true);
    foreach($accounts as $account)
    {
        if(($account["e_mail"] === $_COOKIE["e_mail"]) &&
           ($account["password"] === $_COOKIE["password"]))
        {
            $id=$account["id"];
        }
    }
}