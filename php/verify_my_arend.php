<?php

$arend_total_json = file_get_contents("my_arend.txt");
$arend_total = json_decode($arend_total_json, true);

$new_arend_total=[];

$true_time = time();

foreach($arend_total as $key=>$cur_user_arends)
{
    foreach($cur_user_arends as $k=>$arend)
    {
        if($true_time < $arend["end"])
        {
            $new_arend_total[$key][$k] = $arend;
        }
    }
}

file_put_contents("my_arend.txt", json_encode($new_arend_total));