(document).ready(function($){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        },400, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        myForm.reset();
    });
});

  function checkForm() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text' && inputs[i].value === '') {
            alert('Please fill out all fields');
            return false;
        }
    }
    return true;
}
function validateForm() {
  var name = document.getElementById("name").value;
  var phoneNumber = document.getElementById("phone").value;
  var nameRegex = /^[A-Za-z]+$/;

  var phoneRegex = /^[0-9]+$/;

  if (!name.match(nameRegex)) {
      alert("Please enter only alphabets in the Name field.");
      return false;
  }

  if (!phoneNumber.match(phoneRegex)) {
      alert("Please enter only numbers in the Phone Number field.");
      return false;
  }

  function reloadFormPage() {
    setTimeout(function() {
        location.reload();
    }, 2000); 
}
}
