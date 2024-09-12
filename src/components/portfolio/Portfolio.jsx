import {useRef} from 'react';
import './portfolio.scss';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

const items = [
    {
        id: 1,
        img: '/monjoomockup.png',
        title: 'monjooo.cm',
        desc: 'Monjooo.cm  is a multiservice tour company website which I created in 2023. It aims to organize secured trips for national and international tourists to Mount Cameroon and other tourist destinations in Cameroon.',
    },
    {
        id: 2,
        img: '/broadsmile.png',
        title: 'MERN Stack Doctor Appointment Web Template',
        desc: ' It is a medical web template that I created  using MERN stack. It targeting the patients who are seeking medical advice and information-anyone- Medical experts can use to present their services and permit patients to book and make payments online.',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2318028/pexels-photo-2318028.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'IT Support Specialist for 10 Years',
        desc: ' Troubleshot hardware issues and worked with service providers to facilitate repairs for end users.Performed functionality checks in order to eliminate user error inmobile Software deployments. ',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/9055153/pexels-photo-9055153.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'Volunteer In The Secretariat',
        desc: 'Cameroon University Games, Buea | May 2012 - May 2012 ',
    },
];
const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ['start start', 'end start ']
    });
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    return (
        <section>
            <div className='container'>
                <div className='wrapper'>
                    <div className='imageContainer' ref={ref}>
                        <img src={item.img} alt='' />
                    </div>
                    <motion.div className='textContainer' style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>
                            <a href='/contact#Contact'>For More</a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['end end', 'start start '],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div
                    style={{scaleX}}
                    className='progressBar'
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
