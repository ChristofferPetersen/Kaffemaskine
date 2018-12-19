function Knaptryk() {
    var tid = 0;

    $("button#knap1").click(function() {
        tid = 10000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap12").fadeOut()
        $("button#knap13").fadeOut()
    })

    $("button#knap2").click(function() {
        tid = 12000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap13").fadeOut()
    })

    $("button#knap3").click(function() {
        tid = 12000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap12").fadeOut()
    })

    $("button#knap4").click(function() {
        tid = 10000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap12").fadeOut()
        $("button#knap13").fadeOut()
    })

    $("button#knap5").click(function() {
        tid = 15000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap12").fadeOut()
        $("button#knap13").fadeOut()
    })

    $("button#knap6").click(function() {
        tid = 15000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap12").fadeOut()
    })

    $("button#knap7").click(function() {
        tid = 15000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap12").fadeOut()
    })

    $("button#knap8").click(function() {
        tid = 15000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
    })

    $("button#knap9").click(function() {
        tid = 10000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap12").fadeOut()
        $("button#knap13").fadeOut()
    })

    $("button#knap10").click(function() {
        tid = 6000
        $("h1#brygdisplay").show()
        $("h2#beskrivelsedisplay").show()
        $("h3#tiddisplay").show()
        $("button#knap11").fadeOut()
        $("button#knap12").fadeOut()
        $("button#knap13").fadeOut()
    })

    $("button#knap11").click(function() {
        $("h3#styrkedisplay").show()
    })

    $("button#knap12").click(function() {
        $("h3#sukkerdisplay").show()        
    })

    $("button#knap13").click(function() {
        $("h3#maelkdisplay").show()
    })
        
    $("button#knap14").click(function() {
        $("h1#brygdisplay").hide(tid)
        $("h2#beskrivelsedisplay").hide(tid)
        $("h3#tiddisplay").hide(tid)
        $("h3#styrkedisplay").hide(tid)
        $("h3#sukkerdisplay").hide(tid)  
        $("h3#maelkdisplay").hide(tid)
        $("button#knap11").show(tid)
        $("button#knap12").show(tid)
        $("button#knap13").show(tid)     
    })
}

$(document).ready(Knaptryk)