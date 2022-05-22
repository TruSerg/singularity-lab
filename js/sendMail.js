const sendMail = () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", formSend);

  const formSend = async (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    form.classList.add("_sending");

    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      formPreview.innerHTML = "";
      form.reset();
    } else {
      alert("Ошибка");
    }
  };
};

sendMail();
