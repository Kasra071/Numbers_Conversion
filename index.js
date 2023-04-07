//declare the variables : 
var frombase;
var tobase;
var neededCHAR_output;
var neededCHAR_input;
var From_Input = document.getElementById('numbers_input');
var From_Input_placeholder = document.getElementById('numbers_input_placeholder')
var To_Input = document.getElementById('numbers_output');
var To_Input_placeholder = document.getElementById('numbers_output_placeholder')


//syncs the current value in the inputs:
numbers_sync()
function numbers_sync() {
    numbers_changed_input_type(), numbers_changed_output_type();
}

//this function checks for the value in the inputs using regax
function Needed_Check(Base)
{
    
    switch (Base) {
        case 2:
            return /[0-1]/g;
             
        case 3:
            return /[0-2]/g;
             
        case 4:
            return /[0-3]/g;
             
        case 5:
            return /[0-4]/g;
             
        case 6:
            return /[0-5]/g;
             
        case 7:
            return /[0-6]/g;
             
        case 8:
            return /[0-7]/g;
             
        case 9:
            return /[0-8]/g;
             
        case 10:
            return /[0-9]/g;
             
        case 11:
            return /[0-9aA]/g;
             
        case 12:
            return /[0-9a-bA-B]/g;
             
        case 13:
            return /[0-9a-cA-C]/g;
             
        case 14:
            return /[0-9a-dA-D]/g;
             
        case 15:
            return /[0-9a-eA-E]/g;
             
        case 16:
            return /[0-9a-fA-F]/g;
             
        case 17:
            return /[0-9a-gA-G]/g;
             
        case 18:
            return /[0-9a-hA-H]/g;
             
        case 19:
            return /[0-9a-iA-I]/g;
             
        case 20:
            return /[0-9a-jA-J]/g;
             
        case 21:
            return /[0-9a-kA-K]/g;
             
        case 22:
            return /[0-9a-lA-L]/g;
             
        case 23:
            return /[0-9a-mA-M]/g;
             
        case 24:
            return /[0-9a-nA-N]/g;
             
        case 25:
            return /[0-9a-oA-O]/g;
             
        case 26:
            return /[0-9a-pA-P]/g;
             
        case 27:
            return /[0-9a-qA-Q]/g;
             
        case 28:
            return /[0-9a-rA-R]/g;
             
        case 29:
            return /[0-9a-sA-S]/g;
             
        case 30:
            return /[0-9a-tA-T]/g;
             
        case 31:
            return /[0-9a-uA-U]/g;
             
        case 32:
            return /[0-9a-vA-V]/g;
             
        case 33:
            return /[0-9a-wA-W]/g;
             
        case 34:
            return /[0-9a-xA-X]/g;
             
        case 35:
            return /[0-9a-yA-Y]/g;
             
        case 36:
            return /[0-9a-zA-Z]/g;
             
        }
}

//converts number from a base to another
//this is the most important function, other stuff is just here to make the user experience better
function Base_Convert(number , currentBase , ToBase)
{
    //first, converts the number to base 10 using parseInt
    var num = parseInt(parseInt(number,currentBase));
    //then converting it to the current base using to string
    num = num.toString(ToBase);
    //returning the result
    return num;
}

//these 2 functions used to sync the values in the inputs when the page loads :
function numbers_changed_input_type()
{
    //gets the first base value and shows it
    frombase = document.getElementById('convert_from').value;
    From_Input_placeholder.textContent = `Base ${frombase}`

    frombase = parseInt(frombase)

    neededCHAR_input = Needed_Check(frombase)


    numbers_input_sync()
}

function numbers_changed_output_type()
{
    //gets the second base value and shows it
    tobase = document.getElementById('convert_to').value;
    To_Input_placeholder.textContent = `Base ${tobase}`

    tobase = parseInt(tobase)

    neededCHAR_output = Needed_Check(tobase)

    numbers_input_sync()
}

function numbers_input_sync() {

    var From_Value =  From_Input.value;

    var check = From_Value.replace(neededCHAR_input , "")

    if(check != "")
    {
        To_Input.value = "not valid enteries"
    }else{



        var num = Base_Convert(From_Input.value , frombase , tobase)

        if(From_Input.value == "")
        {
            To_Input.value = "";
        }else{
            To_Input.value = num;
        }

    }


}


function numbers_output_sync() {

    var To_Value =  To_Input.value;

    var check = To_Value.replace(neededCHAR_output , "")

    if(check != "")
    {
        From_Input.value = "not valid enteries"
    }else{

        var num = Base_Convert(To_Input.value , tobase , frombase)

        if(To_Input.value == "")
        {
            From_Input.value = "";
        }else{
            From_Input.value = num;
        }

    }

}