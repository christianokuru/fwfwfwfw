import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-8">
      {/* Footer container */}
      <footer className="flex flex-col items-center text-center text-[#5b2f91] font-semibold text-xs border-t border-dotted pt-4 border-gray-700 lg:flex-row lg:justify-between lg:items-center lg:py-6 lg:px-16 lg:container lg:mx-auto">
        
        {/* Copyright for large screens (left) */}
        <div className="hidden lg:block text-left text-gray-500 lg:w-1/3 font-thin lg:flex-row items-center">
          <p className="mt-2">© 2002-2024 Teladoc, Inc. All rights reserved.</p>
        </div>

        {/* Links section */}
        <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:w-2/3 lg:justify-end">
          <Link href="#">
            <p className="hover:text-[#944cec] pb-1 whitespace-nowrap">Terms of Service</p>
          </Link>
          <Link href="#">
            <p className="hover:text-[#944cec] pb-1 whitespace-nowrap">Notice of Privacy Practices</p>
          </Link>
          <Link href="#">
            <p className="hover:text-[#944cec] pb-1 lg:whitespace-nowrap">
              Notice of Non-Discrimination and Language Assistance
            </p>
          </Link>
          <Link href="#">
            <p className="hover:text-[#944cec] pb-1 whitespace-nowrap">Informed Consent Agreement</p>
          </Link>
        </div>

        {/* Copyright for small screens */}
        <div className="text-center text-gray-500 lg:hidden mt-4 font-thin">
          <p className="mt-2">© 2002-2024 Teladoc, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
