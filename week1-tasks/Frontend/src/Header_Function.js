export function Toggle() {
    const savedTheme = localStorage.getItem('theme');

    const classes = document.querySelectorAll('.dark_mode');
    const d = document.getElementsByClassName('theme_toggle');
    const header = document.querySelector('.header');
    const quoteCards = document.querySelectorAll('.quote_card');
    const q_txt = document.querySelectorAll('.q_txt');

    if (savedTheme === 'dark') {
        d[0].innerText = '🌙';
        classes.forEach((obj) => {
            obj.style.backgroundColor = "#333";
            obj.style.color = "white";
        });

        header.style.boxShadow = "0px 2px 5px rgba(255, 255, 255, 0.1)";

        quoteCards.forEach((quoteCard) => {
            quoteCard.style.background = "linear-gradient(135deg, rgb(61 163 244) 0%, rgb(255 93 93) 100%)";
            q_txt.forEach((q_txt) => {
                q_txt.style.color = "white";
            });
            quoteCard.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.1)";
            
            quoteCard.onmouseover = null;
            quoteCard.onmouseout = null;

            quoteCard.addEventListener('mouseover', () => {
                quoteCard.style.transform = "translateY(-5px)";
                quoteCard.style.boxShadow = "0 8px 20px rgba(255, 255, 255, 0.25)";
            });

            quoteCard.addEventListener('mouseout', () => {
                quoteCard.style.transform = "translateY(0)";
                quoteCard.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.1)";
            });
        });

    } else {
        d[0].innerText = '☀️';
        classes.forEach((obj) => {
            obj.style.backgroundColor = "white";
            obj.style.color = "black";
        });

        header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";

        quoteCards.forEach((quoteCard) => {
            quoteCard.style.background = "linear-gradient(135deg, rgb(61 163 244) 0%, rgb(255 93 93) 100%)";
            q_txt.forEach((q_txt) => {
                q_txt.style.color = "black";
            });
            quoteCard.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";

            quoteCard.onmouseover = null;
            quoteCard.onmouseout = null;

            quoteCard.addEventListener('mouseover', () => {
                quoteCard.style.transform = "translateY(-5px)";
                quoteCard.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.25)";
            });

            quoteCard.addEventListener('mouseout', () => {
                quoteCard.style.transform = "translateY(0)";
                quoteCard.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
            });
        });
    }
}
