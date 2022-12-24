import Image from "next/image"
import Link from "next/link"
import LogoutButton from "./LogoutButton"
import { unstable_getServerSession } from "next-auth/next"

async function Header() {
    const session = await unstable_getServerSession()

    if (session)
        return (
            <header className="stickey top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
                <div className="flex space-x-2">
                    <Image
                        className="rounded-full mx-2 object-contain"
                        src={session.user?.image!}
                        height={10}
                        width={50}
                        alt="Profile Picture"
                    />
                    <div>
                        <p className="text-blue-400">Logged in as:</p>
                        <p className="font-bold text-lg">
                            {session.user?.name}
                        </p>
                    </div>
                </div>

                <LogoutButton />
            </header>
        )

    return (
        <header className="stickey top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
            <div className="flex flex-col items-center space-y-5">
                <div className="flex space-x-2 items-center">
                    <Image src="/meta.png" height={10} width={50} alt="Logo" />
                    <p className="text-blue-400">Welcome to Meta MESSENGER</p>
                </div>

                <Link
                    href="/auth/signin"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign In
                </Link>
            </div>
        </header>
    )
}

export default Header
