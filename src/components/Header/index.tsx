import { useState } from 'react'
import * as S from './styles'

export function Header() {
    const [ buttonSearch, setButtonSearch ] = useState(true)
    const [search, setSearch ] = useState('')

    return(
        <S.Header>
                <section>
                    <h1>Instahub</h1>
                    <div>
                        { buttonSearch ? 
                        <button onClick={() => setButtonSearch(false)}>
                            <img src="/icon_search.svg" alt="" />
                            Pesquisar
                        </button> 
                        : 
                        <div className="input-search">
                            <input type="search" placeholder="Pesquisar" onChange={e => setSearch(e.target.value)} value={search} /> 
                            <button className="btn-search" onClick={() => setButtonSearch(true)}>x</button>
                        </div>
                        }
                    </div>
                    <div className="icons">
                        <img src="/icon_home.svg" alt="" />
                        <img src="/icon_direct.svg" alt="" />
                        <img src="/icon_compass.svg" alt="" />
                        <img src="/icon_heart.svg" alt="" />
                        <img src={`https://github.com/CrysLef.png`} alt="" />
                    </div>
                </section>
            </S.Header>
    )
}