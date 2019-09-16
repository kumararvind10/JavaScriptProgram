// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Prompt user to input data in console.
console.log("Please input number");

// When user input data and click enter key.
standard_input.on('data', function (data) {
    try {
        if (!Number.isInteger(parseInt(data))) throw "please inter Valid Input";
        if (data == 1) {
            console.log("1 is not a prime Number")
            process.exit();

        } else if (data == 2) {
            console.log("2 is a prime Number")
            process.exit();
        } else {
            for (let i = 2; i < data; i++) {
                if (data % i == 0) {
                    console.log("Given Number is not a prime number" + data);
                    process.exit();

                } else {
                    console.log("Given Number is a prime Number:" + data)
                    process.exit();
                }
            }
        }

    } catch (err) {
        console.log(err);
    }




});