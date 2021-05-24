import * as Yup from 'yup';

Yup.setLocale({
    mixed:{
        required: "O campo ${path} é obrigatório"
    }
})

export default Yup.object().shape({
    name: Yup.string().min(2, 'O campo está inválido').required().typeError('Nome inválido'),
    cep: Yup.string().length(8).required(),
    date: Yup.string().required(),
    uf: Yup.string().required(),
    bairro: Yup.string().required(),
    cpf: Yup.string().length(11).required(),
    cidade: Yup.string().min(2).required(),
    numero: Yup.string().required(),
    complemento: Yup.string().notRequired()
});