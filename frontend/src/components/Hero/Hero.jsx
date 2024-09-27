import "./hero.scss"
import hero from "../../assets/hero.png"
import scroll from "../../assets/scroll.png"
import {motion} from "framer-motion"
const textVariants = {
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const slideVariants = {
    initial:{
        x:0
    },
    animate:{
        x:"-220%",
        opacity:1,
        transition:{
            repeat:Infinity,
            repeatType:"miroor",
            duration:20
        }
    }
}
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>Nouasri Djamila</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                            See my works
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Contacte Me
                        </motion.button>
                    </motion.div>
                    <motion.img src={scroll} alt="" variants={textVariants} animate="scrollButton"/>
                </motion.div>
            </div>
            <motion.div className="slidtextContainer" variants={slideVariants} initial="initial" animate="animate">Content Creator Freelencer Teacher</motion.div>
            <div className="imageContainer">
                <img src={hero} alt="" />
            </div>
        </div>
    )
}

export default Hero