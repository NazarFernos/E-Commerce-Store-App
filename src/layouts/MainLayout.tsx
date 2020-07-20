import React, { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


interface Props {
    props: React.ReactChildren
}

const MainLayout: FC<Props> = props => {
    return (
        <div>
            <Header {...props} />
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;