window.document.getElementById("addPost").addEventListener("click", () => {

    const elemento = document.getElementById("background"); // Altere para o id correto do seu elemento
    elemento.classList.toggle("oculto");

    document.getElementById("cardPost").classList.toggle("oculto");
    // console.log("Classe alternada com sucesso!");
});

window.document.getElementById("cancelar").addEventListener("click", () =>{
    document.getElementById("background").classList.toggle("oculto");
    document.getElementById("cardPost").classList.toggle("oculto");
})

window.document.getElementById("registrar").addEventListener("click", () =>{
    sendPost();
})


async function sendPost() {

    var params = new URLSearchParams({
        conteudo: document.getElementById("descricao").value,
        foto: document.getElementById("foto").value,
        tempo: document.getElementById("tempo").value
        
    });

    var url = "https://apex.oracle.com/pls/apex/projeto_7/apigym/feed/"

    const response = await fetch(`${url}usuario/?${params.toString()}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });
    

    const data = await response.json(); 

    console.log(data);

   
    
    }


document.getElementById("account").addEventListener("click", () => {
    window.location.href = "../html/calendario.html";
});