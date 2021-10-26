import { useState } from 'react'
import { Header } from '../../components/Header'
import * as S from './styles'

export function Homepage() {
    const [ comment, setComment ] = useState('')

    return(
        <S.Main>
            <Header />
            <section className="main-content">

                <section className="timeline">
                        <S.StoriesBox>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div> 
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <h2>ichbincrys</h2>
                            </div>
                        </S.StoriesBox>

                        <S.PostBox className="box-post">
                            <S.PostOwner>
                                <div>
                                    <img src={`https://github.com/CrysLef.png`} alt="" />
                                    <h2>ichbincrys</h2>
                                </div>
                                <button>...</button>
                            </S.PostOwner>
                            <img src="/postTeste.png" alt="" />
                            <S.InteractionBox className="box-comments">
                                <S.Icons>
                                    <div>
                                        <img src="/icon_heart.svg" alt="" />
                                        <img src="/icon_comment.svg" alt="" />
                                        <img src="/icon_direct.svg" alt="" />
                                    </div>
                                    <img className="bookmark" src="/icon_bookmark.svg" alt="" />
                                </S.Icons>
                                <p className="likes">7.342 curtidas</p>
                                <S.PostSubtitle>
                                    <h2>ichbincrys</h2>
                                    <p>a legenda é com vocês...</p>
                                </S.PostSubtitle>
                                <S.Comments>
                                    <div>
                                        <h2>casimito</h2>
                                        <p>Ih, meteu essa?</p>
                                    </div>
                                    <img src="/icon_heart.svg" alt="" />
                                </S.Comments>
                                <p className="hour">HÁ 1 HORA</p>
                                <S.PostAComment>
                                    <img src="/icon_happy.svg" alt="" />
                                    <input 
                                        type="text" 
                                        onChange={e => setComment(e.target.value)} 
                                        value={comment} 
                                        placeholder="Adicionar um comentário..." />
                                    <button disabled={ comment.length === 0 ? true : false }>Publicar</button>
                                </S.PostAComment>
                            </S.InteractionBox>
                        </S.PostBox>
                        
               
                </section>
                <S.Aside>
                        <S.ChangeYou>
                            <div>
                                <img src={`https://github.com/CrysLef.png`} alt="" />
                                <div>
                                    <h2>ichbincrys</h2>
                                    <h3>C R Y S T I A N</h3>
                                </div>
                            </div>
                            <button>Mudar</button>
                        </S.ChangeYou>
                        <div>
                            <S.Suggestion>
                                <h3>Sugestões para você</h3>
                                <button>Ver tudo</button>
                            </S.Suggestion>
                            <div>
                                <S.SuggestedPerson>
                                    <div>
                                        <img src={`https://github.com/CrysLef.png`} alt="" />
                                        <div>
                                            <h2>ichbincrys</h2>
                                            <h3>Novo no Instahub</h3>
                                        </div>
                                    </div>
                                    <button>Seguir</button>
                                </S.SuggestedPerson>
                                <S.SuggestedPerson>
                                    <div>
                                        <img src={`https://github.com/CrysLef.png`} alt="" />
                                        <div>
                                            <h2>ichbincrys</h2>
                                            <h3>Novo no Instahub</h3>
                                        </div>
                                    </div>
                                    <button>Seguir</button>
                                </S.SuggestedPerson>
                                <S.SuggestedPerson>
                                    <div>
                                        <img src={`https://github.com/CrysLef.png`} alt="" />
                                        <div>
                                            <h2>ichbincrys</h2>
                                            <h3>Novo no Instahub</h3>
                                        </div>
                                    </div>
                                    <button>Seguir</button>
                                </S.SuggestedPerson>
                                <S.SuggestedPerson>
                                    <div>
                                        <img src={`https://github.com/CrysLef.png`} alt="" />
                                        <div>
                                            <h2>ichbincrys</h2>
                                            <h3>Novo no Instahub</h3>
                                        </div>
                                    </div>
                                    <button>Seguir</button>
                                </S.SuggestedPerson>
                                <S.SuggestedPerson>
                                    <div>
                                        <img src={`https://github.com/CrysLef.png`} alt="" />
                                        <div>
                                            <h2>ichbincrys</h2>
                                            <h3>Novo no Instahub</h3>
                                        </div>
                                    </div>
                                    <button>Seguir</button>
                                </S.SuggestedPerson>
                                
                            </div>
                        </div>
                        <footer>
                            <ul>
                                <li>Sobre</li>
                                <li>Ajuda</li>
                                <li>Imprensa</li>
                                <li>API</li>
                                <li>Carreiras</li>
                                <li>Privacidade</li>
                            </ul>
                            <ul>
                                <li>Termos</li>
                                <li>Localizações</li>
                                <li>Principais contas</li>
                                <li>Hashtags</li>
                                <li>Idioma</li>
                            </ul>
                            <p>© 2021 INSTAHUB DO CRYSTIAN</p>
                        </footer>
                    </S.Aside>
            </section>

        </S.Main>
    )
}