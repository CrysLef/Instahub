import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: 100%;

    .main-content {
        display: flex;
        max-width: 975px;
        margin: 0 auto;
        
        .timeline {
            flex-direction: column;
        }
    }
`

export const StoriesBox = styled.section`
    background-color: #FFF;
    border: 1px solid rgb(210, 219, 227);
    padding: 23px;
    margin: 30px 0 25px 0;
    display: flex;
    gap: 24px;
    max-width: 614px;
    overflow: hidden;

    div {
        text-align: center;

        img {
            border-radius: 50%;
            width: 62px;
            height: 62px;
            border: 2px solid #FFF;
            box-shadow: 0 0 0 2px rgb(255,0,113);
        }
    
        h2 {
            font-size: 12px;
            font-weight: normal;
            margin: 0;
        }

    }

`
export const PostBox = styled.div`
    max-width: 614px;

    img {
        max-width: 614px;
    }

    & + & {
        margin-top: 30px;
    }
`

export const PostOwner = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgb(210, 219, 227);
    background-color: #FFF;
    justify-content: space-between;
    padding: 14px 16px;

    div {
        display: flex;
        align-items: center;
        gap: 12px;

        h2 {
            font-size: 14px;
            font-weight: 500;
        }

        img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-weight: bold;
        font-size: 18px;
    }
`

export const InteractionBox = styled.div`
    background-color: #FFF;
    border: 1px solid rgb(210, 219, 227);
    padding: 7px 16px;

    .hour {
        font-size: 10px;
        color: #8e8e8e;
        padding-bottom: 8px;
    }

    .likes {
        font-weight: 500;
        font-size: 14px;
        margin-top: 16px;
        margin-bottom: 0;
    }
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 28px;
        height: 28px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
            &:nth-child(2) {
                width: 26px;
                height: 26px;
                transform: scaleX(-1);
            }
        }

        .bookmark {
            width: 34px;
            height: 34px;
        }
    }
`

export const PostSubtitle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    h2 {
        font-size: 14px;
        font-weight: 500;
        margin: 0;
    }

    p {
        font-size: 14px;
        margin: 0;
    }
`

export const Comments = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: 8px;

        h2 {
            font-size: 14px;
            font-weight: 500;
            margin: 0;
        }

        p {
            font-size: 14px;
            margin: 0;
        }
    }

    img {
        width: 12px;
        height: 12px;
    }
`

export const PostAComment = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(210, 219, 227);
    padding: 15px 0;

    input {
        width: 100%;
        border: none;

        &::placeholder {
            font-size: 14px;
            color: #8e8e8e;
        }

        &:focus {
            outline: none;
        }
    }

    img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }

    button {
        border: none;
        background-color: transparent;
        color: #0095f6;
        font-size: 14px;
        cursor: pointer;

        &:disabled {
            color: rgba(0, 149, 246, 0.3);
        }
    }
`

export const Aside = styled.aside`
    width: 100%;
    margin-left: 20px;
    margin-top: 38px;

    footer {
        color: #c7c7c7;
        font-size: 11px;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        ul {
            display: flex;
            gap: 5px;
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                display: flex;
                align-items: center;
                gap: 5px;

                &::after {
                    content: '';
                    width: 2px;
                    height: 2px;
                    border-radius: 50%;
                    background-color: #c7c7c7;
                }
            }
        }
    }
`

export const ChangeYou = styled.div`
    display: flex;
    align-items: center;
    padding: 18px 0;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        img {
            width: 62px;
            height: 62px;
            border-radius: 50%;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 10px;
            

            h2 {
                font-size: 14px;
                font-weight: 500;
                margin: 0;
            }
    
            h3 {
                margin: 0;
                font-size: 14px;
                color: #8e8e8e;
                font-weight: 400;
            }
        }
    }

    button {
        border: none;
        background-color: transparent;
        color: #0095f6;
        font-size: 14px;
        cursor: pointer;
    }
`

export const Suggestion = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    h3 {
        font-size: 14px;
        font-weight: 500;
        color: #8e8e8e;
        margin: 0;
    }

    button {
        border: none;
        background-color: transparent;
        color: #262626;
        font-weight: 700;
        font-size: 12px;
    }
`

export const SuggestedPerson = styled.div`

    display: flex;
    align-items: center;
    padding: 8px 5px;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 10px;
            

            h2 {
                font-size: 14px;
                font-weight: 500;
                margin: 0;
            }
    
            h3 {
                margin: 0;
                font-size: 12px;
                color: #8e8e8e;
                font-weight: 400;
            }
        }
    }
    

    button {
        border: none;
        background-color: transparent;
        color: #0095f6;
        font-size: 14px;
        cursor: pointer;
    }
`