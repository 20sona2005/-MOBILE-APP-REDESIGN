function toggleAlarm(checkbox) {
    let alarmText = checkbox.closest(".alarm").querySelector(".time");
    if (checkbox.checked) {
        alarmText.style.color = "black"; // Active
    } else {
        alarmText.style.color = "gray"; // Inactive
    }
}

function addAlarm() {
    let alarmList = document.getElementById("alarmList");

    let newAlarm = document.createElement("div");
    newAlarm.classList.add("alarm");

    newAlarm.innerHTML = `
        <div>
            <p class="time">1:00 AM</p>
            <p class="repeat">Tomorrow</p>
        </div>
        <label class="switch">
            <input type="checkbox" onchange="toggleAlarm(this)">
            <span class="slider"></span>
        </label>
    `;

    alarmList.appendChild(newAlarm);
}


document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll(".nav-item").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});
