import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/mdx-files";

const categoryStyles: Record<string, string> = {
	own: "border-sky-500/30 bg-sky-500/10 text-sky-400",
	work: "border-violet-500/30 bg-violet-500/10 text-violet-400",
	other: "border-zinc-600/50 bg-zinc-800 text-zinc-400",
};

export function ProjectItem({ project }: { project: Project }) {
	const metadata = project.metadata;
	const isLive = metadata.status === "live";
	const categoryStyle =
		categoryStyles[metadata.category] ?? categoryStyles.other;

	return (
		<article className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-zinc-800 py-7 last:border-none">
			<div className="flex flex-col gap-2.5">
				<Link
					href={metadata.href}
					target="_blank"
					rel="noopener noreferrer"
					className="group/title inline-flex items-center gap-1 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-emerald-400"
				>
					{metadata.title}
					<ArrowUpRight className="h-4 w-4 opacity-40 transition-opacity group-hover/title:opacity-100" />
				</Link>

				<p className="max-w-xl text-sm leading-relaxed text-zinc-400">
					{metadata.description}
				</p>

				<div className="flex flex-wrap gap-1.5 pt-0.5">
					{metadata.technologies.map((tech) => (
						<span
							key={tech}
							className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<div className="flex flex-col items-end gap-2 pt-0.5">
				{isLive ? (
					<span className="inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-emerald-400">
						<span className="relative flex h-1.5 w-1.5">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
							<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
						</span>
						Live
					</span>
				) : (
					<span className="inline-flex items-center rounded border border-zinc-800 px-2.5 py-1 text-[10px] uppercase tracking-widest text-zinc-600">
						Paused
					</span>
				)}

				<span
					className={`rounded border px-2.5 py-1 text-[10px] w-full text-center uppercase tracking-widest ${categoryStyle}`}
				>
					{metadata.category}
				</span>

				{metadata.github && (
					<Link
						href={metadata.github}
						target="_blank"
						rel="noopener noreferrer"
						className="group/gh inline-flex items-center gap-1 text-xs text-zinc-600 transition-colors hover:text-zinc-300"
					>
						GitHub
						<ArrowRight className="h-3 w-3 transition-transform group-hover/gh:translate-x-0.5" />
					</Link>
				)}
			</div>
		</article>
	);
}
