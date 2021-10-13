import styled from 'styled-components'

export const Ul = styled.ul`

    display: flex;
    gap: 16px;
    justify-content: center;
    font-size: 12px;
    margin: 10px 0;
    color: #8e8e8e;
    list-style: none;

    &:last-child {
        margin-top: 20px;
    }

    & select {
        background-color: transparent;
        border: none;
        color: #8e8e8e;
        
    }
`