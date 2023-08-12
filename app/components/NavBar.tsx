"use client";

import Link from "next/link";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "@/app/context/AuthContext";
import useAuth from "@/hooks/useAuth";

export default function NavBar() {
	const { data, loading } = useContext(AuthenticationContext);
	const { signout } = useAuth();
	return (
		<nav className="flex justify-between p-2">
			<Link href="/" className="font-bold text-2xl">
				{" "}
				OpenTable{" "}
			</Link>
			<div>
				{loading ? null : (
					<div className="flex gap-3">
						{data ? (
							<button
								className="bg-green-300 text-white p-2 px-4 border rounded mr-2 cursor-pointer"
								onClick={signout}
							>
								Sign out
							</button>
						) : (
							<>
								<AuthModal isSignin={true} />
								<AuthModal isSignin={false} />
							</>
						)}
					</div>
				)}
			</div>
		</nav>
	);
}
