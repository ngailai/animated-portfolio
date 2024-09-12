import './hero.scss';
import {motion} from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-220%',

        transition: {
            duration: 20,
            repeatType: 'mirror',
            repeat: Infinity,
        },
    },
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div
                    className='textContainer'
                    variants={textVariants}
                    initial='initial'
                    animate='animate'
                >
                    <motion.h2 variants={textVariants}>
                        CLAUDE NGAILAI
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Full Stack Web & Mobile App Developer
                    </motion.h1>
                    <motion.div className='buttons'>
                        <motion.button
                            className='button'
                            variants={textVariants}
                        >
                            <a href='contact#Services'>See My Works</a>
                        </motion.button>
                        {/* <Link to='/login'> */}
                        <motion.button
                            variants={textVariants}
                            className='button'
                        >
                            <a href='/contact#Contact'>Contact Me</a>
                        </motion.button>
                        {/* </Link> */}
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate='scrollButton'
                        src='/scroll.png'
                        alt=''
                        onClick={() => window.scrollTo(0, 900)}
                    />
                </motion.div>
            </div>
            <motion.div
                className='slidingTextContainer'
                variants={sliderVariants}
                initial='initial'
                animate='animate'
            >
                Devops Engineer, Full Stack Developer and Mobile App Developer
            </motion.div>
            <div className='imageContainer'>
                <img src='/hero.png' alt='' />
            </div>
        </div>
    );
};

export default Hero;
