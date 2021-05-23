import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2).required(),
    cep: Yup.string().length(8).required(),
    date: Yup.string().required(),
    uf: Yup.string().required(),
    bairro: Yup.string().required(),
    cpf: Yup.string().length(11).required(),
    rua: Yup.string().min(2).required(),
    cidade: Yup.string().min(2).required(),
    numero: Yup.string().required(),
});