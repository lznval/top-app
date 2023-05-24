import React from 'react';
import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import { Card } from '../Card/Card';
import { priceRu } from '../../helpers/helpers';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {    
    return (
        <>
            {advantages.map(a => (
                <div className={styles.advantage} key={a._id}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.line} />
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    );
};

