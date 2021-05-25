import React from 'react';
import { MdClose } from 'react-icons/md';
import {Link} from 'react-router-dom';

import {
    Container,
    ModalContainer,
    ModalBackground
} from './styles';

const Modal = ({openModal, setModal}) => {
    return(
        <>
            {openModal ? 
                <Container>
                    <ModalContainer>
                        <div className="modal-imagem"/>
                        <ModalBackground>
                            <div className="modal-texto">
                                <h1>Registro realizado com sucesso</h1>
                            </div>
                        </ModalBackground>
                        <Link to="/"><button id="botao-close" onClick={() => setModal(prevent => !prevent)}>
                            <MdClose
                            size={30}
                            color="fff" 
                            />
                        </button>
                    </Link>
                    </ModalContainer>
                </Container>
            : null}
        </>
    );
}

export default Modal;