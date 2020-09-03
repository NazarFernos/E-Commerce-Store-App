import React, { useState, useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Buttons from '../forms/Button';
import { resetPasswordStart, resetUserState } from '../../redux/User/user.actions';
import { UserType, ConfigAuthWrapperType } from '../../types';


const mapState = ({ user }: UserType) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
});

const EmailPassword: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetPasswordSuccess, userErr } = useSelector(mapState);
    const [email, setEmail] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetUserState());
            history.push('/login');
        }

    }, [resetPasswordSuccess]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr)    
        }
    }, [userErr]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(resetPasswordStart({ email }));
    }

    const configAuthWrapper: ConfigAuthWrapperType = {
        headline: 'Email Password'
    };

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((e: string, index: number) => {
                                return (
                                    <li key={index}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={e => setEmail(e.target.value)}
                        />

                        <Buttons
                            type="submit"
                        >
                            Email Password 
                        </Buttons>
                    </form>
                </div>
            </AuthWrapper>
        );
}

export default EmailPassword;