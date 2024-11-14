document.getElementById("slotBookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const timeSlot = document.getElementById("timeSlot").value;

    // Basic form validation
    if (name && email && date && timeSlot) {
        // Hide the form
        document.getElementById("slotBookingForm").style.display = 'none';

        // Show confirmation message
        document.getElementById("confirmationMessage").style.display = 'block';
        document.getElementById("confirmName").textContent = name;
        document.getElementById("confirmEmail").textContent = email;
        document.getElementById("confirmDate").textContent = date;
        document.getElementById("confirmTimeSlot").textContent = timeSlot;
    } else {
        alert("Please fill in all the fields.");
    }
});
