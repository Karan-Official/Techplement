export function Toggle() {
    const savedTheme = localStorage.getItem('theme');
    
    const classes = document.querySelectorAll('.dark_mode');
    const d = document.getElementsByClassName('theme_toggle');
    const header = document.querySelector('.header');
    
    if (savedTheme === 'dark') {
        d[0].innerText = '🌙';
        classes.forEach((obj) => {
            obj.style.backgroundColor = "#333";
            obj.style.color = "white";
        });
        header.style.boxShadow = "0px 2px 5px rgba(255, 255, 255, 0.1)";
    } else {
        d[0].innerText = '☀️';
        classes.forEach((obj) => {
            obj.style.backgroundColor = "white";
            obj.style.color = "black";
        });
        header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
    }
}
