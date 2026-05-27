let transactions = [];

function addTransaction(){

    const text = document.getElementById("text").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;

    if(text === "" || amount === ""){
        alert("Please enter all fields");
        return;
    }

    const transaction = {
        id: Date.now(),
        text: text,
        amount: Number(amount),
        type: type
    };

    transactions.push(transaction);

    updateUI();

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}

function updateUI(){

    const transactionList = document.getElementById("transaction-list");

    transactionList.innerHTML = "";

    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {

        const li = document.createElement("li");

        li.classList.add(
            transaction.type === "income" ? "plus" : "minus"
        );

        li.innerHTML = `
            ${transaction.text}
            <span>
                ${transaction.type === "income" ? "+" : "-"}₹${transaction.amount}
            </span>
        `;

        transactionList.appendChild(li);

        if(transaction.type === "income"){
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

    });

    const balance = income - expense;

    document.getElementById("income").innerText = `₹${income}`;
    document.getElementById("expense").innerText = `₹${expense}`;
    document.getElementById("balance").innerText = `₹${balance}`;
}