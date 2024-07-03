import AuthLayout from "@/layouts/AuthLayout";
import { register } from "@/services/auth";
import { useState } from "react";
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const PageRegister = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        gender: 'man',
        username: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        if (form.firstname == '') toast.error('firstname empty');
        else if (form.lastname == '') toast.error('lastname empty');
        else if (form.username == '') toast.error('username empty');
        else if (form.password == '') toast.error('Password empty');
        else if (form.password.length < 5) toast.error('Password length empty');
        else {
            setLoading(true);
            register({ ...form, name: `${form.firstname} ${form.lastname}` })
                .then((res: any) => {
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
            <>
                <h2 className="mb-2 text-3xl font-bold">Sign Up</h2>
                <span className="mb-10 block font-bold text-gray-600">Create Your account</span>

                {/* Gender Radio */}
                <p className="mb-1 font-medium text-gray-500">Gender ?</p>
                <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">

                    <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        <input className="peer hidden" type="radio" name="gender" id="radio1" value="man" checked={form.gender === 'man'} onChange={handleFormChange} />
                        <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio1"> </label>
                        <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
                        <span className="pointer-events-none z-10">Man</span>
                    </div>

                    <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        <input className="peer hidden" type="radio" name="gender" id="radio3" value="woman" checked={form.gender === 'woman'} onChange={handleFormChange} />
                        <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio3"> </label>
                        <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
                        <span className="pointer-events-none z-10">Woman</span>
                    </div>

                </div>

                {/* FirstName Input */}
                <p className="mb-1 font-medium text-gray-500">First Name</p>
                <div className="mb-4 flex flex-col">
                    <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                        <input type="text" id="signup-fname" name="firstname" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your first name" onChange={handleFormChange} />
                    </div>
                </div>

                {/* LastName Input */}
                <p className="mb-1 font-medium text-gray-500">Last Name</p>
                <div className="mb-4 flex flex-col">
                    <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                        <input type="text" id="signup-lname" name="lastname" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your last name" onChange={handleFormChange} />
                    </div>
                </div>

                {/* Username Input */}
                <p className="mb-1 font-medium text-gray-500">Username</p>
                <div className="mb-4 flex flex-col">
                    <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                        <input type="text" id="signup-username" name="username" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your username" onChange={handleFormChange} />
                    </div>
                </div>

                {/* Password Input */}
                <p className="mb-1 font-medium text-gray-500">Password</p>
                <div className="mb-4 flex flex-col">
                    <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                        <input type="password" id="signup-password" name="password" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Choose a password (minimum 8 characters)" onChange={handleFormChange} />
                    </div>
                </div>

                {loading && <div> LOADING ...  </div>}
                {!loading && <button className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg" onClick={handleSubmit}>Sign Up</button>}
            </>
        </AuthLayout>
    )
}
export default PageRegister;