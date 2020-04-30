<?php


if(isset($_COOKIE["e_mail"]) && isset($_COOKIE["password"]))
{
    setcookie("e_mail");
    setcookie("password");
}

echo "by";