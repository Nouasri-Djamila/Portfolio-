import { useRef, useState } from 'react'
import './Contact.scss'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}
const Contact = () => {
    const formref = useRef()
    const [error, setEroor] = useState(false)
    const [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_oiewd3o', 'template_j92dze5', formref.current, {
                publicKey: 'eEWQNTb10JUNtn2b3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true)
                },
                (error) => {
                    setEroor(true)
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <motion.div className='contact' variants={variants} initial='initial' whileInView='animate'>
            <motion.div variants={variants} className="textContainer">
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Mail</h2>
                    <span>nouasridjamila@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>Algeria Algeirs Mouhammadia </span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+213 541 689 820</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.form
                    variants={variants}
                    ref={formref}
                    onSubmit={sendEmail}>
                    <input type="text" required placeholder='Name' name='name' />
                    <input type="email" required placeholder='Email' name='email' />
                    <textarea rows={8} placeholder='Message' name='message' />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact