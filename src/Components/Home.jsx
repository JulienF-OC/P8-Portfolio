import img from "../assets/moi.jpg"

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                Bonjour, <br/> je suis <span className="text-accent">Franz Julien</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
                Je suis un développeur fullstack, <br/>
                faire appel à moi, c'est comme donner vie à votre imagination. <br/>
                Contactez-moi si vous avez besoin de mes services. </p>
            <a href="#" className="btn btn-accent text-center md:w-fit">Contactez-moi
            </a>
        </div>
        <div className="md:ml-60">
            <img src={img} alt="Photo de Franz Julien" className="w-48 h-48
    sm:w-64 sm:h-64
    md:w-96 md:h-96
    object-cover
    border-8 border-accent shadow-xl" 
            style={{
                borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
            }}></img>

        </div>
    </div>
  )
}

export default Home