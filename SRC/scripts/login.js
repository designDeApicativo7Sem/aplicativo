
window.document.getElementById("submit").addEventListener("click", function() {
    main();
});

function main(){
    let url = "urlAPI.com.br/"
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
            password: password
        });
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    credential = verifyCredentials(url, params);

    if (credential) {
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
    
    await fetch(`${url}/api/users?${params.toString()}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }).then(response => {
        if (response.status === 200) {
            let data = response.json();
            return data;
        } else {
            // return null;
            let data = {
                "id": 1,
                "name": "Lucas"
                }
            return data // provisório enquanto rota api nao pronta
        }
    })
}


function redirectToFeed() {
    window.location.href = "../html/feed.html";
}

