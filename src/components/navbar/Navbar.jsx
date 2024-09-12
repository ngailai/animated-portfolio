import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import {motion} from 'framer-motion';
function Navbar() {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar />
            <div className='wrapper'>
                <motion.span
                    initial={{opacity: 0.5, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                >
                    Ngailai
                </motion.span>
                <div className='social'>
                    <a
                        href='https://github.com/ngailai'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src='/git.png' alt='' />
                    </a>
                    <a
                        href='https://www.tiktok.com/@ngailai_claude_official'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src='/titok.png' alt='' />
                    </a>
                    <a
                        href='https://twitter.com/NGAILAI'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src='/X.png' alt='' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/ngailai-claude'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src='/linkedin.png' alt='' />
                    </a>
                    <a
                        href='https://www.facebook.com/claude.ngailai'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src='/facebook.png' alt='' />
                    </a>
                    <a
                        href='https://www.instagram.com/therealngailai'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src='/instagram.png' alt='' />
                    </a>
                    <a
                        href='https://www.youtube.com/@ngailaiclaude3736'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src='/youtube.png' alt='' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
