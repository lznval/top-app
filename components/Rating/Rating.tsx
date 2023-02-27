import React, { useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constractRating(rating);
    }, [rating]);

    const constractRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })}
                />
            );
    });
    setRatingArray(updatedArray);
};

return (
    <div {...props}>
        {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
);
};
