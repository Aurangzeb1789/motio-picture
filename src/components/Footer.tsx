import Image from "next/image";
import Link from "next/link";

function Footer() {

    const infoArray = [
        {
            title: "About us",
            href: "/about",
        },
        {
            title: "Contact us",
            href: "/contact",
        },
        {
            title: "Terms & Conditions",
            href: "/terms",
        },
        {
            title: "Privacy Policy",
            href: "/privacy",
        },
        {
            title: "Press",
            href: "/press",
        },
    ];

    const contactArray = [
        {
            title: "Videos",
            href: "/videos",
        },
        {
            title: "Gaming",
            href: "/gaming",
        },
        {
            title: "Travel",
            href: "/travel",
        },
        {
            title: "Music",
            href: "/music",
        },
        {
            title: "Sports",
            href: "/sports",
        },
    ];




    return <> <div className="bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 overflow-hidden">
        <div>
            <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                About us{" "}
                <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-0.5 z-10" />
            </h2>
            <Link href={"/"}>
                <Image
                    src="/img/logo-dark.png"
                    alt="Logo"
                    width={120}
                    height={100}
                    priority={true}
                    className="cursor-pointer w-40 h-auto"
                />
            </Link>
            <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
                Welcome to motionPicture, your go-to site for all things movies! From the latest releases to timeless classics, we offer reviews, news, and updates to keep you in the loop. Dive into our curated content and join our community of movie enthusiasts. Celebrate the magic of cinema with us!
            </p>
        </div>

        <div>
            <h2 className="font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                INFORMATIONS <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-0.5 z-10" />
            </h2>

            <div>
                {
                    infoArray.map((item) => (
                        <div className="relative" key={item.title}>
                            <Link href={item.href}>
                                <span className="group">
                                    <span className="w-2 h-2 inline-block rounded-full border border-red-700 transition-all duration-200 hover:bg-red-700 group-hover:bg-red-700 absolute top-3" />
                                    <p className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 ml-4">{item.title}
                                    </p>
                                </span>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>

        <div>
            <h2 className="font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                CATEGORY <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-0.5 z-10" />
            </h2>

            <div>
                {
                    contactArray.map((item) => (
                        <div className="relative" key={item.title}>
                            <Link href={item.href}>
                                <span className="group">
                                    <span className="w-2 h-2 inline-block rounded-full border border-red-700 transition-all duration-200 hover:bg-red-700 group-hover:bg-red-700 absolute top-3" />
                                    <p className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 ml-4">{item.title}
                                    </p>
                                </span>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>


        <div>
            <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                Connect with Us
                <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
            </h2>
            <div className="text-gray-300 text-sm flex flex-col gap-2">
                <p>
                    Phone: <span className="text-white font-medium">972 4356 0000</span>
                </p>
                <p>
                    Email:{" "}
                    <span className="text-white font-medium">
                        kaurangzeb1789@gmail.com
                    </span>
                </p>
            </div>
        </div>

    </div>
    </>
}

export default Footer;