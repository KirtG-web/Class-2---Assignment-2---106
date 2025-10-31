function readContent() {
  let title = $("#txtTitle").val();
  let desc = $("#txtDescription").val();
  let color = $("#selColor").val();
  let date = $("#selDate").val();
  let status = $("#selStatus").val();
  let budget = $("#numBudget").val();

  console.log("Read values:", title, desc, color, date, status, budget);

  // Create a Task object (assuming Task is loaded from task.js)
  let task = new Task(title, desc, color, date, status, budget);
  console.log("Created task:", task);

  displayTask(task);
}
