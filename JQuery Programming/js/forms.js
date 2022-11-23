$(function () {
  $("#user-registration-from").validate({
    rules: {
      /*username: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 4,
      },
      confirm_password: {
        required: true,
        equalTo: "#password",
      },*/
      gender: {
        required: true,
      },
    },
    messages: {
      /* username: {
        required: "Username is required",
        minlength: "At list two character",
      },
      confirm_password: {
        equalTo: "Password dose not match",
      },*/
    },
    errorPlacement: function (error, element) {
      var _name = $(element).prop("name");
      if (_name == "gender") {
        error.appendTo($(".input-gender-group"));
      } else {
        error.insertAfter($(element));
      }
    },
  }); //config validation

  $("#saveUser").on("click", function (event) {
    event.preventDefault();
    $("#user-registration-from").valid(); // check validation
  });
});
