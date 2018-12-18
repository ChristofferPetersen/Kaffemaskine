<?php
    $dbServername = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "Kaffemaskine";

    //Skab forbindelse.
    $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

    //Tjek forbindelse.
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>