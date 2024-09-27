import React from 'react'
import { motion } from "framer-motion"
const Togglebuton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width="23px" height="23px" viewBox='0 0 23 23'>
        <motion.path
          stroke="#000000"
          stroke-width="3"
          stroke-linecap="round"
          variants={{ 
            closed: { d: "M 2 2.5 L 20 2.5" },
            open:{d: "M 3 16.5 L 17 2.5"},
          }} />
        <motion.path 
        stroke="#000000" 
        stroke-width="3" 
        stroke-linecap="round"
        d="M 2 9.423 L 20 9.423" 
        variants={{
          closed:{opacity:1},
          open:{opacity : 0},
        }}
        />
        <motion.path 
          stroke="#000000"
          stroke-width="3"
          stroke-linecap="round"
          variants={{ 
            closed: { d: "M 2 16.346 L 20 16.346" },
            open:{d: "M 3 2.5 L 17 16.346"},
          }} />
      </svg>

    </button>
  )
}

export default Togglebuton