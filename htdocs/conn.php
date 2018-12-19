<?php
    $dbServername = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "Kaffemaskine";

    //Skab forbindelse.
    $conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);

    //Tjek forbindelse.
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>