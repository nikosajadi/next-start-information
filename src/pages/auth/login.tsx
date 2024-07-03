import AuthLayout from "@/layouts/AuthLayout";
import { login } from "@/services/auth";
import { useState } from "react";
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const PageLogin = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        if (form.username == '') toast.error('Username empty');
        else if (form.password == '') toast.error('Password empty');
        else {
            setLoading(true);
            login(form)
                .then((res: any) => {
                    // console.log('res : ', res)
                    Cookies.set('token', res.data.token, { expires: 7 }); // Set the cookie to expire in 7 days
                    toast.success(`Hello ${res.data.name}`)
                    router.replace('/');
                })
                .catch((e: any) => {
                    toast.error(e.response.data.message)
                })
                .finally(() => {
                    setLoading(false);
                })

        }
    }

    return (
        <AuthLayout>
            <div className="w-full">
                <h2 className="mb-2 text-3xl font-bold">Sign In</h2>
                <span className="mb-10 block font-bold text-gray-600">Enter Your Account Info</span>

                {/* Username Input */}
                <p className="mb-1 font-medium text-gray-500">Username</p>
                <div className="mb-4 flex flex-col">
                    <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                        <input type="username" id="signin-username" name="username" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your username" onChange={handleFormChange} />
                    </div>
                </div>

                {/* Password Input */}
                <p className="mb-1 font-medium text-gray-500">Password</p>
                <div className="mb-4 flex flex-col">
                    <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                        <input type="password" id="signin-password" name="password" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Type Your password " onChange={handleFormChange} />
                    </div>
                </div>

                {loading && <div> LOADING ...  </div>}
                {!loading && <button className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg" onClick={handleSubmit}>Sign In</button>}


            </div>
        </AuthLayout>
    )
}
export default PageLogin;