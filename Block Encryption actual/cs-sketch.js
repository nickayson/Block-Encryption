// cs-sketch.js; P5 key animation & input fcns.  // CF p5js.org/reference
// Time-stamp: <2021-09-28 16:54:18 Chuck Siska>

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:20, wid:40, hgt:20 }; // JS Global var, w canvas size info.

var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
// var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.
var g_input; // My input box.
var g_button; // Button for my input box.


function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 25, 8, 'white', 'yellow' );

    // Setup input-box for input and a callback fcn when button is pressed.
    g_input_1 = createInput( ); // Create an input box, editable.
    g_input_1.position( 20, 30 ); // Put box on page.
    g_button_1 = createButton( "Submit" ); // Create button to help get input data.
    g_button_1.position( 160, 30 ); // Put button on page.
    g_button_1.mousePressed( retrieve_input_1 ); // Hook button press to callback fcn.

        // Setup input-box for input and a callback fcn when button is pressed.
        // g_input_2 = createInput( ); // Create an input box, editable.
        // g_input_2.position( 40, 60 ); // Put box on page.
}

// Callback to get Input-box data.
function retrieve_input_1()
{
    var messageFieldInput = document.getElementById("messageInput").value;
    var message_length = messageFieldInput.length;

    data = g_input_1.value(); // Get data from Input box.
    var index = 0;
    var array_of_characters = new Array();
    let newArray = data.split(''); // splits every letter in string into an item in our array

    
    // data2 = g_input_2.value(); // Get data from Input box.
    // console.log(data2);
    // var array_of_characters2 = new Array();
    // let newArray2 = data2.split(''); // splits every letter in string into an item in our array
    // console.log(array_of_characters2);


    /////////////////////////////////////////this is for verifying the password ////////////////////////////////////////////////////////
    var upper_case = false;
    var lower_case = false;
    var symbol =     false;
    while (index != data.length) {
        //var ascii_code = data;
        var i = data.charCodeAt(index); // this is the number at the ascii reference
        //console.log( "data = " + i); // Show data in F12 Console output.
        array_of_characters[index] = i;
        //console.log( "array data - " + array_of_characters[index])
        // upper case check
        if (array_of_characters[index] >= 65 && array_of_characters[index] <= 90) {
            upper_case = true;
            //console.log("is upper case");
        } else {
            //console.log("value is not uppercase")
        }
        // lower case check
        if (array_of_characters[index] >= 97 && array_of_characters[index] <= 122) {
            lower_case = true;
            //console.log("is lower case");
        } else {
           //console.log("value is not lowercase")
        }
        // symbol check
        if ((array_of_characters[index] >= 33 && array_of_characters[index] <= 47) || 
            (array_of_characters[index] >= 91 && array_of_characters[index] <= 96) || 
            (array_of_characters[index] >= 123 && array_of_characters[index] <= 127) ) {
            symbol = true;
            //console.log("is a symbol");
        } else {
            //console.log("value is not a symbol");
        }
        
     ///////////////////////////////////////////////////////////////////////////////////////////////
        
        index++;
    }
    // Password must have at least eight characters including an uppercase and lowercase letter, a symbol, and a digit. It may not contain a
    // dictionary word (comprehensive8).
    if (array_of_characters.length != 8) {
        console.log ( "the password is not the right length"); // password is a fixed 8 characters
    }
    var output_message = outputMessage(messageFieldInput, message_length);
    if (message_length == 0) {
        console.log("Please enter a message");
        return
    }
    if (message_length > 27) {
        console.log("The message is too long");
        return
    }

    stroke(0);
    fill(255, 0, 0);
    textSize(17);
    for (i in outputMessage)
    {
        text(outputMessage[i], (8+(i*25)), 20);
    }
}

function outputMessage(message)
{
    console.log(message);
    let block1 = message.substring(0,7) + "1";
    let block2 = message.substring(7,14) + "2";
    let block3 = message.substring(14,21) + "3";
    let block4 = message.substring(21,27) + "4";
    let complete_message = block1 + block2 + block3 + block4;
    console.log(complete_message);
    return complete_message;
}

// draw_grid(20, 20, 'white', 'yellow');
// textSize(15);
// DisplayName();
// function DisplayName(){
//     var insertion = "Insertion";
//     var selection = "Selection";
//     var merge     = "Merge";
//     var pore      = "Pore";
//     var quick     = "Quick";
  
//     // Displaying Insertion string
//     for(var i = 0; i < insertion.length; ++i){
//       text(insertion[i], x_insert, y_insert);
//       text(selection[i], x_selection, y_selection);
//       text(merge[i], x_merge, y_merge);
//       text(pore[i], x_pore, y_pore);
//       text(quick[i], x_quick, y_quick);
//       x_insert  = x_insert + 20;
//       x_selection = x_selection + 20;
//       x_merge   = x_merge + 20;
//       x_pore    = x_pore + 20;
//       x_quick   = x_quick + 20;
//     }
//   }

//"ABC".charCodeAt(0) // returns 65
// String.fromCharCode(65,66,67); // returns 'ABC'
// {
//     "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
//     "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
//     "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
//     "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
//     "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    ]
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


