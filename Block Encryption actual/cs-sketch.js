// cs-sketch.js; P5 key animation & input fcns.  // CF p5js.org/reference
// Time-stamp: <2021-09-28 16:54:18 Chuck Siska>

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:64, hgt:48 }; // JS Global var, w canvas size info.

var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.
var g_input; // My input box.
var g_button; // Button for my input box.


function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    // draw_grid( 10, 50, 'white', 'yellow' );

    // Setup input-box for input and a callback fcn when button is pressed.
    g_input_1 = createInput( ); // Create an input box, editable.
    g_input_1.position( 20, 30 ); // Put box on page.
    g_button_1 = createButton( "Submit" ); // Create button to help get input data.
    g_button_1.position( 160, 30 ); // Put button on page.
    g_button_1.mousePressed( retrieve_input_1 ); // Hook button press to callback fcn.

        // Setup input-box for input and a callback fcn when button is pressed.
        g_input_2 = createInput( ); // Create an input box, editable.
        g_input_2.position( 40, 60 ); // Put box on page.
        g_button_2 = createButton( "Message" ); // Create button to help get input data.
        g_button_2.position( 190, 60 ); // Put button on page.
        g_button_2.mousePressed( retrieve_input_1 ); // Hook button press to callback fcn.
}

// Callback to get Input-box data.
function retrieve_input_1()
{
    data = g_input_1.value(); // Get data from Input box.
    var index = 0;
    var array_of_characters = new Array();
    let newArray = data.split(''); // splits every letter in string into an item in our array
    var upper_case = false;
    var lower_case = false;
    var symbol =     false;
    while (index != data.length) {
        //var ascii_code = data;
        var i = data.charCodeAt(index); // this is the number at the ascii reference
        console.log( "data = " + i); // Show data in F12 Console output.
        array_of_characters[index] = i;
        console.log( "array data - " + array_of_characters[index])
        // upper case check
        if (array_of_characters[index] >= 65 && array_of_characters[index] <= 90) {
            upper_case = true;
            console.log("is upper case");
        } else {
            console.log("value is not uppercase")
        }
        // lower case check
        if (array_of_characters[index] >= 97 && array_of_characters[index] <= 122) {
            lower_case = true;
            console.log("is lower case");
        } else {
            console.log("value is not lowercase")
        }
        // symbol check
        if ((array_of_characters[index] >= 33 && array_of_characters[index] <= 47) || 
            (array_of_characters[index] >= 91 && array_of_characters[index] <= 96) || 
            (array_of_characters[index] >= 123 && array_of_characters[index] <= 127) ) {
            symbol = true;
            console.log("is a symbol");
        } else {
            console.log("value is not a symbol");
        }
        
        index++;
    }
    // Password must have at least eight characters including an uppercase and lowercase letter, a symbol, and a digit. It may not contain a
    // dictionary word (comprehensive8).
    if (array_of_characters.length != 8) {
        console.log ( "the password is not the right length"); // password is a fixed 8 characters
    }

    function retrieve_input_2()
    {
        data2 = g_input_2.value(); // Get data from Input box.
        console.log(data2);
        var array_of_characters2 = new Array();
        let newArray2 = data.split(''); // splits every letter in string into an item in our array
    }
}
//"ABC".charCodeAt(0) // returns 65
// String.fromCharCode(65,66,67); // returns 'ABC'
// {
//     "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
//     "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
//     "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
//     "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
//     "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
//     "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
//     "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
//     "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
//     "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
//     "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
//     "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
//     "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
//     "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
//     "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
//     "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
//     "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
//     "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
//     "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
//     "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
//     "126": "~",    "127": ""
//     }

// // Past this point is the black grid
// // Globals to keep track of Bot
// var g_bot = { dir:3, x:20, y:20, color:100 }; // Dir is 0..7 clock, w 0 up.
// var g_box = { t:1, hgt:47, l:1, wid:63 }; // Box in which bot can move.

// // Move the Bot at random, to a neighboring cell, changing Bot's painting color.
// function move_bot( )
// {
//     let dir = (round (8 * random( ))) // Change direction at random; brownian motion.
//     let dx = 0;
//     let dy = 0;
//     switch (dir)  // Convert dir to x,y deltas: dir = clock w 0=Up,2=Rt,4=Dn,6=Left.
//     {
//       case 0 : {         dy = -1; break; }
//       case 1 : { dx = 1; dy = -1; break; }
//       case 2 : { dx = 1; break; }
//       case 3 : { dx = 1; dy = 1; break; }
//       case 4 : {         dy = 1; break; }
//       case 5 : { dx = -1; dy = 1; break; }
//       case 6 : { dx = -1; break; }
//       case 7 : { dx = -1; dy = -1; break; }
//       }
//     let x = (dx + g_bot.x + g_box.wid) % g_box.wid; // Move-x.  Ensure positive b4 mod.
//     let y = (dy + g_bot.y + g_box.hgt) % g_box.hgt; // Ditto y.
//     // Now change color of the Bot's new cell.
//     let color =  100 + (1 + g_bot.color) % 156; // Incr color in nice range.
//     g_bot.x = x; // Update bot x.
//     g_bot.y = y;
//     g_bot.dir = dir;
//     g_bot.color = color;
//     //console.log( "bot x,y,dir,clr = " + x + "," + y + "," + dir + "," +  color );
// }

// Convert Bot pos to grid pos & draw Bot's color "presence".
// function draw_bot( ) 
// {
//     let sz = g_canvas.cell_size;
//     let sz2 = sz / 2;
//     let x = 1+ g_bot.x*sz; // Set x one pixel inside the sz-by-sz cell.
//     let y = 1+ g_bot.y*sz;
//     let big = sz -2; // Stay inside cell walls.
//     // Fill 'color': its a keystring, or a hexstring like "#5F", etc.  See P5 docs.
//     fill( "#" + g_bot.color ); // Concat string, auto-convert the number to string.
//     //console.log( "x,y,big = " + x + "," + y + "," + big );
//     let acolors = get( x + sz2, y + sz2 ); // Get cell interior pixel color [RGBA] array.
//     let pix = acolors[ 0 ] + acolors[ 1 ] + acolors[ 2 ];
//     //console.log( "acolors,pix = " + acolors + ", " + pix );

//     // (*) Here is how to detect what's at the pixel location.  See P5 docs for fancier...
//     if (0 != pix) { fill( 0 ); stroke( 0 ); } // Turn off color of prior bot-visited cell.
//     else { stroke( 'white' ); } // Else Bot visiting this cell, so color it.

//     // Paint the cell.
//     rect( x, y, big, big );
// }

// // Update our display -- Move and draw Bot.
// function draw_update()  
// {
//     //console.log( "g_frame_cnt = " + g_frame_cnt );
//     move_bot( );
//     draw_bot( );
// }

// // P5 Frame Re-draw Fcn, Called for Every Frame.
// function draw()  
// {
//     ++g_frame_cnt; // Track frame count.
//     if (0 == g_frame_cnt % g_frame_mod)  // Every so often, do stuff.
//     {
//         if (!g_stop) draw_update(); // If Bot not "stopped", update Bot.
//     }
// }

// // If Key is Pressed, toggle Bot's global stop var.
// function keyPressed( )
// {
//     g_stop = ! g_stop;
// }

// // If Mouse is Pressed, relocate Bot to Mouse on a cell, wrapped onto grid if needed.
// //   and gratuitously draw the bot at new loc.
// function mousePressed( )
// {
//     let x = mouseX; // Get mouse's current loc (from its global).
//     let y = mouseY;
//     //console.log( "mouse x,y = " + x + "," + y );
//     // Get grid cell corresponding to mouse XY, storing cell XY into Bot.
//     let sz = g_canvas.cell_size;
//     let gridx = round( (x-0.5) / sz );
//     let gridy = round( (y-0.5) / sz );
//     //console.log( "grid x,y = " + gridx + "," + gridy );
//     //console.log( "box wid,hgt = " + g_box.wid + "," + g_box.hgt );
//     g_bot.x = gridx + g_box.wid; // Ensure its positive.
//     //console.log( "bot x = " + g_bot.x );
//     g_bot.x %= g_box.wid; // Wrap to fit box.
//     g_bot.y = gridy + g_box.hgt;
//     //console.log( "bot y = " + g_bot.y );
//     g_bot.y %= g_box.hgt;
//     //console.log( "bot x,y = " + g_bot.x + "," + g_bot.y );
//     draw_bot( );
// }
