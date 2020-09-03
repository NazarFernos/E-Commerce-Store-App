import React, { FC } from 'react';
import './styles.scss';

type AuthWrapperPropsType = {
    headline: string,
    children: React.ReactNode
}

const AuthWrapper: FC<AuthWrapperPropsType> = ({ headline, children }) => {
    return (
        <div className="authWrapper">
            <div className="wrap">
               {headline && <h2>{headline}</h2>}
                    
                <div className="children">
                    {children && children}
                </div>     
            </div>
        </div>
    ); 
}

export default AuthWrapper;