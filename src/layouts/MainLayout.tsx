import { Metadata } from "next";
interface IMainLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "My Sample Next APP",
    description: "Developer : Ahmad Ghanavati",
};

const MainLayout = (props: IMainLayoutProps) => {
    const { children } = props

    return (
        <>
            <div className="w-screen">
                <div className="relative mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
                    {/* <!-- Left Column --> */}
                    {children}
                    {/* <!-- /Left Column --> */}

                    {/* <!-- Right Column --> */}
                    <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end lg:px-2">
                        {/* <!-- Col 2 --> */}
                        <div className="my-auto mb-20 hidden w-56 flex-col space-y-3 md:mt-36 lg:flex">
                            <div className="rounded-xl bg-yellow-400 pt-10">
                                <img className="h-full w-full object-contain" src="https://componentland.com/images/yg7jHmFeLOLmlxPWz8D4C.png" alt="" />
                            </div>
                        </div>
                        <div className="my-auto flex space-x-3 rounded-xl md:mt-36 md:w-60 md:flex-col md:space-y-3 md:space-x-0 md:px-4">
                            <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                                <img className="mx-auto h-full w-full object-contain object-bottom" src="https://componentland.com/images/5L6JMrng-34iG1LN5yh7Q.png" alt="" />
                            </div>
                            <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                                <img className="mx-auto h-full w-full object-contain object-bottom" src="https://componentland.com/images/AjCb3ZW2H6zNzumU0E3B2.png" alt="" />
                            </div>
                            <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                                <img className="mx-auto h-full w-full object-contain object-bottom" src="https://componentland.com/images/LOsO0RwPYEzhVfeDuJG3M.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Right Column --> */}
                </div>
            </div>
        </>
    )
}
export default MainLayout;