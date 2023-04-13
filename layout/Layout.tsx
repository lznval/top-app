import React, { FC } from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { AppContextProvider, IAppContext } from '../context/app.context';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper} >
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body} >
                {children}
            </div>
            <Footer className={styles.footer} />
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