import styled from 'styled-components'

export const Button = styled.button`
    background-color: #0095f6;
    color: #FFF;
    font-weight: 500;
    border: none;
    font-size: 14px;
    padding: 8px 0;
    width: 100%;
    border-radius: 5px;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.95);
    }

    &:disabled {
        background-color: rgba(0, 149, 246, 0.3);
    }
`