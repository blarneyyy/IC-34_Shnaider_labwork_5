let alarms = [];

function checkAlarms() {
  const now = new Date();
  alarms.forEach((alarm) => {
    if (alarm.enabled && alarm.date === now.toLocaleDateString("uk-UA") && alarm.time === now.toTimeString().slice(0, 5)) {
      alert(`Дзінь-дзінь! Будильник на ${alarm.date} ${alarm.time}`);
      console.log(`Будильник спрацював: дата ${alarm.date}, час=${alarm.time}`);
      alarm.enabled = false; 
      renderAlarms();
    }
  });
}

function renderAlarms() {
  const alarmsList = document.getElementById("alarms-list");
  alarmsList.innerHTML = ""; 
  
  alarms.forEach((alarm, index) => {
    console.log(`Додаємо будильник у список: дата ${alarm.date}, час ${alarm.time}, увімкнено ${alarm.enabled}`);
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
  console.log(`Змінюємо стан будильника: індекс ${index}, новий стан ${enable}`);
  alarms[index].enabled = enable;
  renderAlarms();
}

document.getElementById("add-alarm").addEventListener("click", () => {
  const alarmDate = document.getElementById("alarm-date").value;
  const alarmTime = document.getElementById("alarm-time").value;

  console.log(`Додаємо новий будильник: дата ${alarmDate}, час ${alarmTime}`);
  if (alarmDate && alarmTime) {
    const alarmDateTime = new Date(`${alarmDate}T${alarmTime}`);
    const now = new Date();

    if (alarmDateTime < now) {
      console.log("Введений час уже минув.");
      alert("Введений час уже минув! Будь ласка, виберіть майбутній час.");
    } else {
      alarms.push({
        date: alarmDateTime.toLocaleDateString("uk-UA"),
        time: alarmDateTime.toTimeString().slice(0, 5),
        enabled: true, 
      });
      console.log(`Будильник додано: дата ${alarmDateTime.toLocaleDateString("uk-UA")}, час ${alarmDateTime.toTimeString().slice(0, 5)}`);
      renderAlarms();
    }
  } else {
    console.log("Відсутні дата або час для нового будильника.");
    alert("Будь ласка, виберіть дату та час.");
  }
});

setInterval(checkAlarms, 1000);
