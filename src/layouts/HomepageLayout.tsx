import React, { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


interface Props {
    props?: React.ReactChildren
}

const HomepageLayout: FC<Props> = props => {
    return (
        <div className="fullHeight">
            <Header {...props} />
             {props.children}
             <Footer />
        </div>
    );
};

export default HomepageLayout;