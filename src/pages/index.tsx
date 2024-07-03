import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    const logout = () => {
        Cookies.remove('token')
        router.replace('/auth/login');
    }

    return (
        <MainLayout>

            <div className="my-auto mx-auto mt-10 w-full max-w-xl md:mt-56 lg:max-w-screen-xl">
                <div className="mb-16 lg:mb-0 lg:max-w-lg">
                    <div className="mb-6 max-w-xl">
                        <div>
                            <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-indigo-900">Hello User</p>
                        </div>
                        <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                            Test Project <br />
                            <span className="inline-block font-bold text-orange-600">Programming Next</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor.</p>
                    </div>
                    <div className="flex items-center">
                        <a href="javascript:" onClick={logout} className="mr-6 inline-flex h-12 items-center justify-center rounded bg-orange-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-orange-400 focus:ring"> Log Out </a>
                        <Link href="/about" aria-label="" className="inline-flex items-center font-semibold text-orange-600 transition-colors duration-200 hover:text-orange-400"> About Page </Link>
                    </div>
                </div>
            </div>


        </MainLayout>
    )
}
export default Home;