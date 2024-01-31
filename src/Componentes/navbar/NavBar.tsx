import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
             <Link to='/Home' className='font-bold cursor-pointer hover:text-[#67d2d2] animate-pulse'>Home</Link>
              <Link to='/postagens' className='font-bold cursor-pointer hover:text-[#67d2d2] animate-pulse'>Postagens</Link>
              <Link to='/temas' className='font-bold cursor-pointer hover:text-[#67d2d2] animate-pulse'>Temas</Link>
              <Link to='/cadastroTema' className='font-bold cursor-pointer hover:text-[#67d2d2] animate-pulse'>Cadastrar tema</Link>
              <Link to='/perfil' className='font-bold cursor-pointer hover:text-[#67d2d2] animate-pulse'>Perfil</Link>
              <Link to='' onClick={logout} className='font-bold cursor-pointer hover:text-[#67d2d2] animate-pulse'>Sair</Link>
            </div>
            </div>
          </div>
        
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar