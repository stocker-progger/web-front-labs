function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `Дата и время для русской локали: ${today.toLocaleString('ru-RU')}<br>
        Дата и время для локали США: ${today.toLocaleString('en-US')}<br>
        Дата и время для локали Франции: ${today.toLocaleString('fr-FR')}<br>
        Дата и время для локали Германии: ${today.toLocaleString('de-DE')}<br>
        Дата и время для локали Китая: ${today.toLocaleString('zh-CN')}<br>
        Дата и время для локали Японии: ${today.toLocaleString('ja-JP')}<br>
    `;
}

function showCurrentDate() {
    let dt = new Date();
    let year = dt.getFullYear();
    let monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    let month = monthNames[dt.getMonth()];
    let date = dt.getDate();
    let dayNames = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    let day = dayNames[dt.getDay()];

    document.getElementById('showcurrent-date').innerHTML = `
        Текущий год: ${year}<br>
        Текущий месяц: ${month}<br>
        Текущая дата: ${date}<br>
        День недели: ${day}
    `;
}