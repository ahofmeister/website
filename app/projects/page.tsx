import {allProjects} from "@/.contentlayer/generated"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export default function ProjectsPage() {
    return (
        <div className={'m-10'}>
            <div className="grid grid-cols-2 gap-12">
                {allProjects.map(project =>
                    <Card  key={project._id} className="w-[350px]">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <CardDescription>{project.summary}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Link href={project.slug}>Learn more</Link>

                            <div className={'mt-2'}>
                                <a href={project.externalUrl} target={'_blank'} rel="noreferrer"
                                   className={'underline decoration-primary underline-offset-4'}>
                                    Visit
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
    )
}
