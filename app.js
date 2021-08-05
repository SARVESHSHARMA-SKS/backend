var arr = ["Atomic Habit","Deepwork","NowHabit"];
const readline = require("readline");
const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false,
})
function sks() {
    readline1.question("Press 1, 2, 3 ", function (option) {
        console.log("1-- ShowBooks");
        console.log("2-- Add new Books");
        console.log("3-- Quit in Books");


        console.log(`The option is ${option}`);
        if (option == 1) {
            for (i = 0; i < arr.length; i++)
                console.log(arr[i]);
            sks();
        }
        else if (option == 2) {
            readline1.question("Please  enter name of book", function (book) {
                arr.push(book);
                console.log("Book is added");
                
                sks();

            });
            
        
        }
        else if (option == 3) {
            console.log("Are you sure you want to Quit");
            readline1.question("Press y to Quit", function (y) {
                
                if (y == "y") {
                    console.log("Thank you ");
                    
                    readline1.close();

                    
                }

            });
           
        }
        else {
            console.log("You have selected an invalid entry so please press 1, 2 or 3");
            sks();
        }
       
        
    });
}
readline1.on("close", function () {
    console.log("close");
    console.log("Bye Bye !");
});
sks();

    
    

