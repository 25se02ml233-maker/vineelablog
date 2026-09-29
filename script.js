<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Vineela Blog | Create Account</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #fff4e6, #f7e6ff);
        }

        .box {
            width: 900px;
            max-width: 92%;
            min-height: 550px;
            display: flex;
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .left {
            width: 45%;
            padding: 60px 45px;
            background: linear-gradient(145deg, #7b2cbf, #c77dff);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .left h1 {
            font-size: 38px;
            margin-bottom: 20px;
        }

        .left p {
            font-size: 17px;
            line-height: 1.7;
        }

        .line {
            width: 65px;
            height: 4px;
            background: white;
            margin: 20px 0;
            border-radius: 10px;
        }

        .right {
            width: 55%;
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .right h2 {
            font-size: 30px;
            margin-bottom: 8px;
            color: #333;
        }

        .subtitle {
            color: #777;
            margin-bottom: 25px;
        }

        label {
            display: block;
            margin-bottom: 7px;
            font-weight: bold;
            font-size: 14px;
            color: #444;
        }

        input {
            width: 100%;
            padding: 14px;
            margin-bottom: 16px;
            border: 1px solid #ddd;
            border-radius: 10px;
            font-size: 15px;
            outline: none;
        }

        input:focus {
            border-color: #9d4edd;
        }

        button {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(90deg, #7b2cbf, #9d4edd);
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        button:hover {
            opacity: 0.9;
        }

        #message {
            margin-top: 15px;
            text-align: center;
            font-size: 14px;
        }

        .login {
            text-align: center;
            margin-top: 20px;
            color: #777;
        }

        .login a {
            color: #7b2cbf;
            font-weight: bold;
            text-decoration: none;
        }

        @media(max-width:700px) {
            .box {
                flex-direction: column;
            }

            .left,
            .right {
                width: 100%;
            }

            .left {
                padding: 35px;
            }

            .right {
                padding: 35px;
            }
        }
    </style>
</head>

<body>

    <div class="box">

        <div class="left">

            <h1>VINEELA BLOG</h1>

            <div class="line"></div>

            <p>
                Create your account and become part of
                the Vineela Blog community.
            </p>

            <p style="margin-top:20px;">
                Share your stories, ideas and experiences
                with the world.
            </p>

        </div>


        <div class="right">

            <h2>Create Account</h2>

            <p class="subtitle">
                Join us and start your blogging journey.
            </p>


            <form id="signupForm">

                <label>Full Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required>


                <label>Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required>


                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Create a password"
                    required>


                <label>Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required>


                <button type="submit">
                    Create Account
                </button>

            </form>


            <p id="message"></p>


            <p class="login">
                Already have an account?
                <a href="login.html">Sign In</a>
            </p>

        </div>

    </div>


    <!-- Firebase -->

    <script src="https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"></script>

    <script src="https://www.gstatic.com/firebasejs/12.19.0/firebase-auth-compat.js"></script>


    <script>

        const firebaseConfig = {
            apiKey: "AIzaSyDAVS0nYJouL-w-xcazvVSI0nydKvibWUM",
            authDomain: "vineela-blog.firebaseapp.com",
            projectId: "vineela-blog",
            storageBucket: "vineela-blog.firebasestorage.app",
            messagingSenderId: "613899947556",
            appId: "1:613899947556:web:776f8ff7f412d559d592b1"
        };


        firebase.initializeApp(firebaseConfig);

        const auth = firebase.auth();


        document.getElementById("signupForm").addEventListener("submit", function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            const message =
                document.getElementById("message");


            if (password !== confirmPassword) {

                message.textContent = "Passwords do not match.";
                message.style.color = "red";

                return;
            }


            if (password.length < 6) {

                message.textContent =
                    "Password must contain at least 6 characters.";

                message.style.color = "red";

                return;
            }


            message.textContent = "Creating account...";
            message.style.color = "#7b2cbf";


            auth.createUserWithEmailAndPassword(email, password)

                .then(function(userCredential) {

                    return userCredential.user.updateProfile({
                        displayName: name
                    });

                })

                .then(function() {

                    message.textContent =
                        "Account created successfully!";

                    message.style.color = "green";


                    setTimeout(function() {

                        window.location.href = "login.html";

                    }, 1000);

                })

                .catch(function(error) {

                    message.textContent = error.message;
                    message.style.color = "red";

                });

        });

    </script>

</body>

</html>