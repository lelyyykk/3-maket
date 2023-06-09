/*-----------------BURGER-MENU-----------------*/
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function() {
        menu.classList.toggle("show");
        burgerMenu.classList.toggle("active"); // Додали цей рядок
    });

    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.classList.remove("show");
            burgerMenu.classList.remove("active"); // Додали цей рядок
        });
    });
});
/*------------HIDDEN MENU----------------*/
// Отримуємо посилання на елементи списку та підменю
const forTechItems = document.querySelectorAll('.for-tech');

// Проходимося по кожному елементу з класом .for-tech
for (let i = 0; i < forTechItems.length; i++) {
    const forTechItem = forTechItems[i];
    const hiddenMenu = forTechItem.querySelector('.hidden-menu');

    // Додаємо події наведення курсора та відведення курсора для поточного елементу
    forTechItem.addEventListener('mouseover', showHiddenMenu);
    forTechItem.addEventListener('mouseout', hideHiddenMenu);

    // Функція для відображення прихованого підменю
    function showHiddenMenu() {
        hiddenMenu.classList.add('visible');
    }

    // Функція для приховування прихованого підменю
    function hideHiddenMenu() {
        hiddenMenu.classList.remove('visible');
    }
}
