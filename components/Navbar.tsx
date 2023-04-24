"use client"

import React from 'react';
import LoginButton from './LoginButton';

export default function Navbar() {
    return (
        <nav>
            <ul style={{display: 'flex', margin: '0 1rem'}}>
                <li>Page 1</li>
                <li>Page 2</li>
            </ul>
            <div>
                <LoginButton />
            </div>
        </nav>
    )
}
