function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  let web = document.getElementById("web").checked;
  let mouth = document.getElementById("mouth").checked;

  if (web) {
    web = document.getElementById("web").value;
  } else {
    web = "";
  }

  if (mouth) {
    mouth = document.getElementById("mouth").value;
  } else {
    mouth = "";
  }

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);
  console.log(web);
  console.log(mouth);

  if (name == "") {
    return alert("Nama wajib diisi");
  } else if (email == "") {
    return alert("Email wajib diisi");
  } else if (phone == "") {
    return alert("Phone Wajib diisi");
  } else if (subject == "") {
    return alert("Subject Wajib diisi");
  } else if (message == "") {
    return alert("Message Wajib diisi");
  }

  let emailReceiver = "farhanriordan@mail.com";

  let a = document.createElement("a");

  a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hello my name ${name} ${message} contact me ${phone} send CV ${email} found us on ${web} ${mouth}`;
  a.click();

  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    subject: subject,
    message: message,
    web: web,
    mouth: mouth,
  };

  console.log(dataObject);
}
