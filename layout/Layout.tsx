import React, {FC, useState, KeyboardEvent, useRef} from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { AppContextProvider, IAppContext } from '../context/app.context';
import {Up} from '../components';
import cn from "classnames";

const Layout = ({ children }: LayoutProps): JSX.Element => {

    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);
    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current.focus();
        }
        setIsSkipLinkDisplayed(false);
    };
    return (
        <div className={styles.wrapper}>
            <a
                onFocus={() => setIsSkipLinkDisplayed(true)}
                onKeyDown={skipContentAction}
                href=""
                tabIndex={1}
                className={cn(styles.skipLink, {
                    [styles.displayed]: isSkipLinkDisplayed
                })}
            >
                Сразу к содержанию
            </a>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body} ref={bodyRef} tabIndex={0}>
                {children}
            </div>
            <Footer className={styles.footer} />
            <Up />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory} >
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};