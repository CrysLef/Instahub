import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import * as S from './styles'

export function Profile() {
    return (
        <>
            <Header />
            <S.Main>
                <S.Container>
                    <img className="profile-picture" src={`https://github.com/CrysLef.png`} alt="" />
                    <div>
                        <S.ChangeProfile>
                            <h2>ichbincrys</h2>
                            <button className="btn-changeProfile">Editar perfil</button>
                            <button className="config-btn"><img src="/icon_cog.svg" alt="" /></button>
                        </S.ChangeProfile>
                        <S.InfoAccount>
                            <div>
                                <h3>17</h3>
                                <span>publicações</span>
                            </div>
                            <div>
                                <h3>100</h3>
                                <span>seguidores</span>
                            </div>
                            <div>
                                <h3>107</h3>
                                <span>seguindo</span>
                            </div>
                        </S.InfoAccount>
                        <S.DescriptionBox>
                            <h2>C R Y S T I A N</h2>
                            <p>
                                Ciência da computação 👨‍🔬👨‍💻 (1/10)<br />
                                Eletrotécnica⚡<br />
                                Quanto mais escura a noite,mais a estrela brilha
                            </p>
                        </S.DescriptionBox>
                    </div>
                </S.Container>
                <S.HighlightsBox>
                    <div>
                        <img src="/highlight.jfif" alt="" />
                        <h3>RiR 2019</h3>
                    </div>
                    <div>
                        <img src="/highlight.jfif" alt="" />
                        <h3>RiR 2017</h3>
                    </div><div>
                        <img src="/highlight.jfif" alt="" />
                        <h3>RiR 2015</h3>
                    </div>
                    <div>
                        <img src="/highlight.jfif" alt="" />
                        <h3>RiR 2013</h3>
                    </div><div>
                        <img src="/highlight.jfif" alt="" />
                        <h3>RiR 2011</h3>
                    </div>
                    <div>
                        <img src="/highlight.jfif" alt="" />
                        <h3>RiR 2009</h3>
                    </div>
                </S.HighlightsBox>
                <div>
                    <S.ButtonBox>
                        <button>
                            <img src="icon_grid.svg" alt="" />
                            PUBLICAÇÕES
                        </button>
                        <button>
                            <img className="saved-icon" src="/icon_bookmark.svg" alt="" />
                            SALVOS
                        </button>
                        <button>
                            <img src="icon_tagged.svg" alt="" />
                            MARCADOS
                        </button>
                    </S.ButtonBox>
                    <S.GalleryBox>
                        <img src={`https://github.com/diego3g.png`} alt="" />
                        <img src={`https://github.com/filipedeschamps.png`} alt="" />
                        <img src={`https://github.com/peas.png`} alt="" />
                        <img src={`https://github.com/rafaballerini.png`} alt="" />
                        <img src={`https://github.com/marcobrunodev.png`} alt="" />
                        <img src={`https://github.com/CrysLef.png`} alt="" />
                        <img src={`https://github.com/CrysLef.png`} alt="" />
                        <img src={`https://github.com/CrysLef.png`} alt="" />
                        <img src={`https://github.com/CrysLef.png`} alt="" />
                    </S.GalleryBox>
                </div>
                <Footer />
            </S.Main>
        </>
    )
}