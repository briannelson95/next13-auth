import React from 'react';
import {useSession, signOut} from "next-auth/react";
import Link from 'next/link';

export default function Navbar() {
    const {data} = useSession();
    console.log(data);
    return (
        <nav>
            <ul style={{display: 'flex', margin: '0 1rem'}}>
                <li>Page 1</li>
                <li>Page 2</li>
            </ul>
            <div>
                {data ? (
                    <>
                        <span style={{marginRight: "15px"}}>Hi, {data?.user?.email}</span>

                        <span>
                            {" "}               
                            <button className="nav-link" onClick={() => signOut()}>
                                Logout
                            </button>
                        </span>
                    </>
                ) : (<>
                    <span style={{marginRight: "15px"}}>
                        {" "}
                        <Link className="nav-link" href="/auth/login">
                            Login
                        </Link>
                    </span>
                </>)}
            </div>
        </nav>
    )
}
