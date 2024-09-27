import React from 'react'
import {Link} from "react-scroll"
import {motion} from "framer-motion"

const variants= {
  open:{
    transition:{
      staggerChildren:0.1,
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1
    },
  },
}
const itemvariants= {
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
}
}
const Links = () => {
  const items = ["Home" , "Services" , "Protfolio" , "Contact" ];
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item)=>(
        <motion.div key={item} variants={itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
        <Link to={item} className='Link'>{item}</Link>
      </motion.div>
      ))}
    </motion.div>
  )
}

export default Links