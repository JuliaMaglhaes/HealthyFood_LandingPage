const handleSubmit = event => {
    event.preventDefault();
    const data = {
        name: event.target.elements.name.value,
        date: event.target.elements.date.value,
        cpf: event.target.elements.cpf.value,
        cep: event.target.elements.cep.value,
        bairro: event.target.elements.bairro.value,
        cidade: event.target.elements.cidade.value,
        uf: event.target.elements.uf.value,
        numero: event.target.elements.numero.value,
        logradouro: event.target.elements.logradouro.value,
        complemento: event.target.elements.complemento.value,
    }
    //Salvamento dos dados
    const dadosForm = JSON.stringify(data);
    localStorage.setItem("dados", dadosForm);

    const cookieSave = () =>{
        const date = new Date()
        date.setTime(date.getTime() + 60000 * 100);

        const expires = ";" + "expires=" + date.toUTCString();
        document.cookie = "Nome="+`${data.name}`+ expires+ "; path=/";
        document.cookie = "Data de nascimento="+`${data.date}`+ expires+ "; path=/";
        document.cookie = "CPF="+`${data.cpf}`+expires+ "; secure; path=/";
        document.cookie = "CEP="+`${data.cep}`+ expires+ "; path=/";
        document.cookie = "Bairro="+`${data.bairro}`+ expires+ "; path=/";
        document.cookie = "Cidade="+`${data.cidade}`+ expires+ "; path=/";
        document.cookie = "UF="+`${data.uf}`+ expires+ "; path=/";
        document.cookie = "Número="+`${data.numero}`+expires+ "; path=/";
        if(data.logradouro.value < 1 || data.complemento.value < 1){
            return;
        } else{
            document.cookie = "Logradouro="+`${data.logradouro}`+expires+ "; path=/";
            document.cookie = "Complemento="+`${data.complemento}`+expires+ "; path=/";
        }
    }
    cookieSave();
}

export default handleSubmit;