function previewImage(inputId, previewId) {
  const input = document.getElementById(inputId);
  const previewBox = document.getElementById(previewId);

  input.addEventListener("change", () => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewBox.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;" />`;
      };
      reader.readAsDataURL(file);
    }
  });
}

previewImage("photo1", "preview1");
previewImage("photo2", "preview2");
previewImage("photo3", "preview3");
