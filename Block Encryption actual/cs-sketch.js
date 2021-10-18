// cs-sketch.js; P5 key animation & input fcns.  // CF p5js.org/reference
// Time-stamp: <2021-09-28 16:54:18 Chuck Siska>

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:20, wid:40, hgt:2.5 }; // JS Global var, w canvas size info.

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
    createCanvas( width, height );  // Make a P5 canvas
    draw_grid( 25, 8, 'white', 'yellow' );
}

// Callback to get Input-box data.
function retrieve_input_1()
{
    var messageFieldInput = document.getElementById("messageinput").value;
    var message_length = messageFieldInput.length;
    if (message_length == 0) {
        console.log("Please enter a message");
        return
    }
    if (message_length > 27) {
        console.log("The message is too long");
        return
    }
    var output_message = outputMessage(messageFieldInput, message_length);
    console.log("Output MSG:" + output_message);

    var pwinput = document.getElementById("passwordinput").value; 
    let check = passwordcheck(pwinput); 

    if(!check){
        passworderror("error","Password error. Please enter valid passord following rules.");
        return;
    }

    
    //prints message in grid
    textSize(17);
    for (i in output_message)
    {
        text(output_message[i], (8+(i*25)), 20);
    }

    // for (var i = 0; i < message_length; i++) {
    //     encryption(messageFieldInput[i], pwinput);
    // }
    //encryption(messageFieldInput, pwinput);

    var encodedmessage = encryption2(messageFieldInput, pwinput, message_length);
    textSize(17);
    for(i in encodedmessage)
    {
        text(encodedmessage[i], (8+(i*25)), 45);
    }
}

//The ASCII password check
function passwordcheck(text)
{
    // data = g_input_1.value(); // Get data from Input box.
    var index = 0;
    var array_of_characters = new Array();
    let newArray = text.split(''); // splits every letter in string into an item in our array

    var upper_case = false;
    var lower_case = false;
    var symbol =     false;
    var passwordlength = true;

    // Password must have at least eight characters including an uppercase and lowercase letter, a symbol, and a digit.
    if (newArray.length != 8) {
        console.log ( "the password is not the right length"); // password is a fixed 8 characters
        passwordlength = false;
    }

    while (index != text.length) {
        //var ascii_code = data;
        var i = text.charCodeAt(index); // this is the number at the ascii reference
        //console.log( "data = " + i); // Show data in F12 Console output.
        array_of_characters[index] = i;
        //console.log( "array data - " + array_of_characters[index])
        // upper case check
        if (array_of_characters[index] >= 65 && array_of_characters[index] <= 90) {
            upper_case = true;
            console.log("is upper case");
        } else {
            // console.log("value is not uppercase")
        }
        // lower case check
        if (array_of_characters[index] >= 97 && array_of_characters[index] <= 122) {
            lower_case = true;
            console.log("is lower case");
        } else {
           //console.log("value is not lowercase")
        }
        // symbol check
        if ((array_of_characters[index] >= 33 && array_of_characters[index] <= 47) || 
            (array_of_characters[index] >= 91 && array_of_characters[index] <= 96) || 
            (array_of_characters[index] >= 123 && array_of_characters[index] <= 127) ) {
            symbol = true;
            console.log("is a symbol");
        } else {
            //console.log("value is not a symbol");
        }   
        index++;
    }

    if(upper_case == true && lower_case == true && symbol == true && passwordlength == true){
        return true;
    }

}
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

function passworderror(elem, errormessage)
{
    var error = document.getElementById(elem);
    error.textContent = errormessage;
    error.style.color = "red";
    return;
}

function outputMessage(message, length)
{
    if (message.length < 27) 
    {
        message = (message + "                          ").substring(0,27);
    }
    let block1 = message.substring(0,7) + "1";
    let block2 = message.substring(7,14) + "2";
    let block3 = message.substring(14,21) + "3";
    let block4 = message.substring(21,27) + "4";
    return (block1 + block2 + block3 + block4);
}

function encryption(message, array_of_characters)
{
    //TODO: encryption with XOR
    let ax = message.charCodeAt(0) - 32;
    let px = array_of_characters.charCodeAt(0) - 32;
    // console.log(ax);
    // console.log(px);

    let bx = ax ^ px; //what does ^ do
    let cx = bx + 32;
    // console.log(cx);
    // var value1 = input[i].charCodeAt(0);
    // var value2 = key[i].charCodeAt(0);

    // var xorValue = value1 ^ value2;
    return String.fromCharCode(cx);

}

function encryption2(message, array_of_characters, length)
{
    let encryptedString = "";
    let maxblock = 0;
    for (var i = 0; i < length; i++) {
        encryptedString = encryptedString.concat(encryption(message[i], array_of_characters)); //encrypted string calls 
    }
    console.log(encryptedString);
    return encryptedString;
}



