(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    const subject = document.getElementById('subject-select')

    const errormsg = document.getElementById("msg-error");
    const successmsg = document.getElementById("msg-success");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated');
        event.preventDefault();
        successmsg.style.display = "block";
      }, false)
    })
  })()