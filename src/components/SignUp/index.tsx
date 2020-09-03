import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUpUserStart } from '../../redux/User/user.actions';

import './styles.scss';

import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import AuthWrapper from '../AuthWrapper';
import { UserType } from '../../types';


const mapState = ({ user }: UserType) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
});

const Signup: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser, userErr } = useSelector(mapState);
    const [displayName, setDisplayName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErorrs] = useState<string[]>([]);

    useEffect(() => {
        if (currentUser) {
            reset();
            history.push('/');
        }
    }, [currentUser]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErorrs(userErr);
        }
    }, [userErr]);

    const reset = (): void => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErorrs([]);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
    };
 

    const configAuthWrapper = {
        headline: "Registration"
    };

        return (
                <AuthWrapper {...configAuthWrapper}>
                    <div className="formWrap">

                        {errors.length > 0 && (
                            <ul>
                                {errors.map((err, index) => {
                                    return (
                                        <li key={index}>
                                            {err}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        <form onSubmit={handleFormSubmit}>
                            <FormInput
                                type='text'
                                name='displayName'
                                value={displayName}
                                placeholder='Full name'
                                handleChange={e => setDisplayName(e.target.value)}
                            />

                            <FormInput
                                type='email'
                                name='email'
                                value={email}
                                placeholder='Email'
                                handleChange={e => setEmail(e.target.value)}
                            />

                            <FormInput
                                type='password'
                                name='password'
                                value={password}
                                placeholder='Password'
                                handleChange={e => setPassword(e.target.value)}
                            />

                            <FormInput
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                placeholder='Confirm password'
                                handleChange={e => setConfirmPassword(e.target.value)}
                            />

                            <Button type='submit'>
                                Register
                            </Button>
                        </form>
                    </div>
                </AuthWrapper> 
        );
    }


export default Signup;