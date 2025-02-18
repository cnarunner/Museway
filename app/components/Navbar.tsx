import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className={"px-5 py-3 bg-white shadow-sm font-work-sans"}>
            <nav className={"flex items-center justify-between"}>
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt={"logo"} width={144} height={30} />
                </Link>

            </nav>

            <div className={"flex items-center gap-5"}>
                {session && session?.user ? (  // If session exists and session has a user, then render the following.
                    <>
                        <Link href={"/startup/create"}>
                            <span>Create</span>
                        </Link>

                        <button onClick={signOut}>
                            <span>Logout</span>
                        </button>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                )}
            </div>

        </header>
    )
}
export default Navbar
