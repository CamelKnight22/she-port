import { Suspense } from "react";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, PresentationControls } from "@react-three/drei";
import { Model } from "./assets/Model";
import { useModelPositions } from "./memoScripts/modelPositions";
import { useModelRotations } from "./memoScripts/modelRotations";
import { useModelScales } from "./memoScripts/modelScales";
import project1 from "/project 1.jpg";
import project2 from "/project 2.jpg";
import project3 from "/project 3.jpg";
import project4 from "/project 4.jpg";
import project5 from "/project 5.jpg";
import project6 from "/project 6.jpg";
import { Object1 } from "./assets/Object";

function App() {
  const { memoPosition1, memoPosition2, memoPosition3 } = useModelPositions();
  const { memoRotation1, memoRotation2, memoRotation3 } = useModelRotations();
  const { memoScale1, memoScale2, memoScale3 } = useModelScales();


  return ( 
<div>
  <div className=" bg-teal-50 px-10  md:px-20 lg:px-40">
<section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="font-extrabold text-xl">Shelia's Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10 flex flex-col gap-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">
              Welcome to Shelia's Portfolio!
            </h2>
            <h3 className="text-2xl py-2  md:text-3xl">
              Passionate Front-End Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800  max-w-xl mx-auto md:text-xl">
            Blending code with creativity, welcome to the digital playground of a full-stack developer and dynamic content creator. 
            Dive in to explore a fusion of technological prowess and imaginative storytelling.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-teal-950 ">
              <AiFillLinkedin />
              <AiFillYoutube />
              <AiFillInstagram/>
              <AiFillFacebook/>
              
              
            </div>
            </div>
            <div className="basis-1/3 flex-1 ">
            <div className="mx-auto w-85 h-85  mt-5 md:h-96 md:w-96">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 3.3, 0] }}>
    <Suspense fallback={null}>
    <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
    <ambientLight intensity={0.7} />
    <Environment preset="city" />
    
      <Model scale={memoScale1} position={memoPosition1} rotation={memoRotation1} animation={"Action1"} />
      </PresentationControls>
      <ContactShadows position={[0,-4.1,0]} opacity={1} blur={2.5}/>

      </Suspense>
    </Canvas>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
            Click and drag My model to interact!
            </p>
            </div>
          </div>
        </section>
        <section className=" min-h-screen ">
          <div className="text-center p-10 py-2 flex flex-col gap-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 py-44">
            <div className="mx-auto w-85 h-85  mt-5 md:h-96 md:w-96">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 3.3, 0] }}>
    <Suspense fallback={null}>
    <PresentationControls
           config={{ mass: 2, tension: 200 }}
           snap
           global
           polar={[0, 0]} azimuth={[-Math.PI / 2, Math.PI / 2]}>
    <ambientLight intensity={0.7} />
    <Environment preset="city" />
    
      <Model scale={memoScale2} position={memoPosition2} rotation={memoRotation2} animation={"Action2"} />
      </PresentationControls>
      <ContactShadows position={[0,-4.1,0]} opacity={1} blur={2.5}/>

      </Suspense>
    </Canvas>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
            Click and drag My model to interact!
            </p>
            </div>
          <div className="basis-1/3 flex-1 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-4xl">
            Stack:
            </h2>
            <div className="shadow-2xl p-10 rounded-xl my-10">
            <h3 className="text-2xl py-2 text-teal-600 md:text-3xl">
            Frontend Web & App:
            </h3>
            <p className="text-gray-800 py-1">React, ReactNative</p>
            </div>
            <div className="shadow-2xl p-10 rounded-xl my-10">
            <h3 className="text-2xl py-2 text-teal-600 md:text-3xl">
            Backend:
            </h3>
            <p className="text-gray-800 py-1">Node.js, Express.js</p>
            </div>
            <div className="shadow-2xl p-10 rounded-xl my-10">
            <h3 className="text-2xl py-2 text-teal-600 md:text-3xl">
            Database:
            </h3>
            <p className="text-gray-800 py-1">MongoDB, PostgreSQL, MySQL</p>
            </div>
            </div>

          </div>
        </section>
        <section className=" min-h-screen ">
          <div className="text-center p-10 py-1 flex flex-col gap-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 py-20">
            <h3 className="text-2xl py-2  md:text-3xl">
              FullStack Dev & Content Creator.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800  max-w-xl mx-auto md:text-xl">
            Blending code with creativity, welcome to the digital playground of a full-stack developer and dynamic content creator. 
            Dive in to explore a fusion of technological prowess and imaginative storytelling.
            </p>
            </div>
            <div className="basis-1/3 flex-1 ">
            <div className="mx-auto w-85 h-85  mt-5 md:h-96 md:w-96">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [-3, 0.15, 0] }}>
    <Suspense fallback={null}>
    <PresentationControls
           config={{ mass: 80, tension: 1000 }}
           snap
           global
           >
    <ambientLight intensity={0.7} />
    <Environment preset="city" />
    <Object1 scale={0.1} position={[0, -0.2, 0]} />
      </PresentationControls>
      <Model scale={memoScale3} position={memoPosition3} rotation={memoRotation3} animation={"Action3"} />
      </Suspense>
    </Canvas>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
            Click and drag the object to interact!
            </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-center text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-center p-10 py-10 text-md leading-8 text-gray-800 dark:text-gray-200">
            Every project I undertake is a step in my ongoing journey of exploration and growth. Thank you for joining me on this adventure.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
               
                src={project1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
              
                src={project2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
            
                src={project4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
               
                src={project6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
             
                src={project3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
            
                src={project5}
              />
            </div>
          </div>
        </section>
        </div>
        </div>);
        }
export default App;
