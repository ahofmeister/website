import type { Metadata } from "next";
import { ProjectItem } from "@/components/project-item";
import { getAllProjects } from "@/lib/mdx-files";

export const metadata: Metadata = {
	title: "Projects | Alexander Hofmeister",
	description:
		"Private and open-source projects I have built and am currently working on.",
};

export default function ProjectPage() {
	const allProjects = getAllProjects();

	return (
		<section className="mb-12">
			<p className="mb-10 text-lg text-zinc-400">
				A collection of projects I&apos;m currently working on and have built.
			</p>

			<div className="mb-0 flex items-center justify-between border-t border-foreground pt-2">
				<span className="font-mono text-xs uppercase tracking-widest text-zinc-600">
					Projects
				</span>
				<span className="font-mono text-xs tracking-wider text-zinc-700">
					{String(allProjects.length).padStart(2, "0")} entries
				</span>
			</div>

			<div>
				{allProjects
					.sort((a, b) => a.metadata.order - b.metadata.order)
					.map((project) => (
						<ProjectItem key={project.slug} project={project} />
					))}
			</div>
		</section>
	);
}
