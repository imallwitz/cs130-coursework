const defaultTheme = () => {
   alert('switch to default theme');
};

const oceanTheme = () => {
   document.querySelector(".container").className = "container ocean";
};

const desertTheme = () => {
   alert('switch to desert theme');
};


document.querySelector("#default").onclick = defaultTheme;
document.querySelector("#ocean").onclick = oceanTheme;
document.querySelector("#desert").onclick = desertTheme;

