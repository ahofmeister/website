import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/lib/mdx-files";
import { cn } from "@/lib/utils";

export const metadata = {
	title: "Projects",
	description: "Private projects I am working on.",
};

export default function ProjectPage() {
	const allProjects = getAllProjects();
	return (
		<div className="mb-12 space-y-4">
			<p className="text-lg text-muted-foreground max-w-2xl">
				A collection of projects I'm currently working on and have built.
			</p>

			<ul className="space-y-16 sm:space-y-4">
				{allProjects
					.sort((a, b) => a.metadata.order - b.metadata.order)
					.map((project) => (
						<li
							key={project.metadata.title}
							className="group relative transition-all duration-300"
						>
							<div className="flex flex-col space-y-5 py-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg ">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
									<div className="flex items-center gap-2">
										<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
											{project.metadata.title}
										</h2>
										<Link
											href={project.metadata.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-foreground transition-colors"
											aria-label={`Visit ${project.metadata.title}`}
										>
											<ArrowUpRight className="h-5 w-5" />
										</Link>
									</div>

									<div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
										<Badge
											variant="outline"
											className={cn("border-2 font-medium transition-colors", {
												"border-yellow-500/50 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400":
													project.metadata.status === "development",
												"border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400":
													project.metadata.status === "live",
											})}
										>
											{project.metadata.status}
										</Badge>
									</div>
								</div>

								<p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
									{project.metadata.description}
								</p>

								<div className="flex flex-wrap gap-2 pt-2">
									{project.metadata.technologies.map((tech) => (
										<Badge
											key={tech}
											variant="default"
											className="text-xs font-medium"
										>
											{tech}
										</Badge>
									))}
								</div>

								<Link
									href={project.metadata.github}
									target="_blank"
									className="inline-flex items-center gap-2 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl hover:text-foreground transition-colors"
									rel="noopener noreferrer"
									aria-label={`View ${project.metadata.title} on GitHub`}
								>
									<span>View on GitHub</span>
									<ArrowRight className="h-5 w-5" />
								</Link>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
}
