<?php
    include_once("conn.php");
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="script.js"></script>        
    </head>
    <body>
        <div id="maskineBaggrund">
            <div id="top">
                <div id="maelkFloede">
                    <h1>M</h1>
                    <h1>Æ</h1>
                    <h1>L</h1>
                    <h1>K</h1>
                </div>

                <div id="sukker">
                    <h1>S</h1>
                    <h1>U</h1>
                    <h1>K</h1>
                    <h1>K</h1>
                    <h1>E</h1>
                    <h1>R</h1>
                </div>

                <div id="kakao">
                    <h1>K</h1>
                    <h1>A</h1>
                    <h1>K</h1>
                    <h1>A</h1>
                    <h1>O</h1>
                </div>

                <div id="kaffe">
                    <h1>K</h1>
                    <h1>A</h1>
                    <h1>F</h1>
                    <h1>F</h1>
                    <h1>E</h1>
                </div>
            </div>

            <?php
                $sql = "SELECT * FROM brygfunktioner";
            ?>

            <div id="bottom">
                <div id="display">
                   <h1 id="brygdisplay">Bryg</h1>
                   <h2 id="beskrivelsedisplay">Beskrivelse</h2>
                   <h3 id="tiddisplay">Tid</h3>
                   <h3 id="styrkedisplay">Styrke</h3>
                   <h3 id="sukkerdisplay">Sukker</h3>
                   <h3 id="maelkdisplay">Mælk</h3>
                </div>

                <div id="indsats">
                    <div id="kopHolder">

                    </div>

                    <div id="drypbakke">

                    </div>
                </div>

                <div id="knapper">
                    <div id="bryg">
                        <button id="knap1">Kaffe</button>
                        <button id="knap2">Kaffe med sukker</button>
                        <button id="knap3">Kaffe med mælk</button>
                        <button id="knap4">Espresso</button>
                        <button id="knap5">Mocca</button>
                        <button id="knap6">Cappuccino</button>
                        <button id="knap7">Cafelatte</button>
                        <button id="knap8">Wiener melange</button>
                        <button id="knap9">Kakao</button>
                        <button id="knap10">Varmt vand</button>
                    </div>

                    <div id="kontrol">
                        <button id="knap11">Styrke +</button>
                        <button id="knap12">Sukker +</button>
                        <button id="knap13">Mælk +</button>
                        <button id="knap14">Start bryg</button>
                    </div>                    
                </div>
            </div>
        </div>
    </body>
</html>