import Image from "next/image";
import Link from "next/link";
import DropDowns from "./DropDowns";

export default function Navbar() {
  return (
    <nav className="flex container mx-auto px-9 pt-5 pb-4 border-b border-gray-400 items-center justify-between lg:container lg:max-w-screen-2xl lg:mx-auto">
      <div>
        <Link href={"/"}>
          <Image
          className="lg:w-32"
            src={
              "https://s3.amazonaws.com/images.teladoc.com/member/Logo-Horz-RGB.svg"
            }
            alt="Logo"
            width={90}
            height={70}
          />
        </Link>
      </div>
      <div>
        <DropDowns />
      </div>
    </nav>
  );
}
