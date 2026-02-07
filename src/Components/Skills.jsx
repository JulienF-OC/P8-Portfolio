import imgHTML from "../assets/imgHTML.webp";
import imgCSS from "../assets/imgCSS.webp";
import imgJS from "../assets/imgJS.webp";
import imgNODE from "../assets/imgNode.jpg";
import imgTWD from "../assets/imgTWD.jpg";
import imgExpress from "../assets/imgExpress.jpg";
import imgMongo from "../assets/imgMongo.png";
import imgNext from "../assets/imgNext.svg";
import imgFigma from "../assets/imgFigma.avif";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "Node.js", image: imgNODE },
  { id: 5, name: "Tailwind CSS", image: imgTWD },
  { id: 6, name: "Express", image: imgExpress },
  { id: 7, name: "MongoDB", image: imgMongo },
  { id: 8, name: "Next.js", image: imgNext },
  { id: 9, name: "Figma", image: imgFigma },
];

function Skills() {
  return (
    <section id="Skills">
      <div className="p-0 mb-10 md:mb-32">
        <div className="mb-5 text-center">
          <h1 className="uppercase font-bold text-3xl mb-10">Mes compétences</h1>
        </div>

        <div>
          <div className="mt-4 md:mt-0 grid grid-cols-3 gap-3 place-items-center max-w-2xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex justify-center items-center flex-col"
              >
                <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="object-cover rounded-full h-full w-full"
                  />
                </div>
                <span className="mt-2 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
