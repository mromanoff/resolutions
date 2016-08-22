import React from 'react';
import AccountUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h1>My resolutions</h1>
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

