"use client";
import { signIn,signOut,useSession } from "next-auth/react";

export function AppBar() {
    const session=useSession();
    return(
        <div>
            <div className="flex justify-between">
                <div>
                    Democratic Play
                </div>
                <div>
                {session.data?.user ? (
                        <>
                            <span>{session.data.user.name}</span>
                            <button className="m-2 p-2 bg-red-500" onClick={() => signOut()}>Sign Out</button>
                        </>
                    ) : (
                        <button className="m-2 p-2 bg-blue-500" onClick={() => signIn()}>Sign In</button>
                    )}
                </div>

            </div>

        </div>
    )
}