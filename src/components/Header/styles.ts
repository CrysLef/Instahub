import styled from 'styled-components'

export const Header = styled.header`
    border-bottom: 1px solid rgb(210, 219, 227);
    background-color: #FFF;

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 975px;
        height: 54px;
        margin: 0 auto;
        
        h1 {
            font-family: 'Grand Hotel', sans-serif;
            font-size: 32px;
            font-weight: 500;
        }

        
        
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: #8e8e8e;
            line-height: 0;
            width: 215px;
            height: 30px;
            border: 1px solid rgb(210, 219, 227);
            background-color: #FAFAFA;
            border-radius: 4px;
            cursor: text;

            img {
                width: 10px;
                height: 100%;
            }

        }

        .input-search {
            display: flex;
            align-items: center;
            width: 215px;
            height: 30px;
            border: 1px solid rgb(210, 219, 227);
            background-color: #FAFAFA;
            border-radius: 4px;
            padding-right: 5px;
            
            input {
                height: 100%;
                width: 100%;
                padding: 0 10px;
                border: 0;
                background-color: transparent;
                
                &[type="search"]::-webkit-search-decoration,
                &[type="search"]::-webkit-search-cancel-button,
                &[type="search"]::-webkit-search-results-button,
                &[type="search"]::-webkit-search-results-decoration {
                    display: none;
                }
                
                &:focus {
                    outline: none;
                }
                
                &::placeholder {
                    color: #8e8e8e;
                }
            }
    
            .btn-search {
                background-color: rgb(165, 169, 173);
                border: 0 solid transparent;
                border-radius: 50%;
                width: 12px;
                height: 12px;
                color: #FAFAFA;
                font-size: 10px;
                cursor: default;
            }
        }


        .icons {
            display: flex;
            gap: 22px;

            img {
                width: 26px;
                height: 26px;
                
                &:last-child {
                    border-radius: 50%;
                }
            }

        }
    }

`