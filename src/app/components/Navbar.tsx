import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-2">
            <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-[30px] h-[30px]">
                    <Image
                        fill
                        src="/footinfo.png"
                        alt="logo"
                        className="object-cover"
                    />
                </div>
                <span className="text-2xl font-bold none md:block">kkkoora </span>
            </Link>
            <p className="text-xs md:text-sm">2023</p>
        </div>
    );
}

export default Navbar;