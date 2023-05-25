import React from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    console.log(product);
    
    return(
        <div>
            {product.title}
        </div>
    );
};

