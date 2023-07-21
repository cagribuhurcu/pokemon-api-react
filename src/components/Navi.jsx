import React from 'react'
import logo from '../img/Poké_Ball_icon.svg.png'
import '../style/navi.scss'

const Navi = () => {
  return (
    <nav>
        <figure>
            <img src={logo} alt="pokeball" />
        </figure>
        <ul>
            <li>Anasayfa</li>
            <li>Hakkında</li>
            <li>İletişim</li>
        </ul>
    </nav>
  )
}

export default Navi