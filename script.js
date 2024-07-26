

function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString();
    datetimeElement.innerHTML = `${formattedDate} - ${formattedTime}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
