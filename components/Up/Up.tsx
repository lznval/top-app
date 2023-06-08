import styles from './Up.module.css';
import {useScrollY} from '../../hooks/useScrollY';
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react';
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";
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
        <motion.div
            className={styles.up}
            animate={controls}
        >
            <ButtonIcon onClick={scrollToTop} appearance='primary' icon='up' />
        </motion.div>
    );
};