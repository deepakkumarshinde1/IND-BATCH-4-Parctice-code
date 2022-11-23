var saveForm = document.querySelector("#saveForm"); // one node
// var saveForm = document.querySelectorAll("#idBtn"); //All Node List
var username = document.querySelector("#username");
var genderMale = document.querySelector("#genderMale");
var genderFemale = document.querySelector("#genderFemale");
var userList = [];
var userTableBody = document.querySelector("#userTableBody");
var userForm = document.querySelector("#userForm");
var btnRemove = null;

// to detect radio buttons check or not we use a porp called "checked"
saveForm.addEventListener("click", function (event) {
  event.preventDefault();
  // prevent a form submitting
  var _username = username.value;
  var _genderMale = genderMale.checked;
  var _genderFemale = genderFemale.checked;

  if (_username == "") {
    alert("Enter User Name");
    return false;
  }
  if (_genderMale == false && _genderFemale == false) {
    alert("Select Gender");
    return false;
  }

  var _gender = _genderMale == true ? "Male" : "Female";

  // save date in JSONarray
  var newUser = {
    username: _username,
    gender: _gender,
  };

  userList.push(newUser);
  printTable();
  userForm.reset();
});

// string template's
// for dynamic data we use => ${expression/variable}

//  what is dataset ?
// data set is a spacial data-* ,
// in javascript we can collect it by dataset() method
// data-one="" data-two=""
function printTable() {
  console.log(userList);
  var _rows = userList.map(function (value, index) {
    return `<tr>
                    <td>${index + 1}</td>
                    <td>${value.username}</td>
                    <td>${value.gender}</td>
                    <td>
                      <button class="btn-remove" data-id="${index}">
                        <span class="fa fa-trash"></span>
                      </button>
                    </td>
                </tr>`;
  });
  userTableBody.innerHTML = _rows.join("");
  removeButtonEvent();
}

function removeButtonEvent() {
  btnRemove = document.querySelectorAll(".btn-remove");
  btnRemove.forEach(function (button) {
    button.addEventListener("click", function (event) {
      var data = button.dataset; //{} //data-id=""
      userList.splice(data.id, 1); //delete record
      alert("Record Deleted Successfully");
      printTable(); // repaint it
    });
  });
}
/*
  name
  gender
  address (textarea)

  i agree

*/
