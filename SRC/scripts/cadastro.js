window.getElementById("submit").addEventListener("click", async function () {     
});

    let url = "https://apex.oracle.com/pls/apex/projeto_7/apigym/"    
    let params = null;

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        cpf: document.getElementById("cpf").value
    };

const response = await fetch(`${url}usuario/?${params.toString()}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});

const data = await response.json(); 

return { "status": response.status,
        "userData": data.items[0]
    }

