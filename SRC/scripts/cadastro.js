document.getElementById("submit").addEventListener("click", async function () {
// var response = createAccount()

alert("usuario cadastrado com sucesso");
window.location.href = "../html/login.html";
console.log(response)
}
);



async function createAccount(){
    
    let url = "https://apex.oracle.com/pls/apex/projeto_7/apigym/"
    let params = null;

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        cpf: document.getElementById("cpf").value
    };

    params = new URLSearchParams(userData);

    const response = await fetch(`${url}usuario/?${params.toString()}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });

    const data = await response.json();

    return {
        "status": response.status,
        "userData": data.items[0]
    }
}