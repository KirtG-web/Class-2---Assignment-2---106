$(document).ready(function () {
    $("#btnSave").click(function () {
        readContent();
    });
});

function readContent() {
    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let color = $("#selColor").val();
    let date = $("#selDate").val();
    let status = $("#selStatus").val();
    let budget = $("#numBudget").val();

    logApp("Read values:", title, desc, color, date, status, budget);

    let task = new Task(title, desc, color, date, status, budget);
    logApp("Created task:", task);

    displayTask(task);
}

function displayTask(task) {
    const taskHtml = `
        <div style="border:1px solid #333; padding:10px; margin-bottom:10px; background-color:${task.color}">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
            <p>Status: ${task.status}</p>
            <p>Due: ${task.date}</p>
            <p>Budget: $${task.budget}</p>
        </div>
    `;
    $("#list").append(taskHtml);
}

function logApp(...args) {
    console.log("[TaskApp]", ...args);
}

