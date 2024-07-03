import { Metadata } from "next";
import Link from "next/link";

interface IMainLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "LOGIN/REGISTER",
    description: "Developer : Ahmad Ghanavati",
};

const AuthLayout = (props: IMainLayoutProps) => {
    const { children } = props

    return (
        <div className="container mx-auto px-5">
            <div className="mx-auto flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10">
                <div className="max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
                    <p className="mb-20 font-bold tracking-wider">Ahmad Ghanavati</p>
                    <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
                        Authenticate <br />
                        Register Or Login
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-200">this is a sample application for learning NEXTjs Framework</p>

                    <div className="mb-28 flex flex-row space-x-2">
                        <Link href="/auth/register"> Register </Link>
                        <span> / </span>
                        <Link href="/auth/login"> Login </Link>
                    </div>

                    <div className="bg-blue-600/80 rounded-2xl px-4 py-8">
                        <p className="mb-3 text-gray-200">this is a sample project</p>
                        <div className="">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYV9iHvmCG5MrwdqWOUV03gDb11KoOPpqFA&s" alt="Simon Lewis" />
                                <p className="ml-4 w-56">
                                    <strong className="block font-medium">Auther :  Ahmad Ghanavati</strong>
                                    <span className="text-xs text-gray-200"> 1403-04-03 </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 px-4 py-20">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default AuthLayout;