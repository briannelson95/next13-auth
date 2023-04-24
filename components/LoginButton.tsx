import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
    const { data: session } = useSession();
    
    if (session) {
        return (
            <>
                <div style={{display: 'flex'}}>
                    {session.user?.image ? 
                        <Image 
                            src={session.user?.image}
                            alt="user image"
                            height={100}
                            width={100}
                            style={{height: "30px", width: "30px", borderRadius: "999px"}}
                        />
                        : <div style={{
                            backgroundColor: "h0h0h0",
                            height: "30px",
                            width: "30px",
                            borderRadius: "999px"
                        }} />
                    }
                    

                    Signed in as {session.user?.name}
                </div>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }
    return (
        <>
            Not Signed In <br />
            <button onClick={() => signIn()}>Sign In</button>
        </>
    )
}