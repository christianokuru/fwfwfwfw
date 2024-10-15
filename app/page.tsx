// The home page

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <h1>Click here to Sign in</h1>
      <div className="flex pt-5">
        <Link href={"/sign-in"}>
        <Button variant={"link"} className="bg-black text-white">Sign in</Button>
        </Link>
      </div>
    </div>
  );
}
