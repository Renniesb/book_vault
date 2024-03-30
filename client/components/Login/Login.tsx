import React from 'react';
import styles from './Login.module.scss'
export const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login_container}>
                <h1 className={styles.login_container_title}>Login</h1>
                <form className={styles.login_container_form}>
                    <input type="text" placeholder="Username" className={styles.login_container_form_input} />
                    <input type="password" placeholder="Password" className={styles.login_container_form_input} />
                    <button className={styles.login_container_form_button}>Login</button>
                </form>
                <p>Login or create an account to make your own book collections or visit the <u>Book Collections</u> link to check out ours.</p>
            </div>
        </div>
    )
};










