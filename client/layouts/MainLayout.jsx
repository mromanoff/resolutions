import React from 'react';
import AccountUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>My resolutions</h2>
            <nav>
                <a href="/">Resolutions</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a> |
                <AccountUI />
            </nav>
        </header>
        <main>
            {content}
        </main>
    </div>
);

