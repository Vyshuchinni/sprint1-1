<script>
    // script.js

    // Handle signup
    document.getElementById("signup-form")?.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("signup-confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        localStorage.setItem("user", JSON.stringify({ name, email, password }));
        alert("Signup successful!");
        window.location.href = "login.html";
    });

    // Handle login
    document.getElementById("login-form")?.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && (user.email === username || user.name === username) && user.password === password) {
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", true);
            window.location.href = "profile.html";
        } else {
            alert("Invalid credentials!");
        }
    });

</script>
