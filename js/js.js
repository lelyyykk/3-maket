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
/*----------------для форми-----------------*/
$(document).ready(function() {
    // Show the form
    $('.li-connection').click(function() {
        $('.feedback-hidden-menu').addClass('visible');
    });

    // Close the form
    $('.feedback-hidden-menu .sent').click(function() {
        $('.feedback-hidden-menu').removeClass('visible');
    });

    // Close the form when clicked outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.li-connection').length && !$(event.target).closest('.feedback-hidden-menu').length) {
            $('.feedback-hidden-menu').removeClass('visible');
        }
    });

    // Close the form when close button is clicked
    $('.feedback-hidden-menu .close-button').click(function() {
        $('.feedback-hidden-menu').removeClass('visible');
        return false;
    });
});
/*---------------валідація-------------------*/
$(document).click(function(event) {
    if (!$(event.target).closest('.li-connection').length && !$(event.target).closest('.feedback-hidden-menu').length) {
        $('.feedback-hidden-menu').removeClass('visible');
    }
});

$(".feedback-hidden-menu form").submit(function(event) {
    var form = $(this);
    var inputs = form.find("input[type='text'], input[type='tel'], input[type='gmail'], textarea");

    inputs.each(function() {
        var input = $(this);
        var errorContainer = input.siblings(".error-message");
        var errorMessage = input.data("error");
        var fieldType = input.attr("type");

        if (input.val().trim() === "") {
            input.val("");
            input.attr("placeholder", errorMessage);
            input.addClass("error");
        } else {
            if (fieldType === "text" && !/^[a-zA-Zа-яА-ЯіїєІЇЄґҐ']{2,}$/.test(input.val())) {
                input.val("");
                input.attr("placeholder", "Введіть коректно ім'я.");
                input.addClass("error");
            } else if (fieldType === "tel" && !/^[\d-()+ ]{10,}$/.test(input.val())) {
                input.val("");
                input.attr("placeholder", "Введіть коректний номер телефону.");
                input.addClass("error");
            }
                else if (fieldType === "email" && (!/^.{15,}$/.test(input.val()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.val()))) {
                input.val("");
                input.attr("placeholder", "Введіть коректну адресу електронної пошти.");
                input.addClass("error");
            } else if (input.is("textarea[name='message']") && input.val().length < 10) {
                input.val("");
                input.attr("placeholder", "Введіть повідомлення (мінімум 10 символів).");
                input.addClass("error");
            }
                else {
                input.removeClass("error");
            }
        }
    });

    if (form.find(".error").length > 0) {
        event.preventDefault();
    }
});
