import React from 'react'

export const Navbar2 = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><a href="/">vá para: pág. 1</a></li>
            <li className='vocabulario'><a className='a-text' href='#cliche'>Clichês</a></li>
            <li className='vocabulario'><a className='a-text' href='#preconceito'>Preconceito</a></li>
            <li className='vocabulario'><a className='a-text' href='#opiniao'>Opinião Política</a></li>
            <li className='vocabulario'><a className='a-text' href='#generalizacao'>Generalização</a></li>
            <li className='vocabulario'><a className='a-text' href='#ditado'>Ditados Populares</a></li>
        </ul>
    </div>
  )
}
