function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `Дата и время для русской локали: ${today.toLocaleString('ru-RU')}
        <div>Дата и время для локали США: ${today.toLocaleString('en-US')}</div>
        <div>Дата и время для локали Франции: ${today.toLocaleString('fr-FR')}</div>
        <div>Дата и время для локали Германии:${today.toLocaleString('de-DE')}</div>
        <div>Дата и время для локали Китая:${today.toLocaleString('zh-CN')}</div>
        <div>Дата и время для локали Японии:${today.toLocaleString('ja-JP')}</div>
    `;
}