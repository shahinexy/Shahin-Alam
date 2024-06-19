import { SiMongodb } from "react-icons/si";
import Image from "next/image";
import html from '../../public/images/icons8-html-5-48.png'
import css from '../../public/images/icons8-css-48.png'
import bootstrap from '../../public/images/icons8-bootstrap-48.png'

const SkillSection = () => {
  const skills = [
    {
      icon: html,
      name: 'HTML',
      des: 'Markup language'
    },
    {
      icon: css,
      name: 'CSS',
      des: 'Cascading Style Sheet'
    },
    {
      icon: bootstrap,
      name: 'Bootstrap',
      des: 'CSS Framework'
    },
  ]
  return (
    <div className="pb-12">
      <h1 className="text-4xl font-semibold mb-12 uppercase text-center">
        <span className="text-secondary">/</span> Skills <span className="text-secondary">/</span>
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 grid-cols-2 gap-10">
        {
          skills.map((item, idx) =>     <div key={item.idx} className="flex justify-center">
            <div class="relative overflow-hidden w-32 h-32  cursor-pointer font-bold bg-primary shadow-2xl">
              <div class="z-10 absolute w-full h-full peer"></div>
              <div class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[180%] peer-hover:h-[140%] -top-32 -left-16 w-24 h-44 rounded-full bg-secondary transition-all duration-500"></div>
              <div class="absolute flex text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-24 h-44 rounded-full bg-secondary transition-all duration-500">
                <div className="text-black/70">
                <p>{item.name}</p>
                <p className="text-sm">{item.des}</p>
                </div>
              </div>
              <div class="w-full h-full items-center justify-center flex uppercase">
              <Image
              className="rounded-full border p-1 border-secondary"
              src={item.icon}
              alt="Logo"
              width={70}
              height={70}
            />
              </div>
            </div>
            </div>)
        }

      </div>
    </div>
  );
};

export default SkillSection;
