import Link from "next/link";

export default function Footer() {
  return (
    <div className="lg:flex-row lg:items-center mt-8 ">
      {/* Footer container */}
      <footer className="flex flex-col items-center text-center text-[#5b2f91] font-semibold text-xs border-t border-dotted pt-4 border-gray-700 lg:flex-row lg:justify-between lg:items-center lg:py-6 lg:container lg:mx-auto">
        
        {/* Copyright for large screens (left) */}
        <div className="hidden lg:block text-left text-gray-500 lg:w-1/5 font-extralight lg:flex-row lg:space-x-3 items-center lg:pb-3 text-xs">
          <p className="mt-2 lg:whitespace-nowrap">© 2002-2024 Teladoc, Inc. All rights reserved.</p>
        </div>

        {/* Links section */}
        <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:w-2/3 lg:justify-end px-1">
          <Link href="#">
            <p className="hover:text-[#a77bca] pb-1 whitespace-nowrap">Terms of Service</p>
          </Link>
          <Link href="#">
            <p className="hover:text-[#a77bca] pb-1 whitespace-nowrap">Notice of Privacy Practices</p>
          </Link>
          <Link href="#">
            <p className="hover:text-[#a77bca] pb-1 break-words lg:whitespace-nowrap">
              Notice of Non-Discrimination and Language Assistance
            </p>
          </Link>
          <Link href="#">
            <p className="hover:text-[#a77bca] pb-1 whitespace-nowrap">Informed Consent Agreement</p>
          </Link>
        </div>

        {/* Copyright for small screens */}
        <div className="text-center text-gray-500 lg:hidden mt-4 font-thin">
          <p className="mt-2 mb-28">© 2002-2024 Teladoc, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
