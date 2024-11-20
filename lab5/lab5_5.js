let alarms = [];

function checkAlarms() {
  const now = new Date();

  alarms.forEach((alarm) => {
    if (alarm.enabled && alarm.date === now.toLocaleDateString("uk-UA") && alarm.time === now.toTimeString().slice(0, 5)) {
      alert(`Дзінь-дзінь! Будильник на ${alarm.date} ${alarm.time}`);
      alarm.enabled = false; 
      renderAlarms();
    }
  });
}

function renderAlarms() {
  const alarmsList = document.getElementById("alarms-list");
  alarmsList.innerHTML = ""; 
  
  alarms.forEach((alarm, index) => {
    const alarmDiv = document.createElement("div");
    alarmDiv.classList.add("alarm");
    alarmDiv.setAttribute("enabled", alarm.enabled);

    alarmDiv.innerHTML = `
      <span>${alarm.date} ${alarm.time}</span>
      <button onclick="toggleAlarm(${index}, true)" ${alarm.enabled ? "disabled" : ""}>Увімкнути</button>
      <button onclick="toggleAlarm(${index}, false)" ${!alarm.enabled ? "disabled" : ""}>Вимкнути</button>
    `;

    alarmsList.appendChild(alarmDiv);
  });
}

function toggleAlarm(index, enable) {
  alarms[index].enabled = enable;
  renderAlarms();
}

document.getElementById("add-alarm").addEventListener("click", () => {
  const alarmDate = document.getElementById("alarm-date").value;
  const alarmTime = document.getElementById("alarm-time").value;

  if (alarmDate && alarmTime) {
    const alarmDateTime = new Date(`${alarmDate}T${alarmTime}`);
    const now = new Date();

    if (alarmDateTime < now) {
      alert("Введений час уже минув! Будь ласка, виберіть майбутній час.");
    } else {
      alarms.push({
        date: alarmDateTime.toLocaleDateString("uk-UA"),
        time: alarmDateTime.toTimeString().slice(0, 5),
        enabled: true, 
      });
      renderAlarms();
    }
  } else {
    alert("Будь ласка, виберіть дату та час.");
  }
});

setInterval(checkAlarms, 1000);
