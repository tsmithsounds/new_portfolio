
function modal() {
  var modal = document.getElementById('form-messages');
  var close = document.getElementById('close');
  var form = document.getElementById('my_form');
  modal.style.display = "block";
  close.onclick = function() {
    modal.style.display = "none";
    form.reset();
  };
}
  
function submitForm() {
        document.getElementById('send').disabled = true;
        var formdata = new FormData();
        formdata.append("n", document.getElementById("name").value);
        formdata.append("e", document.getElementById("email").value);
        formdata.append("m", document.getElementById("message").value);
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "message.php");
        ajax.onreadystatechange = function() {
          if(ajax.readyState == 4 && ajax.status == 200) {
            if(ajax.responseText == "success") {
              modal();
            } else {
              document.getElementById('form-messages').innerHTML = ajax.responseText;
              document.getElementById('send').disabled = false;
            }
          }
        };
        ajax.send(formdata);
      }