document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById("myform");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        if(
            validarNome("name") &&
            validarEmail("email") &&
            validarSenha("password") &&
            validarTelefone("phone") &&
            validarMensagem("message")
        ) {
            alert("Formulário Enviado!");
            form.reset();
        }
    })
})

const validarNome = (id) =>{
    const nome = document.getElementById(id);
    const valor = nome.value.trim();

    if(valor === ""){
        alert("Digite seu nome completo.");
        return false;
    }

    return true;
}

function validarEmail(id){
    const email = document.getElementById(id);
    const valor = email.value.trim();

    if(valor === ""){
        alert("Digite seu email.");
        return false;
    } else if(!valor.includes("@gmail.com")){
        alert("Digite um email válido.");
        return false;
    }

    return true; 
}

function validarSenha(id){
    const senha = document.getElementById(id);
    const valor = senha.value.trim();

    if(valor.length < 6){
        alert("A senha tem que ter pelo menos 6 caracteres.");
        return false;
    }

    return true;
}

function validarTelefone(id){
    const telefone = document.getElementById(id);
    const valor = telefone.value.trim();

    if(valor.length != 11){
        alert("Digite um número válido.");
        return false;
    }
    
    return true;
}

function validarMensagem(id){
    const messagem = document.getElementById(id);
    const valor = messagem.value.trim();

    if(valor === ""){
        alert("Digite a mensagem.");
        return false;
    } else if(valor.length > 40){
        alert("A mensagem deve conter no máximo 40 caracteres.");
        return false;
    }

    return true;
}
