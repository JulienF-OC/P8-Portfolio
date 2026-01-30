import React from 'react'
import img from '../assets/f-removebg.png'

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-left md:justify-between px-[15%]">

        <div className="flex items-center">
          <img src={img} alt="Logo de Franz Julien" className="w-20 h-20" />
          <div className="text-2xl font-bold">
            Franz <span className="text-accent">Julien</span>
          </div>
        </div>

        <ul className="hidden md:flex flex-row gap-2">
          <li className="btn btn-ghost font-bold"><a href="#">Accueil</a></li>
          <li className="btn btn-ghost font-bold"><a href="#">À propos</a></li>
          <li className="btn btn-ghost font-bold"><a href="#">Mes projets</a></li>
          <li className="btn btn-ghost font-bold"><a href="#">Me contacter</a></li>
        </ul>

      </div>
    </>
  )
}

export default Navbar
