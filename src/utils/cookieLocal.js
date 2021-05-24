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

    const cookieData = [
        {
            text: 'Nome=',
            value: `${data.name}`
        },
        {
            text: 'Data=',
            value: `${data.date}`
        },
        {
            text: 'CPF=',
            value: `${data.cpf}`
        },
        {
            text: 'CEP=',
            value: `${data.cep}`
        },
        {
            text: 'Bairro=',
            value: `${data.bairro}`
        },
        {
            text: 'Cidade=',
            value: `${data.cidade}`
        },
        {
            text: 'UF=',
            value: `${data.uf}`
        },
        {
            text: 'Número=',
            value: `${data.numero}`
        },
        {
            text: 'Logradouro=',
            value: `${data.logradouro}`
        },
        {
            text: 'Complemento=',
            value: `${data.complemento}`
        },
       
        
    ]

    const cookieSave = () =>{
        const date = new Date()
        date.setTime(date.getTime() + 60000 * 100);

        const expires = ";" + "expires=" + date.toUTCString();

        {cookieData.map(item=>(
            document.cookie = `${item.text}`+`${item.value}`+ expires+ "; path=/"
        ))}

    }
    cookieSave();
}

export default handleSubmit;