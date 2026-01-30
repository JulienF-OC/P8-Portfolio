import React from 'react'

function Navbar() {
  return (
    <>
<div className="flex items-center justify-center md:justify-between px-[15%]">

      <div className="text-2xl font-bold">
        Franz <span className="text-accent">Julien</span>
      </div>

      <div>
        <ul className=" hidden md:flex flex-dir-row gap-2">
          <li className="btn btn-ghost font-bold">
            <a href="#">Accueil </a>
            </li>
          <li className="btn btn-ghost  font-bold">
            <a href="#">À propos </a>
            </li>
            <li className="btn btn-ghost  font-bold">
            <a href="#">Mes projets </a>
            </li>
            <li className="btn btn-ghost  font-bold">
            <a href="#">Me contacter </a>
            </li>
        </ul>
      </div>

      </div>
    </>
  )
}


export default Navbar