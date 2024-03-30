import React from 'react';
import styles from './HeaderBar.module.scss'; // Import SCSS file
import Link from 'next/link';

interface HeaderBarProps {
    isLoggedIn: boolean;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ isLoggedIn }) => {
    return (
        <div className={styles.header}> {/* Use styles from SCSS file */}
            <nav>
                <ul>
                    <li><Link href="/collections">Book Collections</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    {isLoggedIn && <li><Link href="/my-collections">My Collections</Link></li>}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderBar;
