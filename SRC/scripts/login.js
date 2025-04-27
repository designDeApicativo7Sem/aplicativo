
window.document.getElementById("submit").addEventListener("click", function() {
    main();
});

async function main(){
    let url = "https://opulent-dollop-xjx4pj47v7ghv5xp-3000.app.github.dev"
    let credential = null;
    let params = null;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    if(email && password) {
        params = new URLSearchParams({
            email: email,
            senha: password
        });
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    credential = await verifyCredentials(url, params);

    if (credential) {

        await localStorageData(credential);
        redirectToFeed()

    } else {
        errorMessage.style.display = "block";

        if (credential.errorType === "email") {
            errorMessage.textContent = "Email incorreto.";
        } else if (credential.errorType === "password") {
            errorMessage.textContent = "Senha incorreta.";
        } else {
            errorMessage.textContent = "Usuário inválido.";
        }
    }
}

async function verifyCredentials(url, params) {
    try {
        const response = await fetch(`${url}/usuario?${params.toString()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        });

        if (response.status === 200) {
            const data = await response.json(); 
            return data[0];
        } else {
            console.error("Erro na requisição:", response.status);
            return null;
        }
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
        return null;
    }
}

function redirectToFeed() {
    window.location.href = "../html/feed.html";
}

async function localStorageData(data) {
    localStorage.setItem("dataUser", JSON.stringify(data));
    return true
}

