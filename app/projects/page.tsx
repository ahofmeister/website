import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllProjects, type Project } from "@/lib/mdx-files";

export const metadata: Metadata = {
	title: "Projects | Alexander Hofmeister",
	description:
		"Private and open-source projects I have built and am currently working on.",
};

function ProjectCard({ project }: { project: Project }) {
	const projectMetadata = project.metadata;
	return (
		<article
			key={projectMetadata.title}
			className="group flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
		>
			<div className="mb-4 flex items-start justify-between gap-3">
				<Link
					href={projectMetadata.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Visit ${projectMetadata.title}`}
					className="inline-flex items-center gap-1 text-xl font-bold text-white transition-colors hover:text-emerald-400"
				>
					{projectMetadata.title}
					<ArrowUpRight className="h-5 w-5 opacity-60" />
				</Link>

				<Badge variant={`project_${projectMetadata.status}`}>
					{projectMetadata.status}
				</Badge>
			</div>

			<p className="mb-5 flex-1 leading-relaxed text-zinc-400">
				{projectMetadata.description}
			</p>

			<div className="mb-4 flex flex-wrap gap-2">
				{projectMetadata.technologies.map((tech) => (
					<span
						key={tech}
						className="rounded-full border border-emerald-500/40 px-3 py-1 text-xs text-emerald-400"
					>
						{tech}
					</span>
				))}
			</div>

			{projectMetadata.github && (
				<Link
					href={projectMetadata.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View ${projectMetadata.title} on GitHub`}
					className="group/link inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
				>
					View on GitHub
					<ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
				</Link>
			)}
		</article>
	);
}

export default function ProjectPage() {
	const allProjects = getAllProjects();
	return (
		<section className="mb-12">
			<p className="mb-10 text-lg text-zinc-400">
				A collection of projects I&apos;m currently working on and have built.
			</p>

			<div className="grid gap-6 md:grid-cols-2">
				{allProjects
					.sort((a, b) => a.metadata.order - b.metadata.order)
					.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
			</div>
		</section>
	);
}
