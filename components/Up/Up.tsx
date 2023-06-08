import styles from './Up.module.css';
import UpIcon from './up.svg';
import {useScrollY} from '../../hooks/useScrollY';
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react';
export const Up = () => {
    const y = useScrollY();
    const controls = useAnimation();

    useEffect(() => {
        controls.start(y > 100 ? {opacity: 1} : {opacity: 0});
    }, [y, controls]);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <motion.button
            onClick={scrollToTop}
            className={styles.up}
            animate={controls}
        >
            <UpIcon />
        </motion.button>
    );
};