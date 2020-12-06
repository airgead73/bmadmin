const form = document.getElementById('form_upload');
const message = document.getElementById('message');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    await fetch('./api/works/5fcc25c81debcdb8be831685/photos', {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data));

  } catch (error) {
    message.innerText(`${error.message}`);
  }

});