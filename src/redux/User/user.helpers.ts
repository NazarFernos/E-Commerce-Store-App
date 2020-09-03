import { auth } from '../../firebase/utils';


type ConfigType = {
    url: string
};

export const handleResetPasswordAPI = (email: string): Promise<void> => {
    const config: ConfigType = {
        url: 'http://localhost:3000/login'
    };

    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
            .then(() => {
                resolve();
            })
            .catch(() => {
                const err: string[] = ['Email not found. Please try again.'];
                reject(err);
            });
    });
};