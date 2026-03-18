(() => {

    const input = document.getElementById("imageUpload");
    const preview = document.getElementById("preview");
    const placeholder = document.getElementById("placeholder");

    input.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader(); 

            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.classList.remove("hidden");
                placeholder.classList.add("hidden");
            }

            reader.readAsDataURL(file);
        }

    });

}) ();
