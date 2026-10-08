function registerUser(event) {

    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value;

    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyGmiuCn0x_6tYi09rWcVkdlIqy5kBRxgrDF5i57TzWyV8AxY72OOO1qqp_rQwfcA1T/exec";

    let data = {

        action: "register",

        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        userType: "patient"

    };

    fetch(WEB_APP_URL, {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => response.json())

    .then(result => {

        if (result.success === true) {

            alert(
                "Account created successfully!\n\n" +
                "Your Patient ID is: " +
                result.patientID
            );

            window.location.href = "index.html";

        } else {

            alert("Registration failed.");

        }

    })

    .catch(error => {

        console.error(error);

        alert("Unable to connect to the registration system.");

    });

}