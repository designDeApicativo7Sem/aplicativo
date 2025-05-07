
window.document.getElementById("submit").addEventListener("click", function() {
    main();
    // redirectToFeed(); //inverter dps, provisório
});

document.getElementById("register").addEventListener("click", function() {    
    redirectToRegister(); 
});

async function main(){
    let url = "https://apex.oracle.com/pls/apex/projeto_7/apigym/"
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
        errorMessage.style.display = "flex";
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    credential = await verifyCredentials(url, params);

    console.log(credential)

    if (credential.userData) {

        await localStorageData(credential);
        redirectToFeed()

    }else{
        errorMessage.style.display = "flex";
        errorMessage.textContent = "Usuário inválido.";
    }
}

async function verifyCredentials(url, params) {

    const response = await fetch(`${url}usuario/?${params.toString()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });
    

    const data = await response.json(); 

    return { "status": response.status,
            "userData": data.items[0]
        }
    }


function redirectToFeed() {
    window.location.href = "../html/feed.html";
}

function redirectToRegister(){
    window.location.href = "../html/cadastro.html";

}


async function localStorageData(data) {
    localStorage.setItem("dataUser", JSON.stringify(data));
    return true
}

