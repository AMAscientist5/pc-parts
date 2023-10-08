import { signOut, useSession } from "next-auth/react";
import { signOut as logOut } from "firebase/auth";
import { useRouter } from "next/router";

import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import React from "react";
import auth from "@/firebase/firebaseAuth";

const Header = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const logout = () => {
    logOut(auth);
    router.push(
      // "https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/"
      "http://localhost:3000/"
    );
  };
  return (
    <div className="bg-white flex items-center justify-between lg:container w-[95%] mx-auto py-2 z-50">
      <Link href="/">
        <p className="text-black text-3xl font-bold">Pc Parts</p>
      </Link>
      <div className="flex gap-4 items-center">
        <div className="relative group ">
          <div className="text-lg px-3  h-8 w-28 bg-gradient-to-r from-indigo-500 to-sky-300 border border-none text-white font-bold">
            Categories
          </div>
          <ul className="absolute bg-black hidden group-hover:block  px-4 py-2 mr-2 space-y-2 list-none w-40">
            <li>
              <Link href="/cpu" className="hover:text-white">
                Processor
              </Link>
            </li>
            <li>
              <Link href="/motherboard" className="hover:text-white">
                Motherboard
              </Link>
            </li>
            <li>
              <Link href="/ram" className="hover:text-white">
                RAM
              </Link>
            </li>
            <li>
              <Link href="/psu" className="hover:text-white">
                Power Supply Unit
              </Link>
            </li>
            <li>
              <Link href="/storage" className="hover:text-white">
                Storage Device
              </Link>
            </li>
            <li>
              <Link href="/monitor" className="hover:text-white">
                Monitor
              </Link>
            </li>
            <li>
              <Link href="/others" className="hover:text-white">
                Others
              </Link>
            </li>
            {session?.user && (
              <li>
                <button
                  onClick={() => {
                    signOut({
                      callbackUrl: "http://localhost:3000/",
                      // "https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/",
                    });
                    // router.push("https://pc-builder-client-fkyuo4k6y-amascientist5.vercel.app/");
                  }}
                  className="hover:text-white bg-blue-800 outline-none text-gray-300 "
                >
                  Log out
                </button>
              </li>
            )}
            {user?.email && (
              <li>
                <button
                  // onClick={() => signOut(session)}
                  onClick={logout}
                  className="hover:text-white bg-blue-800 outline-none text-gray-300 "
                >
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>

        <Link href="/build-pc">
          {" "}
          <button className="h-8 w-24 bg-gradient-to-r from-indigo-500 to-sky-300 border border-none text-white font-bold">
            Build
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
