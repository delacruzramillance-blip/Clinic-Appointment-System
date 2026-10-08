function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value;
    let userType = document.getElementById("userType").value;

    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyGmiuCn0x_6tYi09rWcVkdlIqy5kBRxgrDF5i57TzWyV8AxY72OOO1qqp_rQwfcA1T/exec";

    let data = {
        action: "login",
        email: email,
        password: password,
        userType: userType
    };


    fetch(WEB_APP_URL, {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => {

        console.log("STATUS:", response.status);

        return response.json();

    })

    .then(result => {

        
        if (result.success === true) {

            alert("Login successful!");


            if (userType === "patient") {

                window.location.href = "patientDashboard.html";

            }

            else if (userType === "admin") {

                window.location.href = "adminDashboard.html";

            }

            else if (userType === "doctor") {

                window.location.href = "doctor-dashboard.html";

            }

        }

        else {

            alert("Invalid email, password, or account type.");

        }

    })

    .catch(error => {

        console.error("Login error:", error);

        alert("Unable to connect to the login system.");

    });

}