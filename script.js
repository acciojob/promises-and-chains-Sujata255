document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();

    // Basic validation to ensure inputs are not empty
    if (name === '' || age === '') {
        alert('Both fields are required!');
        return;
    }

    // Convert age to a number and create a promise for age validation
    const ageNumber = Number(age);

    if (isNaN(ageNumber) || ageNumber <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    // Creating a promise for age validation
    const ageValidationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNumber >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // Resolve or reject after 4 seconds
    });

    // Handle the promise resolution or rejection
    ageValidationPromise
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry, ${name}. You aren't old enough.`);
        });
});

