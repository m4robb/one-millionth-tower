<?php
global $lg, $onfb_smart_navbar, $autresection;
header("Access-Control-Allow-Origin: *");
error_reporting(0);
$lg = 'en';
$onfb_smart_navbar = 1;
require_once($_SERVER['DOCUMENT_ROOT'].'/navbar/index.php');
$media_server_url = "http://highrise-stage.nfb.ca/1mt/"; /// url PLUS forward slash
?>