//College Capybaras Block Encryption Program
//Nicholas Ayson  nick.ayson@csu.fullerton.edu
//Darrick Rusk    drusk1@csu.fullerton.edu
//AJ Albrecht     ajalbrecht@csu.fullerton.edu
//PoTyng Wu       gaidepeter@csu.fullerton.edu

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:20, wid:40, hgt:3.7 }; // JS Global var, w canvas size info.

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
    //gets input from message box
    var messageFieldInput = document.getElementById("messageinput").value;
    var message_length = messageFieldInput.length;
    //base values
    if (message_length == 0) {
        console.log("Please enter a message");
        return;
    }
    if (message_length > 27) {
        console.log("The message is too long");
        return;
    }
    //output the message variable 
    var output_message = outputMessage(messageFieldInput, message_length);
    console.log("Output MSG:" + output_message);

    var pwinput = document.getElementById("passwordinput").value; 
    let check = passwordcheck(pwinput); 

    if(!check){
        passworderror("error","Password error. Please enter valid password following rules.");
        setTimeout(() => { location.reload() }, 5000); // after 10 seconds the page will reload
        return;
    }

    
    //prints message in grid
    textSize(17);
    for (i in output_message)
    {
        text(output_message[i], (8+(i*25)), 20);
    }

    // display encoded message
    var encodedmessage = encryption2(output_message, pwinput, message_length);
    textSize(17);
    for(i in encodedmessage)
    {
        text(encodedmessage[i], (8+(i*25)), 45);
    }

    // display decoded message
    var decodedmessage = decode2(encodedmessage, pwinput, message_length);
    textSize(17);
    for(i in decodedmessage)
    {
        text(decodedmessage[i], (8+(i*25)), 70)
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
    //iterate through string as a new array
    while (index != text.length) {
        //var ascii_code = data;
        var i = text.charCodeAt(index); // this is the number at the ascii reference
        array_of_characters[index] = i;
        // upper case check
        if (array_of_characters[index] >= 65 && array_of_characters[index] <= 90) {
            upper_case = true;
            // console.log("is upper case");
        }
        // lower case check
        if (array_of_characters[index] >= 97 && array_of_characters[index] <= 122) {
            lower_case = true;
            // console.log("is lower case");
        }
        // symbol check
        if ((array_of_characters[index] >= 33 && array_of_characters[index] <= 47) || 
            (array_of_characters[index] >= 91 && array_of_characters[index] <= 96) || 
            (array_of_characters[index] >= 58 && array_of_characters[index] <= 64) ||
            (array_of_characters[index] >= 123 && array_of_characters[index] <= 127) ) {
            symbol = true;
            // console.log("is a symbol");
        }  
        index++;
    }

    if(upper_case == true && lower_case == true && symbol == true && passwordlength == true){
        return true;
    }
}

// helper function to display password error
function passworderror(elem, errormessage)
{
    var error = document.getElementById(elem);
    error.textContent = errormessage;
    error.style.color = "red";
    return;
}

//output string inputed by user
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

    let asciichar = String.fromCharCode(length + 32);
    console.log(asciichar);
    return (block1 + block2 + block3 + block4 + asciichar);
}

//encrypt first char
function encryption(message, array_of_characters)
{
    let ax = message.charCodeAt(0) - 32;
    let px = array_of_characters.charCodeAt(0) - 32;
    //console.log(ax);
    //console.log(px);

    let bx = ax ^ px; //what does ^ do says this is logical xor
    let cx = bx + 32;
    console.log(cx);
    console.log(String.fromCharCode(cx));

    return String.fromCharCode(cx);

}

//keep encrypting each char in array
function encryption2(message, array_of_characters, length)
{
    let encryptedString = "";
    for (var i = 0; i < 32; i++) {
        encryptedString = encryptedString.concat(encryption(message[i], array_of_characters[(i % 8)])); //encrypted string calls 
    }
    console.log(encryptedString);
    return encryptedString; //return string that was encrypted
}

function decode(omessage, array_of_characters) //decryption of a single character
{
        let ax = omessage.charCodeAt(0) - 32;
        let px = array_of_characters.charCodeAt(0) - 32;
        //console.log(ax);
        //console.log(px);
    
        let bx = ax ^ px; //what does ^ do says this is logical xor
        let cx = bx + 32;
        console.log(cx);
        console.log(String.fromCharCode(cx));
        
        return String.fromCharCode(cx);
}

function decode2(message, array_of_characters, length)  //decrypt each character
{
    let decodedString = "";
    for (var i = 0; i < 32; i++) {
        decodedString = decodedString.concat(decode(message[i], array_of_characters[(i % 8)])); //encrypted string calls 
    }
    console.log(decodedString);
    return decodedString; //return string that was decrypted
}

