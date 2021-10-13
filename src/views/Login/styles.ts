import styled from 'styled-components'


export const Container = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

`

export const Main = styled.main`
    display: flex;
    align-items: center;
    margin-bottom: 100px;

`

export const Content = styled.div`
    text-align: center;
    margin-left: 25px;
    width: 18vw;

    .form-box {
        margin-bottom: 10px;
        
        h1 {
            font-family: 'Grand Hotel', sans-serif;
            font-size: 60px;
            margin: 0 0 20px 0;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;

            button {
                margin-top: 10px;
            }

            label {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
            }
        }

        .password-link {
            font-size: 12px;
        }
    }

    .signup-box {
        font-size: 14px;
        margin-bottom: 20px;

        p {
            display: inline;
            padding: 8px;
        }

        span > a {
            color: #0095f6;
            font-weight: 500;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }

    .get-app {
        font-size: 14px;
    }

    .applink-box {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 8px;
        width: 100%;
        height: 44px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const Input = styled.input`
    width: 100%;
    background-color: #FAFAFA;
    border-radius: 2px;
    border: 1px solid rgb(210, 219, 227);
    padding: 8px 8px;
    font-size: 14px;

    &:focus {
        outline: none;
        border: 1px solid rgb(180, 185, 200);
    }

    &::placeholder {
        font-size: 12px;
    }
`

export const ShowPasswordButton = styled.button`
    font-size: 14px;
    color: #474747;
    border: none;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 278px;
    right: 620px;
`

export const Separator = styled.div`
    font-size: 17px;
    color: #8e8e8e;
    font-weight: 500;

    margin: 18px 0 20px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: #dbdbdb;
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #dbdbdb;
      margin-left: 16px;
    }
`

export const authLink = styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-bottom: 18px;
        color: #262626;
        font-size: 14px;
        font-weight: 500;
        transition: filter .3s;

        &:hover {
            filter: brightness(2);
        }

        img {
            margin: 0 2px;
            display: inline;
            width: 16px;
            height: 16px;
        }
`