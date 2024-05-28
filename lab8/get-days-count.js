function showDaysCount() {
    let today = new Date();
    let inputDate = document.getElementById('date-input');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
    daysCount = Math.floor(daysCount);

    let daysCountDiv = document.getElementById('days-count');
    daysCountDiv.innerHTML = `Количество дней с даты рождения: ${daysCount}`;
}

function clearDate() {
    let inputDate = document.getElementById('date-input');
    inputDate.value = '';

    let daysCountDiv = document.getElementById('days-count');
    daysCountDiv.innerHTML = '';
}
