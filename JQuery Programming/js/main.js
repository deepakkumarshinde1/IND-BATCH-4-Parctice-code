// events

// onload event
// bind jquery call logic under one instance scope

// $(function/selector)
/*
    element => h1
    class => .h1
    id => #h1
    universal => *
    group => h1,.h1,#h1
    child => parent > child
    decedent => parent child
    attribute => input[type=text]
*/
// $(function/selector).action()
// $.action()

// onload
$(function () {
  var userList = localStorage.getItem("userList"); // if we dont have any data in localStorage data we get null
  userList = userList === null ? [] : JSON.parse(userList);
  printData();

  // event
  var gender = null;
  $("#saveDetails").on("click", function (event) {
    event.preventDefault();
    var userName = $("#username").val();

    if (userName == "") {
      alert("Enter UserName");
      return false;
    }

    if (gender == null) {
      alert("Select Gender");
      return false;
    }

    var newUser = {
      name: userName,
      gender: gender,
    };
    userList.push(newUser);
    printData();
    $("#userForm").trigger("reset");
  });

  $(".gender").on("click", function (event) {
    // current input instance ==> "this"
    gender = $(this).val();
  });

  $(document).on("click", ".btn-remove", function (event) {
    var index = $(this).data("id");

    var shouldDelete = confirm("Are you sure to delete ?"); // ok => true

    if (shouldDelete == true) {
      userList.splice(index, 1);
      alert("Deleted Successfully");
      printData();
    }
  });

  function printData() {
    localStorage.setItem("userList", JSON.stringify(userList));
    var trList = userList
      .map(function (user, index) {
        return `<tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.gender}</td>
          <td>
            <button class="btn-remove" data-id="${index}">
              <span class="fa fa-trash"></span>
            </button>
          </td>
        </tr>`;
      })
      .join("");
    $("#userTableBody").html(trList);
  }
});
