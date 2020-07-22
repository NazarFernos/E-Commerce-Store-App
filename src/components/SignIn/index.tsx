import React, { useState, useEffect, FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';

import './styles.scss';

import Buttons from '../forms/Button';
import FormInput from '../forms/FormInput';
import AuthWrapper from '../AuthWrapper';

type configAuthWrapperType = {
    headline: string
}

const mapState = ({ user }: any) => ({
    currentUser: user.currentUser
});

const SignIn: FC = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }

    }, [currentUser]);

    const resetForm = (): void => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const handleGoogleSignIn = (): void => {
        dispatch(googleSignInStart());
    };

    const configAuthWrapper: configAuthWrapperType = {
        headline: 'Login'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                <form onSubmit={handleSubmit}>

                    <FormInput                           
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        type="password"                           
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <Buttons type="submit">
                        Login
                    </Buttons>

                    <div className="socialSignin">
                        <div className="row">
                            <Buttons onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </Buttons>
                        </div>
                    </div>

                    <div className="links">
                        <Link to="/recovery">
                            Reset password
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
        );
    }

export default SignIn;