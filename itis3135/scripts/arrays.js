let people = ["Parker Cook", "Taylor Swift", "Bob Ross", "Joe Biden", "Dylan Roncone", "Thomas Zalevskiy", "Ed Sheeran"];
let salaries = [0, 0, 0, 0, 0, 0, 0];

function clearResults() {
    const resultsElement = document.getElementById("results");

    if (document.getElementById("resultsHeader")) {
        resultsElement.removeChild(resultsHeader);
    }
    if (document.getElementById("resultsTotalSalary")) {
        resultsElement.removeChild(resultsTotalSalary);
    }
    if (document.getElementById("resultsAverageSalary")) {
        resultsElement.removeChild(resultsAverageSalary);
    }
    if (document.getElementById("results_table")) {
        resultsElement.removeChild(results_table);
    }
    if (document.getElementById("resultsNameDropdownLabel")) {
        resultsElement.removeChild(resultsNameDropdownLabel);
    }
    if (document.getElementById("resultsNameDropdown")) {
        resultsElement.removeChild(resultsNameDropdown);
    }
    if (document.getElementById("resultsSalaryEntryWrapper")) {
        resultsElement.removeChild(resultsSalaryEntryWrapper);
    }
    if (document.getElementById("resultsSalaryUpdateButton")) {
        resultsElement.removeChild(resultsSalaryUpdateButton);
    }
}

function updateNewSalary() {
    let dropdown = document.getElementById("resultsNameDropdown");
    let salary = document.getElementById("resultsSalaryEntryText");
    let selectedOption = dropdown.value;
    let enteredSalary = salary.value;
    for (let i = 0; i < people.length; i++) {
        if (selectedOption == people[i]) {
            if (!isNaN(enteredSalary) && enteredSalary > 0) {
                salaries[i] = parseFloat(parseFloat(enteredSalary).toFixed(2));
            } else {
                alert("Enter a valid number.");
            }
        }
    }
    document.getElementById("resultsNameDropdown").focus();
}

function addSalary() {
    clearResults();

    const resultsElement = document.getElementById("results");

    // Add header for resutls
    let resultsHeader = document.createElement("h3");
    resultsHeader.innerHTML = "Add a Salary";
    resultsHeader.setAttribute("id", "resultsHeader");
    resultsElement.appendChild(resultsHeader);

    let resultsNameDropdownLabel = document.createElement("label");
    resultsNameDropdownLabel.innerHTML = "Name: ";
    resultsNameDropdownLabel.setAttribute("for", "resultsNameDropdown");
    resultsNameDropdownLabel.setAttribute("id", "resultsNameDropdownLabel");
    resultsElement.appendChild(resultsNameDropdownLabel);

    // Create name selection dropdown
    let resultsNameDropdown = document.createElement("select");
    resultsNameDropdown.setAttribute("id", "resultsNameDropdown");
    resultsElement.appendChild(resultsNameDropdown);
    resultsNameDropdown.focus();

    for (let i = 0; i < people.length; i++) {
        let resultsNameDropdownItem = document.createElement("option");
        resultsNameDropdownItem.innerHTML = people[i];
        resultsNameDropdown.appendChild(resultsNameDropdownItem);
    }

    let resultsSalaryEntryWrapper = document.createElement("div");
    resultsSalaryEntryWrapper.setAttribute("id", "resultsSalaryEntryWrapper");
    resultsElement.appendChild(resultsSalaryEntryWrapper);

    let resultsSalaryEntryLabel = document.createElement("label");
    resultsSalaryEntryLabel.innerHTML = "Salary: ";
    resultsSalaryEntryLabel.setAttribute("id", "resultsSalaryEntryLabel");
    resultsSalaryEntryLabel.setAttribute("for", "resultsSalaryEntry");
    resultsSalaryEntryWrapper.appendChild(resultsSalaryEntryLabel);

    let resultsSalaryEntryText = document.createElement("input");
    resultsSalaryEntryText.setAttribute("type", "text");
    resultsSalaryEntryText.setAttribute("id", "resultsSalaryEntryText");
    resultsSalaryEntryText.setAttribute("name", "resultsSalaryEntry");
    resultsSalaryEntryWrapper.appendChild(resultsSalaryEntryText);

    let resultsSalaryUpdateButton = document.createElement("button");
    resultsSalaryUpdateButton.innerHTML = "Update";
    resultsSalaryUpdateButton.setAttribute("onClick", "updateNewSalary()");
    resultsSalaryUpdateButton.setAttribute("id", "resultsSalaryUpdateButton");
    resultsElement.appendChild(resultsSalaryUpdateButton);

}

function displayResults() {
    clearResults();

    const resultsElement = document.getElementById("results");

    let totalSalary = 0;
    for (let i = 0; i < salaries.length; i++) {
        totalSalary += salaries[i];
    }
    let averageSalary = (totalSalary / salaries.length).toFixed(2);
    let highestSalary = 0;
    for (let i = 0; i < salaries.length; i++) {
        if (salaries[i] > highestSalary) {
            highestSalary = salaries[i];
        }
    }

    let resultsHeader = document.createElement("h3");
    let resultsHeaderNode = document.createTextNode("Results");
    resultsHeader.appendChild(resultsHeaderNode);
    resultsHeader.setAttribute("id", "resultsHeader");
    resultsElement.appendChild(resultsHeader);

    let resultsTotalSalary = document.createElement("p");
    let resultsTotalSalaryNode = document.createTextNode("Total Salary: $" + totalSalary);
    resultsTotalSalary.appendChild(resultsTotalSalaryNode);
    resultsTotalSalary.setAttribute("id", "resultsTotalSalary");
    resultsElement.appendChild(resultsTotalSalary);

    let resultsAverageSalary = document.createElement("p");
    let resultsAverageSalaryNode = document.createTextNode("Average Salary: $" + averageSalary);
    resultsAverageSalary.appendChild(resultsAverageSalaryNode);
    resultsAverageSalary.setAttribute("id", "resultsAverageSalary");
    resultsElement.appendChild(resultsAverageSalary);


}

function displaySalary() {
    clearResults();

    const resultsElement = document.getElementById("results");

    let resultsHeader = document.createElement("h3");
    let resultsHeaderNode = document.createTextNode("Salaries");
    resultsHeader.appendChild(resultsHeaderNode);
    resultsHeader.setAttribute("id", "resultsHeader");
    resultsElement.appendChild(resultsHeader);

    let resultsTable = document.createElement("table");
    resultsTable.setAttribute("id", "results_table");
    resultsElement.appendChild(resultsTable);

    let resultsTableHeader = document.createElement("tr");
    resultsTable.appendChild(resultsTableHeader);
    
    let resultsTableHeaderEmployee = document.createElement("th");
    resultsTableHeaderEmployee.innerHTML = "Employee";
    resultsTableHeader.appendChild(resultsTableHeaderEmployee);

    let resultsTableHeaderSalary = document.createElement("th");
    resultsTableHeaderSalary.innerHTML = "Salary";
    resultsTableHeader.appendChild(resultsTableHeaderSalary);

    for (let i = 0; i < salaries.length; i++) {
        let resultsTableContentsRow = document.createElement("tr");
        resultsTable.appendChild(resultsTableContentsRow);

        let resultsTableContentsEmployee = document.createElement("td");
        resultsTableContentsEmployee.innerHTML = people[i];
        resultsTableContentsRow.appendChild(resultsTableContentsEmployee);
        
        let resulstTableContentsSalary = document.createElement("td");
        resulstTableContentsSalary.innerHTML = "$" + salaries[i];
        resultsTableContentsRow.appendChild(resulstTableContentsSalary);
    }
}

addSalary();