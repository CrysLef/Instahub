import { Footer } from '../../components/Footer'
import * as S from './styles'
import { WhiteBox } from '../../components/WhiteBox'
import { Button } from '../../components/Button'
import { useState } from 'react'

export default function Login() {
    const [ user, setUser ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ inputType, setInputType ] = useState(true)


    return (
        <S.Container>

            <S.Main>
                <aside>
                    <img src="/phoneHome.png" alt="" />
                </aside>
                <S.Content>
                    <WhiteBox className="form-box">
                        <h1>Instahub</h1>
                        <form>
                            <label>Insira o telefone,nome de usuário ou e-mail</label>
                            <S.Input type="text" onChange={e => setUser(e.target.value)} value={user} placeholder="Telefone,nome de usuário ou e-mail" />
                            <label>Insira sua senha</label>
                            <S.Input type={inputType ? "password" : "text"} onChange={e => setPassword(e.target.value)} value={password} placeholder="Senha" />
                            <Button type="submit" disabled={(user.length < 6) && (password.length < 6) ? true : false}>Entrar</Button>
                        </form>
                        {password.length > 0 && <S.ShowPasswordButton onClick={() => setInputType(!inputType)}>{inputType ? "Mostrar" : "Ocultar"}</S.ShowPasswordButton>}
                        <S.Separator>ou</S.Separator>
                        <div>
                            <S.authLink href="">
                                <img src="/logoGithub.svg" alt="" />
                                Entrar com o Github
                            </S.authLink>
                        </div>
                        <a className="password-link" href="">Esqueceu a senha?</a>
                    </WhiteBox>
                    <WhiteBox className="signup-box">
                        <p>Não tem uma conta?</p>
                        <span>
                            <a href="">Cadastre-se</a>
                        </span>
                    </WhiteBox>
                    <a className="get-app" href="">Obtenha o aplicativo.</a>
                    <div className="applink-box">
                        <a href="">
                            <img src="/appStoreButton.png" alt="" />
                        </a>
                        <a href="">
                            <img src="/googlePlayButton.png" alt="" />
                        </a>
                    </div>
                </S.Content>
            </S.Main>

            <Footer />
        </S.Container>
    )
}