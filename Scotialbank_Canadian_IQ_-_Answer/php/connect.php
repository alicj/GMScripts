
<?php
error_reporting(E_ALL); ini_set('display_errors', '1');
$db_name = '';
$db_user = '';
$db_password = '';
$db_host = '';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_name) or die('Could not connect: ' . mysqli_connect_error());
~
