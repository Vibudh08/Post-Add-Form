document

  .getElementById("imageUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const image = document.getElementById("previewImage");
        image.src = e.target.result;
        image.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  })


document
  .getElementById("pop")
  .addEventListener("click", function () {
    alert("Form submitted");
  });
