import "./parallex.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

const Parallex = ({ type }) => {
    const ref=useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start', "end start"]
    })
    const yText= useTransform(scrollYProgress, [0,1], ["0%" , "500%"])
    const yBg= useTransform(scrollYProgress, [0,1], ["0%" , "100%"])

    return (
        <div className="parallex" 
            style={
                {background:type==="services" ? 
                "linear-gradient(180deg, #232352, #0c0c1d)" 
                : "linear-gradient(180deg,  #0c0c1d, #313179)"
                }}
            ref={ref}>
            <motion.h1 style={{y:yText}}>{type === "services" ? "What I do" : "What I did"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{y:yBg}} className="plannets"></motion.div>
            <motion.div style={{x:yBg}} className="stars"></motion.div>
        </div>
    )
}

export default Parallex