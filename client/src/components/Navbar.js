import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><a href="/2">vá para: pág. 2</a></li>
            <li className='vocabulario'><a className='a-text' href='#giria'>Gírias</a></li>
            <li className='vocabulario'><a className='a-text' href='#palavrao'>Palavrão</a></li>
            <li className='vocabulario'><a className='a-text' href='#nome'>Nomes Próprios</a></li>
            <li className='vocabulario'><a className='a-text' href='#sigla'>Siglas</a></li>
            <li className='vocabulario'><a className='a-text' href='#comum'>Palavras Comuns</a></li>
        </ul>
    </div>
  )
}
