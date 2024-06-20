import { SiMongodb } from "react-icons/si";
import Image from "next/image";
import html from '../../public/images/icons8-html-480.png'
import css from '../../public/images/icons8-css-240.png'
import bootstrap from '../../public/images/icons8-bootstrap-240.png'
import tailwind from '../../public/images/icons8-tailwindcss-480.png'
import javaScript from '../../public/images/icons8-javascript-240 (1).png'
import reactjs from '../../public/images/physics.png'
import nodejs from '../../public/images/programing.png'
import expressjs from '../../public/images/icons8-express-js-480.png'
import nextjs from '../../public/images/pngwing.com (4).png'
import firebase from '../../public/images/icons8-firebase-480.png'
import mongodb from '../../public/images/icons8-mongo-db-96.png'
import vercel from '../../public/images/up-arrow.png'
import git from '../../public/images/icons8-git-480.png'
import github from '../../public/images/icons8-github-512.png'
import vscode from '../../public/images/icons8-vs-code-480.png'
import figma from '../../public/images/icons8-figma-480.png'

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
    {
      icon: tailwind,
      name: 'Tailwind',
      des: 'CSS Framework'
    },
    {
      icon: javaScript,
      name: 'JavaScript',
      des: 'Programming Language'
    },
    {
      icon: reactjs,
      name: 'React',
      des: 'Frontend Library'
    },
    {
      icon: nodejs,
      name: 'Node Js',
      des: 'React Framework'
    },
    {
      icon: expressjs,
      name: 'Express Js',
      des: 'Node Js Framework'
    },
    {
      icon: nextjs,
      name: 'Next Js',
      des: 'React Framework'
    },
    {
      icon: firebase,
      name: 'Firebase',
      des: 'Backend As A Service'
    },
    {
      icon: mongodb,
      name: 'MongoDB',
      des: 'NoSQL Database'
    },
    {
      icon: vercel,
      name: 'Vercel',
      des: 'Frontend Cloud'
    },
    {
      icon: git,
      name: 'Git',
      des: 'Version Controller'
    },
    {
      icon: github,
      name: 'GitHub',
      des: 'Git Repositories Manage'
    },
    {
      icon: vscode,
      name: 'VS Code',
      des: 'Code Editor'
    },
    {
      icon: figma,
      name: 'Figma',
      des: 'Designing Tool'
    },
  ]
  return (
    <div className="mb-28">
      <h1 className="text-4xl font-semibold mb-12 uppercase text-center">
        <span className="text-secondary">&#47;&#47; </span> Skills <span className="text-secondary"> &#47;&#47; </span>
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-4 grid-cols-2 gap-10">
        {
          skills.map((item, idx) =>     <div key={item.idx} className="flex justify-center">
            <div class="relative overflow-hidden w-32 h-32  cursor-pointer font-bold bg-primary shadow-2xl">
              <div class="z-10 absolute w-full h-full peer"></div>
              <div class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[180%] peer-hover:h-[140%] -top-32 -left-16 w-24 h-44 rounded-full bg-secondary transition-all duration-500"></div>
              <div class="absolute flex text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-24 h-44 rounded-full bg-secondary transition-all duration-500">
                <div className="text-black/70">
                <p className="text-xl">{item.name}</p>
                <p className="text-sm ">{item.des}</p>
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
