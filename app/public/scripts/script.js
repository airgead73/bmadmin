const form = document.getElementById('form_upload');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    await fetch('/api/works/5fcc26041debcdb8be831686/photos', {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data));

  } catch (error) {
    console.log(error);
  }

});