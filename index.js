import inquirer from "inquirer";
let myBalance = 10000; //$
let myPin = 1790;
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter your PIN",
        name: "pin",
        type: "number",
    },
]);
if (pinAnswer.pin == myPin) {
    console.log("Correct PIN Code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What do you want to do?",
            type: "list",
            choices: ["Withdraw", "Check balance", "Fast cash"],
        },
    ]);
    if (operationAns.operation == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.Amount <= myBalance) {
            myBalance -= amountAns.Amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.operation == "Check balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
    else if (operationAns.operation == "Fast cash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "Answer",
                type: "list",
                message: "Choose amount:",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        myBalance -= fastCashAmount.Answer;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code");
}
