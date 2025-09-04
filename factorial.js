console.log("Factorial Application");

console.log("1. hello");
console.log("2. compute factorial");
console.log("3. exit");

rl.question(" Inter your choice (1-3)", choice =>{
    if(choice === "1"){
        console.log("Hello there!");
    }else if( choice === "2"){
        console.log("Factorial");
    }else if(choice === "3");{
        console.log("exit");
    }else{
        console.log("Invalid choice, please try again");
    }

})