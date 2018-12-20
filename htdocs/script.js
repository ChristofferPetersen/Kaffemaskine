function Knaptryk() {
    var tid = 0;
    var stopUr = 0;

    $("button#knap1").click(function() {
        tid = 10000
        stopUr = 10
        $("h3#brygdisplay").show().text("Kaffe.")
        $("p#beskrivelsedisplay").show().text("Sort kaffe uden sukker og mælk.")
        $("p#tiddisplay").show().text("10")
        $("button#knap12").hide()
        $("button#knap13").hide()
    })

    $("button#knap2").click(function() {
        tid = 12000
        stopUr = 12
        $("h3#brygdisplay").show().text("Kaffe med sukker.")
        $("p#beskrivelsedisplay").show().text("Sort kaffe med sukker.")
        $("p#tiddisplay").show().text("12")
        $("button#knap13").hide()
    })

    $("button#knap3").click(function() {
        tid = 12000
        stopUr = 12
        $("h3#brygdisplay").show().text("Kaffe med mælk.")
        $("p#beskrivelsedisplay").show().text("Sort kaffe med mælk.")
        $("p#tiddisplay").show().text("12")
        $("button#knap12").hide()
    })

    $("button#knap4").click(function() {
        tid = 10000
        stopUr = 10
        $("h3#brygdisplay").show().text("Espresso.")
        $("p#beskrivelsedisplay").show().text("Halv kop med ekstra stærk kaffe.")
        $("p#tiddisplay").show().text("10")
        $("button#knap12").hide()
        $("button#knap13").hide()
    })

    $("button#knap5").click(function() {
        tid = 15000
        stopUr = 15
        $("h3#brygdisplay").show().text("Mocca.")
        $("p#beskrivelsedisplay").show().text("Kvalitets kaffe fusioneret med kakao.")
        $("p#tiddisplay").show().text("15")
        $("button#knap12").hide()
        $("button#knap13").hide()
    })

    $("button#knap6").click(function() {
        tid = 15000
        stopUr = 15
        $("h3#brygdisplay").show().text("Cappuccino.")
        $("p#beskrivelsedisplay").show().text("Espresso med skummet varm mælk.")
        $("p#tiddisplay").show().text("15")
        $("button#knap12").hide()
    })

    $("button#knap7").click(function() {
        tid = 15000
        stopUr = 15
        $("h3#brygdisplay").show().text("Cafelatte.")
        $("p#beskrivelsedisplay").show().text("Kaffe med 2/3 dele mælk.")
        $("p#tiddisplay").show().text("15")
        $("button#knap12").hide()
    })

    $("button#knap8").click(function() {
        tid = 15000
        stopUr = 15
        $("h3#brygdisplay").show().text("Wiener melange.")
        $("p#beskrivelsedisplay").show().text("En herlig blanding af kaffe med mælk, sukker og blandet med kakao.")
        $("p#tiddisplay").show().text("15")
    })

    $("button#knap9").click(function() {
        tid = 10000
        stopUr = 10
        $("h3#brygdisplay").show().text("Kakao.")
        $("p#beskrivelsedisplay").show().text("Varm kakao baseret på mælk.")
        $("p#tiddisplay").show().text("10")
        $("button#knap12").hide()
        $("button#knap13").hide()
    })

    $("button#knap10").click(function() {
        tid = 6000
        stopUr = 6
        $("h3#brygdisplay").show().text("Varmt vand.")
        $("p#beskrivelsedisplay").show().text("Kogende vand 99 grader... Hot, hot & hot.")
        $("p#tiddisplay").show().text("6")
        $("button#knap11").hide()
        $("button#knap12").hide()
        $("button#knap13").hide()
    })

    $("button#knap11").click(function() {
        $("p#styrkedisplay").show().text("Styrke +")
    })

    $("button#knap12").click(function() {
        $("p#sukkerdisplay").show().text("Sukker +")
    })

    $("button#knap13").click(function() {
        $("p#maelkdisplay").show().text("Mælk +")
    })
        
    $("button#knap14").click(function() {

        var timer = setInterval(function() {
            if(stopUr > 0)
            {
                stopUr -= 1
                $("p#tiddisplay").text(stopUr)
            }
            else
            {                
                clearInterval(timer)
            }
        }
        ,1000
        )

        $("h3#brygdisplay").delay(tid).hide(0)
        $("p#beskrivelsedisplay").delay(tid).hide(0)
        $("p#tiddisplay").delay(tid).hide(0)
        $("p#styrkedisplay").delay(tid).hide(0)
        $("p#sukkerdisplay").delay(tid).hide(0)
        $("p#maelkdisplay").delay(tid).hide(0)
        $("button#knap11").delay(tid).show(0)
        $("button#knap12").delay(tid).show(0)
        $("button#knap13").delay(tid).show(0)
    })
}

$(document).ready(Knaptryk)