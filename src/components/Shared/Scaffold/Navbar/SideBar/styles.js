import styled from 'styled-components';
import {MdClose} from 'react-icons/md';

export const Container = styled.div`
    position:fixed;
    display:flex;
    align-items:0;
    width:100%;
    height:100%;
    background-color: var(--color-titles);
    z-index:998;
    top:0;
    left:0;
    transition: 0.3s;
    top: ${({menuOpen}) => {menuOpen ? '0' : '-100%'}};
    opacity: ${({menuOpen}) => {menuOpen ? '100%' : '0'}};
`;
export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    background: transparent;
    outline: none;
`

export const CloseMenuIcon = styled(MdClose)`
    color: var(--color-white);
`
