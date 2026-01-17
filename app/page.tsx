import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1 className="text-xl md:text-2xl font-medium leading-13 mb-1">
				Alexander Hofmeister
			</h1>
			<div className={"my-5"}>
				I’m a developer with over 10 years of experience in software
				development.
			</div>
			<div className={"my-5"}>
				In recent years, I’ve focused on building modern web applications.
			</div>
			<div className={"my-5"}>
				I'd like to make software easy, and fun to use.
			</div>

			<div className={"my-5"}>
				<Link
					href={"/projects"}
					className={"hover:underline flex gap-x-1 items-center w-fit"}
				>
					Check out my projects here <ArrowRightIcon size={14} />
				</Link>
			</div>
		</>
	);
}
