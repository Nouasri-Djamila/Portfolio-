import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
    {
        id: 1,
        title: 'React Commerce',
        img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab asperiores nostrum praesentium blanditiis? Quo deleniti repudiandae labore ea, natus quae, numquam consectetur aliquam commodi alias vitae velit eos. Illo, ratione!'
    },
    {
        id: 2,
        title: 'Next js Commerce',
        img: "https://images.pexels.com/photos/27364855/pexels-photo-27364855/free-photo-of-retratos-d-un-jeune-danseur-et-influenceur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab asperiores nostrum praesentium blanditiis? Quo deleniti repudiandae labore ea, natus quae, numquam consectetur aliquam commodi alias vitae velit eos. Illo, ratione!'
    },
    {
        id: 3,
        title: 'Vannila JS APP',
        img: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab asperiores nostrum praesentium blanditiis? Quo deleniti repudiandae labore ea, natus quae, numquam consectetur aliquam commodi alias vitae velit eos. Illo, ratione!'
    },
    {
        id: 4,
        title: 'Django Commerce ',
        img: 'https://images.pexels.com/photos/955402/pexels-photo-955402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab asperiores nostrum praesentium blanditiis? Quo deleniti repudiandae labore ea, natus quae, numquam consectetur aliquam commodi alias vitae velit eos. Illo, ratione!'
    },
];

const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref  })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                    
                    <motion.div className="textContainer" style={{y : y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )

}

const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    }
    )
    return (
        <div className="portfolio" ref={ref}>
            <div className="prograss">
                <h1>Feature Work</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))
            }
        </div>
    )
}

export default Portfolio