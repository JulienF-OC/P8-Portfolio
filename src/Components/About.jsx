import img from "../assets/moi.jpg"

const aboutElements = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Création d’interfaces web performantes, responsives et centrées sur l’expérience utilisateur.",
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Développement de solutions serveur fiables, sécurisées et adaptées aux besoins des applications modernes.",
  },
  {
    id: 3,
    title: "Architecture & Bonnes pratiques",
    description: "Mise en place d’architectures solides et de bonnes pratiques de développement pour des applications performantes et durables.",
  },
]

function About() {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32">
      <div className="mb-5 text-center">
        <h1 className="uppercase font-bold text-3xl">À propos</h1>
      </div>

      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={img}
            alt="Photo de Franz Julien"
            className="w-96 object-cover rounded-xl"
          />
        </div>

        <div className="md:ml-4 space-y-4">
          {aboutElements.map((section) => (
            <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">
                  {section.title}
                </h2>
                <p className="text-sm">
                  {section.description}
                </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
