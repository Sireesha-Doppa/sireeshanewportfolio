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


function downloadResume() {
    // Create a link element
    var downloadLink = document.createElement('a');
    
    // Set the href attribute to the path of your resume file
    downloadLink.href = 'path/to/your/resume.pdf';
    
    // Set the download attribute to specify the file name
    downloadLink.download = 'YourResume.pdf';
    
    // Append the link to the body
    document.body.appendChild(downloadLink);
    
    // Trigger a click event on the link
    downloadLink.click();
    
    // Clean up
    document.body.removeChild(downloadLink);
}
