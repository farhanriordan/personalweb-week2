function submitData() {
    let name = document.getElementById('username').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('channel').value
    let message = document.getElementById('message').value
  
    let skillHtml = document.getElementById("reply-phone").checked;
    let skillCss = document.getElementById("reply-email").checked;
    let skillCss = document.getElementById("reply-none").checked;
  
    // kondisi untuk mengecek apakah checkbox di ceklis, kalau di ceklis maka tampilkan/ambil valuenya
    if (skillHtml) {
      skillHtml = document.getElementById("html").value;
  
      // jika tidak di ceklis maka tampilkan string kosong
    } else {
      skillHtml = "";
    }
  
    if (skillCss) {
      skillCss = document.getElementById("css").value;
    } else {
      skillCss = "";
    }
  
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    console.log(skillHtml);
    console.log(skillCss);
  
    // condition
  
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
  
    let emailReceiver = "samsul@mail.com";
  
    let a = document.createElement("a");
  
    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo my name ${name} ${message} contact me ${phone} send CV ${email} requirment skill ${skillHtml} ${skillCss}`;
    a.click();
  
    // <a href="mailto:samsul@mail.com?subject=Test Subject&body=Hallo B30">Send Mail</a>
  
    // if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
    //     alert("Semuanya wajib diisi")
    // }
  
    let dataObject = {
      name: name,
      email: email,
      phoneNumber: phone,
      subject: subject,
      message: message,
      skillHtml: skillHtml,
      skillCss: skillCss,
    };
  
    console.log(dataObject);
  }
  