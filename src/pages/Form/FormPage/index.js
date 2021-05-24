import {Formik, Form, Field, ErrorMessage} from 'formik';
import React from 'react';
import schema from './schema'
import { api } from '../../../services/api';
import Logo from '../../../assets/img/logo.png';
import handleSubmit from '../../../utils/cookieLocal';
import { useState } from 'react';

import {
    ContainerForm,
    Container,
    ContainerArea
} from './styles';
import Modal from './Modal';

const FormPage = () => {

    const[openModal, setModal] = useState(false);
    const displayModal = () =>{
        setModal(prevent => !prevent);
    }

    const changeCep = (event, setFieldValue) =>{
        const {value} = event.target;
        const cep = value?.replace(/[^0-9]/g, '');
        if(cep.length !== 8){
            return;
        }
        async function fetchCEP(){
            await  api.get(`/${cep}/json/`)
            .then((response) => {
                setFieldValue('bairro', response.data.bairro);
                setFieldValue('cidade', response.data.localidade);
                setFieldValue('uf', response.data.uf);
                setFieldValue('logradouro', response.data.logradouro);
            })
        }
        fetchCEP();  
    }
    return(
        <Container>
            <header>
               {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>          */}
            </header>
            <ContainerArea>
                <Formik
                    validationSchema = {schema}
                    validateOnMount
                    initialValues = {{
                        name: '',
                        date: '',
                        cpf:'',
                        cep:'',
                        bairro:'',
                        cidade:'',
                        uf: '',
                        numero:'',
                        logradouro:'',
                        complemento: '',
                    }}
                    render={({isValid, setFieldValue}) => (
                        <Form onSubmit={handleSubmit}>
                            <img src={Logo} alt="logo" />
                            <h1>Preencha seus dados</h1>
                            <ContainerForm>
                                <label>Nome</label>
                                <Field name="name" type="text" />
                                <ErrorMessage name="name"/>
                            </ContainerForm>
                            <ContainerForm>
                                <label>CPF</label>
                                <Field name="cpf" type="string" placeholder="Informe apenas os números do CPF" />
                                <ErrorMessage name="cpf"/>
                            </ContainerForm>
                            <ContainerForm>
                                <label>Data de Nascimento</label>
                                <Field name="date" type="date" />
                                <ErrorMessage name="date"/>
                            </ContainerForm>
                            <ContainerForm>
                                <label>CEP</label>
                                <Field name="cep" type="text" placeholder="Informe apenas os números do CEP" onBlur={(event) => changeCep(event, setFieldValue)} />
                                <ErrorMessage name="cep"/>
                            </ContainerForm>
                            <div className="information">
                                <ContainerForm id="city">
                                    <label>Cidade</label>
                                    <Field name="cidade" type="text" />
                                    <ErrorMessage name="cidade"/>
                                </ContainerForm>
                                <ContainerForm id="estado">
                                    <label>UF</label>
                                    <Field component="select" name="uf">
                                        <option value={null}>Selecione uma opção</option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </Field>
                                    <ErrorMessage name="uf"/>
                                </ContainerForm>
                            </div>
                            <ContainerForm>
                                <label>Logradouro</label>
                                <Field name="logradouro" type="text" />
                            </ContainerForm>
                            <ContainerForm>
                                <label>Bairro</label>
                                <Field name="bairro" type="text" />
                                <ErrorMessage name="bairro"/>
                            </ContainerForm>
                            <ContainerForm>
                                <label>Complemento</label>
                                <Field name="complemento" type="text" />
                                <ErrorMessage name="complemento"/>
                            </ContainerForm>
                            <ContainerForm>
                                <label>Número</label>
                                <Field name="numero" type="text" />
                                <ErrorMessage name="numero"/>
                            </ContainerForm>
                            <div className="sub">
                                <button type="submit" onClick={displayModal} disabled={!isValid}>Submit</button>
                                <Modal openModal={openModal} setModal={setModal}/>
                            </div>
                        </Form>
                    )}
                />
                </ContainerArea>
        </Container>
    );
}
export default FormPage;