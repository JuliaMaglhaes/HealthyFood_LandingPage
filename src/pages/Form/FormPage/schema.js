import * as Yup from 'yup';

Yup.setLocale({
    mixed:{
        required: "O campo ${path} é obrigatório"
    }
})

export default Yup.object().shape({
    name: Yup.string().min(2, 'O campo é obrigatório e deve ter mais de 2 letras').required().typeError('Nome inválido'),
    cep: Yup.string().length(8).required(),
    date: Yup.date().required(),
    uf: Yup.string().required(),
    bairro: Yup.string().required(),
    cpf: Yup.string().length(11),
    cidade: Yup.string().min(2).required(),
    numero: Yup.string().required(),
    complemento: Yup.string().notRequired()
});