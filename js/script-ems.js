// CREATE AN ARRAY OF EMPLOYEES
let employees = [[0, "Zak", 1234, "zak@exampleemail.com", "Administrative"],
                 [1, "Jessica", 2345, "jessica@exampleemail.com", "Marketing"],
                 [2, "Mark", 3456, "mark@exampleemail.com", "Executive"],
                 [3, "Fred", 4567, "fred@exampleemail.com", "Sales"],
                 [4, "Sally", 5678, "sally@exampleemail.com", "QA"]
                ];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("employees")) {
    employees = JSON.parse(localStorage.getItem("employees"));
}

// GET DOM ELEMENTS
// DEFINE GET ELEMENT HELPER
let _ = function(id) {
    return document.getElementById(id);
}

let empTable = _("empTable");
let empCount = _("empCount");
let empForm = _("addForm");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let fm_add_id = _("id").value;
    let fm_add_name = _("name").value;
    let fm_add_extension = _("extension").value;
    let fm_add_email = _("email").value;
    let fm_add_department = _("department").value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newArray = [fm_add_id, fm_add_name, fm_add_extension, fm_add_email, fm_add_department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newArray);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    empForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    _("id").focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // VERIFY WE ARE CLICKING A BUTTON IN THE TABLE
    if (e.target.classList.contains('btn')) {
        // CONFIRM THE DELETE
        if ((window.confirm(`Please confirm you would like to delete the following employee:
        **** id: ${e.target.parentNode.parentNode.children[0].firstChild.data}
        **** name: ${e.target.parentNode.parentNode.children[1].firstChild.data}
        **** ext: ${e.target.parentNode.parentNode.children[2].firstChild.data}
        **** email: ${e.target.parentNode.parentNode.children[3].firstChild.data}
        **** dept: ${e.target.parentNode.parentNode.children[4].firstChild.data}`))) {
            
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let index = e.target.parentNode.parentNode.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(index - 1, 1);

            // BUILD THE GRID
            buildGrid();

        }
    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.querySelector("tbody").remove();

    // REBUILD THE TBODY FROM SCRATCH
    let newTbody = document.createElement("tbody");

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    let newInnerHtml = "";
    for (let employee of employees) {
        newInnerHtml += `<tr>`;
        for (let info of employee) {
            newInnerHtml += `<td>${info}</td>`;
        }
        newInnerHtml += `<td><button class="btn btn-danger btn-sm float-end">X</button></td>`
        newInnerHtml += `</tr>`;
    }
    newTbody.innerHTML = newInnerHtml;

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody);

    // UPDATE EMPLOYEE COUNT
    empCount.value = employees.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(employees));

};