import {useRef} from 'react';
import './services.scss';
import {motion, useInView} from 'framer-motion';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    exit: {opacity: 0},
};

const Services = () => {
    const ref = useRef();
    // const isInview = useInView(ref, {margin: '-100px'});

    return (
        <motion.div
            className='services'
            variants={variants}
            initial='initial'
            // animate='animate'
            // whileInView={'animate'}
            animate={'animate'}
            ref={ref}
        >
            <motion.div className='textContainer' variants={variants}>
                <p className='title'>
                    My objective is to guide you through your journey <br /> of
                    Brand success
                </p>
                <hr />
            </motion.div>
            <motion.div className='titleContainer' variants={variants}>
                <div className='title'>
                    <img src='/people.webp' alt='' />
                    <h1>
                        <motion.b whileHover={{color: 'orange'}}>
                            Great
                        </motion.b>{' '}
                        Ideas
                    </h1>
                </div>
                <div className='title'>
                    <h1>
                        <motion.b whileHover={{color: 'orange'}}>
                            For Your
                        </motion.b>{' '}
                        Business
                    </h1>
                    <button>Our Specialty</button>
                </div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
                <motion.div
                    className='box'
                    whileHover={{background: 'lightgray', color: 'black'}}
                >
                    <h2 className='color:orange'>My Skills</h2>

                    <ul>
                        <li>HTML,CSS </li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node js</li>
                        <li>MongoDB</li>
                        <li>Python</li>
                    </ul>
                    <button>GO</button>
                </motion.div>
                <motion.div
                    className='box'
                    whileHover={{background: 'lightgray', color: 'black'}}
                >
                    <h2>Product </h2>

                    <p>
                        As an exceptional analytical thinker, I possess the
                        ability to uphold the brand vision throughout its entire
                        journey, effectively bridging the technical and product
                        aspects. By leveraging my expertise, I can navigate the
                        path from 0 to 1, ensuring the brand success at every
                        stage.
                    </p>
                    <button>GO</button>
                </motion.div>
                <motion.div
                    className='box'
                    whileHover={{background: 'lightgray', color: 'black'}}
                >
                    <h2>Design </h2>

                    <p>
                        . I possess a remarkable aptitude for conceptualization,
                        allowing me to envision and bring forth stunning
                        creations. Additionally, my expertise lies in
                        fine-tuning stylesheets and crafting seamless user
                        experiences that flow effortlessly.
                    </p>
                    <button>GO</button>
                </motion.div>
                <motion.div
                    className='box'
                    whileHover={{background: 'lightgray', color: 'black'}}
                >
                    <h2>Development and Maintenance</h2>

                    <p>
                        Full Stack Focused Web Developer building and managing
                        Websites and Mobile Applications that leads to the
                        success of the overall product.
                    </p>
                    <button>GO</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
