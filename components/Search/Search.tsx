import React, { useState, KeyboardEvent  } from 'react';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './search.svg';
import { useRouter } from 'next/router';

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const router = useRouter();
    const [search, setSearch] = useState<string>('');
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == 'Enter') {
            goToSearch()
        }
    };

    return(
        <div className={cn(className, styles.search)} {...props}>
            <Input
                placeholder='Поиск...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};

