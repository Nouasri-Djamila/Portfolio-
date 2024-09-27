import "./serviser.scss"
import {motion , useInView} from "framer-motion"
import people from "../../assets/people.webp"
import React, { useRef } from "react"

  const variants={
    initial:{
      x:-500,
      y:100,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration:1,
        staggerdChildren:0.1
      }
    }
  }

const Services = () => {
  const ref = useRef()

  const isInView= useInView(ref,{ margin:"-100px"})
  return (
    <motion.div className="services" 
    variants={variants}  
    initial={"initial"} 
    animate={isInView && "animate"}
    ref={ref}>
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your brand grow <br /> and move forward</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={people} alt="" />
          <p>
        <motion.b  whileHover={{color:"orange"}}>Unique</motion.b> Ideas
      </p>
        </div>
        <div className="title">
          <p><motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.</p>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
          <h1>branding</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Autem amet, sapiente, dolore nemo ipsum maiores quae hic maxime 
            
          </p>
          <button>See</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
          <h1>branding</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Autem amet, sapiente, dolore nemo ipsum maiores quae hic maxime 
             
          </p>
          <button>See</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
          <h1>branding</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Autem amet, sapiente, dolore nemo ipsum maiores quae hic maxime 
            
            
          </p>
          <button>See</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
          <h1>branding</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Autem amet, sapiente, dolore nemo ipsum maiores quae hic maxime 
            
           
          </p>
          <button>See</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services