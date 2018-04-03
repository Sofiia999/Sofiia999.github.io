// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='signupform']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }, 
      pswrepeat: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      password: {
        required: "Будь ласка введіть пароль",
        minlength: "Пароль повинен складати не менше 5 символів"
      },
      pswrepeat: {
        required: "Будь ласка введіть пароль",
        minlength: "Пароль повинен складати не менше 5 символів"
      },
      email:{
        required: "Будь ласка введіть email",
        email: "email is not valid"
      } 
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});