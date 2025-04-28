
window.document.getElementById("submit").addEventListener("click", function() {
    // main();
    redirectToFeed(); //inverter dps, provisório
});

async function main(){
    let url = "https://6ndzjs07-5502.brs.devtunnels.ms/"
    let credential = null;
    let params = null;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    if(email && password) {
        params = new URLSearchParams({
            username: email,
            password: password
        });

    } else {
        errorMessage.style.display = "flex";
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    credential = await verifyCredentials(url, params);

    console.log(credential)

    if (credential.message == "Login successful") {

        await localStorageData(credential);
        redirectToFeed()

    }else{
        errorMessage.style.display = "flex";
        errorMessage.textContent = "Usuário inválido.";
    }
}

async function verifyCredentials(url, params) {

    const response = await fetch(`${url}login?${params.toString()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });

    const data = await response.json(); 
    return data;

}


function redirectToFeed() {
    window.location.href = "../html/feed.html";
}

async function localStorageData(data) {
    localStorage.setItem("dataUser", JSON.stringify(data));
    return true
}

