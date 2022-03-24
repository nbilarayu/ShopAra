let container = document.getElementById("mainpage"), Screen = document.getElementById("Screen");


const resize = () => {
    const isChecked = Screen.checked;
    isChecked ? container.classList.remove("container") : container.classList.add("container");
};

addEventListener("change", resize, false);