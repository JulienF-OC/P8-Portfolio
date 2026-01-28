import React from 'react'

function Navbar() {
  return (
    <>
<div className="flex items-center justify-center md:justify-between p-4">

      <div className="text-2xl font-bold">
        Franz <span className="text-accent">Julien</span>
      </div>

      <div>
        <ul className="flex flex-dir-row gap-10">
          <li className="btn btn-ghost">
            <a href="#">Accueil </a>
            </li>
          <li className="btn btn-ghost">
            <a href="#">Accueil </a>
            </li>
            <li className="btn btn-ghost">
            <a href="#">Accueil </a>
            </li>
            <li className="btn btn-ghost">
            <a href="#">Accueil </a>
            </li>
        </ul>
      </div>

      </div>
    </>
  )
}


export default Navbar