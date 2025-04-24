// Установка куки
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    alert("Куки '" + name + "' установлены!");
}

// Получение куки
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length);
    }
    return null;
}

// Удаление куки
function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
    alert("Куки '" + name + "' удалены!");
}

// Проверяем, есть ли куки при загрузке страницы
window.onload = function() {
    const theme = getCookie('theme');
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
    }
};
