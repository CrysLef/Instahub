import styled from 'styled-components'


export const Main = styled.main`
    max-width: 935px;
    height: 100%;
    margin: 0 auto;
`

export const Container = styled.section`
    display: flex;
    margin-top: 30px;

    .profile-picture {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 0 60px 44px 40px;
    }
`

export const ChangeProfile = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    h2 {
        font-size: 28px;
        font-weight: 300;
        margin: 0;
    }

    .btn-changeProfile {
        background-color: #FAFAFA;
        color: #262626;
        font-weight: 600;
        border: 1px solid rgb(210, 219, 227);
        border-radius: 3px;
        padding: 7px 10px;
        cursor: pointer;
        margin: 0 13px 0 20px;
    }

    .config-btn {
        background-color: transparent;
        border: none;
        width: 24px;
        height: 24px;
        cursor: pointer;
        display: flex;
        justify-content: center;

        img {
            width: 24px;
            height: 24px;
        }
        
    }
`

export const InfoAccount = styled.div`
    display: flex;
    margin-bottom: 8px;

    div {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-left: 40px;

        &:first-child {
            margin-left: 0;
        }

        h3 {
            font-weight: 500;
            font-size: 16px;
        }
    }
`

export const DescriptionBox = styled.div`
    margin-bottom: 44px;


    h2 {
        font-size: 16px;
        font-weight: 500;
        margin: 0 0 3px 0;
    }

    p {
        margin: 0;
    }
`

export const HighlightsBox = styled.section`
    display: flex;
    gap: 50px;
    align-items: center;
    padding: 10px 45px;
    margin-bottom: 44px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        img {
            width: 85px;
            height: 85px;
            border-radius: 50%;
            border: 3px solid #FFF;
            box-shadow: 0 0 0 1px rgb(210, 219, 227);
    
        }
    
        h3 {
            font-size: 14px;
            font-weight: 500;
            margin: 0;
        }
    }

` 

export const GalleryBox = styled.section`
    display: flex;
    max-width: 935px;   
    height: 100%;
    flex-wrap: wrap;
    gap: 28px;
    margin-bottom: 25px;

    img {
        width: 293px;
        height: 293px;
    }
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-bottom: 17px;
    border-top: 1px solid rgb(210, 219, 227);

    button {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        gap: 6px;
        padding-top: 17px;
        border-top: 1px solid rgb(210, 219, 227);
        cursor: pointer;

        img {
            width: 14px;
            height: 14px;

        }

        &:focus {
            border-top: 1px solid #262626;
        }
    }
`