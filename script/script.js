const apiURL = "http://localhost:8080/usuarios"

document.getElementById("formulario").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const response = await fetch(apiURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nome, email,senha})
    })

    if(response.ok) {
        alert("usuario cadastrado");
        document.getElementById("formulario").reset();
    } else {
        alert("erro ao cadastrar");
    }

})