// Function to create a promise based on age
function checkAge(age, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });
}

// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    // Validate that the fields are not empty
    if (age === "" || name === "") {
        alert("Both fields are required.");
        return;
    }

    // Call the checkAge function and handle promise resolution/rejection
    checkAge(Number(age), name)
        .then((message) => {
            alert(message);
        })
        .catch((errorMessage) => {
            alert(errorMessage);
        });
});
