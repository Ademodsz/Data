const validUsers = {
    "Ade_Cosmic": {
        rank: "Rank 1-7",
        status: "Aktif",
        joinDate: "01 Januari 2023",
        whatsApp: "+62 812-3456-7890"
    },
    "Rexx_Kandar": {
        rank: "Rank 1-7",
        status: "Aktif",
        joinDate: "15 Maret 2023",
        whatsApp: "+62 812-9876-5432"
    }
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;

    if (validUsers[username]) {
        document.getElementById("message").innerText = `Welcome, ${username}!`;

        // Display profile information
        const userData = validUsers[username];
        document.getElementById("profileName").innerText = username;
        document.getElementById("profileRank").innerText = userData.rank;
        document.getElementById("profileStatus").innerText = userData.status;
        document.getElementById("profileJoinDate").innerText = userData.joinDate;
        document.getElementById("profileWhatsApp").innerText = userData.whatsApp;

        document.getElementById("profile").classList.remove("hidden");
    } else {
        document.getElementById("message").innerText = "Invalid Username!";
        document.getElementById("profile").classList.add("hidden");
    }
});

document.getElementById("adminButton").addEventListener("click", function() {
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".admin-container").classList.remove("hidden");
});

document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;

    // Sample admin credentials
    const validAdminUsername = "admin";
    const validAdminPassword = "password123";

    if (adminUsername === validAdminUsername && adminPassword === validAdminPassword) {
        document.getElementById("adminMessage").innerText = "Admin Login Successful!";
        document.querySelector(".admin-container").classList.add("hidden");
        document.querySelector(".admin-area").classList.remove("hidden");
    } else {
        document.getElementById("adminMessage").innerText = "Invalid Admin Credentials!";
    }
});

document.getElementById("adminForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const rank = document.getElementById("rank").value;
    const status = document.getElementById("status").value;
    const joinDate = document.getElementById("joinDate").value;
    const whatsApp = document.getElementById("whatsApp").value;

    if (newUsername in validUsers) {
        document.getElementById("userMessage").innerText = "Username already exists!";
    } else {
        validUsers[newUsername] = {
            rank: rank,
            status: status,
            joinDate: joinDate,
            whatsApp: whatsApp
        };
        document.getElementById("userMessage").innerText = "User added successfully!";
    }
});

document.getElementById("backToUserLogin").addEventListener("click", function() {
    document.querySelector(".admin-container").classList.add("hidden");
    document.querySelector(".login-container").classList.remove("hidden");
});
