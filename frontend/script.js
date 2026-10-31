
// 1. Select HTML elements

const keyInput = document.getElementById("keyInput");
const valueInput = document.getElementById("valueInput");
const addButton = document.getElementById("addButton");
const recordsContainer = document.getElementById("recordsContainer");
const message = document.getElementById("message");

// 2. Create an array to store records

let records = [];

// 3. Add a new record

function addRecord() {

    const key = keyInput.value.trim();
    const value = valueInput.value.trim();

    if (key === "" || value === "") {
        message.textContent = "Please enter both key and value!";
        return;
    }

    const record = {
        id: Date.now(),
        key: key,
        value: value
    };

    records.push(record);

    displayRecords();

    keyInput.value = "";
    valueInput.value = "";

    message.textContent = "Record added successfully!";
}

// 4. Display records

function displayRecords() {

    recordsContainer.innerHTML = "";

    records.forEach(function(record) {

        const card = document.createElement("div");

        card.className = "record-card";

        const keyText = document.createElement("p");
        keyText.textContent = "Key: " + record.key;

        const valueText = document.createElement("p");
        valueText.textContent = "Value: " + record.value;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteRecord(record.id);
        });

        card.appendChild(keyText);
        card.appendChild(valueText);
        card.appendChild(deleteButton);

        recordsContainer.appendChild(card);

    });
}

// 5. Delete a record

function deleteRecord(id) {

    records = records.filter(function(record) {
        return record.id !== id;
    });

    displayRecords();
    message.textContent = "Record deleted!";
}

// 6. Listen for button clicks

addButton.addEventListener("click", addRecord);
