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