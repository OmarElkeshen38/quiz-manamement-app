import { Outlet } from 'react-router-dom';
import authImage from '../../../assets/authImage.png';
import authLogo from '../../../assets/authLogo.svg';
import styles from './AuthLayout.module.css';

function AuthLayout() {
    return (
        <div className={styles.authContainer}>
            <div className="container-fluid px-4">
                <div className="row py-3">
                    <div className="col-md-6">
                        <div className="px-3">
                            <div className="logo">
                                <img src={authLogo} alt="quizwiz" />
                            </div>
                            <div className="my-5 authLayoutContent">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-4 py-2">
                        <div className="px-5">
                            <img src={authImage} alt="auth image" className='object-fit w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
