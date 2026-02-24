document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // GET ELEMENT
    // =========================
    const loginBtn = document.getElementById("loginBtn")
    const registerBtn = document.getElementById("registerBtn")
    const loginForm = document.getElementById("loginForm")
    const registerForm = document.getElementById("registerForm")

    // =========================
    // TOGGLE LOGIN / REGISTER
    // =========================
    loginBtn.addEventListener("click", () => {
        loginForm.classList.remove("opacity-0", "pointer-events-none")
        registerForm.classList.add("opacity-0", "pointer-events-none")

        loginBtn.classList.add("border-b-2", "border-[#3e2c23]", "text-[#3e2c23]")
        registerBtn.classList.remove("border-b-2", "border-[#3e2c23]", "text-[#3e2c23]")
        registerBtn.classList.add("text-gray-400")
    })

    registerBtn.addEventListener("click", () => {
        registerForm.classList.remove("opacity-0", "pointer-events-none")
        loginForm.classList.add("opacity-0", "pointer-events-none")

        registerBtn.classList.add("border-b-2", "border-[#3e2c23]", "text-[#3e2c23]")
        loginBtn.classList.remove("border-b-2", "border-[#3e2c23]", "text-[#3e2c23]")
        loginBtn.classList.add("text-gray-400")
    })

    // =========================
    // HELPER FUNCTIONS
    // =========================
    function getUsers() {
        return JSON.parse(localStorage.getItem("users")) || []
    }

    function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users))
    }

    // =========================
    // REGISTER
    // =========================
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault()

        const name = registerForm.querySelector('input[type="text"]').value
        const email = registerForm.querySelector('input[type="email"]').value
        const password = registerForm.querySelector('input[type="password"]').value

        let users = getUsers()

        const emailExists = users.find(user => user.email === email)

        if (emailExists) {
            Swal.fire({
                icon: 'error',
                title: 'Email Sudah Terdaftar!',
                confirmButtonColor: '#3e2c23'
            })
            return
        }

        users.push({ name, email, password })
        saveUsers(users)

        Swal.fire({
            icon: 'success',
            title: 'Register Berhasil!',
            text: 'Silakan login untuk melanjutkan',
            confirmButtonColor: '#3e2c23'
        })

        registerForm.reset()
        loginBtn.click() // otomatis pindah ke login
    })

    // =========================
    // LOGIN
    // =========================
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault()

        const email = loginForm.querySelector('input[type="email"]').value
        const password = loginForm.querySelector('input[type="password"]').value

        const users = getUsers()

        const validUser = users.find(
            user => user.email === email && user.password === password
        )

        if (!validUser) {
            console.log(`masuk sini`)
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: 'Email atau password salah!',
                confirmButtonColor: '#3e2c23'
            })
            loginForm.reset()
            return
        }

        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("currentUser", validUser.name)

        Swal.fire({
            icon: 'success',
            title: 'Login Berhasil!',
            text: `Welcome, ${validUser.name}!`,
            confirmButtonColor: '#3e2c23'
        }).then(() => {
            window.location.href = "index.html"
        })
    })

})