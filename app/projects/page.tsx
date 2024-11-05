import {ArrowUpRight, Github} from "lucide-react";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {allProjects} from "contentlayer/generated";
import {cn} from "@/lib/utils";

export default function ProjectPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-16">
            <ul className="space-y-24">
                {allProjects.map((project) => (
                    <li key={project.title} className="group relative">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-baseline justify-between">
                                <div className={"flex space-x-4"}>
                                <h2 className="text-2xl font-semibold">{project.title}
                                </h2>
                                    <Link href={project.href as string}>
                                        <ArrowUpRight/>
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <Badge
                                        variant="default"
                                        className={cn(
                                            "border text",
                                            {
                                                "border-yellow-500 text-yellow-500": project.status === "Development",
                                            }
                                        )}
                                    >
                                        {project.status}
                                    </Badge>

                                    {project.github && (
                                        <Link className="ml-4" href={project.github} target="_blank"
                                              rel="noopener noreferrer">
                                            <Github/>
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-400 max-w-2xl">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech) => (
                                    <Badge key={tech} variant="default" className="">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
