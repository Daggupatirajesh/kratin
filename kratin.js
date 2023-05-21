// Function to display a reminder message
function remindMedication() {
  console.log("It's time to take your medication!");
  // You can customize the reminder message here, such as displaying it on a webpage or sending a notification.
}

// Function to schedule medication reminders
function scheduleReminders() {
  // Set the time for medication reminders (in this example, it's set to 9 AM, 1 PM, and 7 PM)
  const reminderTimes = ["09:00:00", "13:00:00", "19:00:00"];

  // Get the current time
  const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });

  // Check if the current time matches any of the reminder times
  if (reminderTimes.includes(currentTime)) {
    remindMedication();
  }
}

// Call the scheduleReminders function every second to check for reminders
setInterval(scheduleReminders, 1000);
