import {Badge} from "@/components/ui/badge"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {LinkedinIcon, Mail, Github} from "lucide-react"
import Link from "next/link"
import {aboutData} from "@/content/cv/about-data";


export default function CVPage() {
    return (
        <div className="min-h-screen from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto py-8 px-4">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-2 text-primary">{aboutData.name}</h1>
                    <p className="text-xl text-muted-foreground mb-4">{aboutData.title}</p>

                    <div className="flex justify-center space-x-4">
                        {Object.entries(aboutData.contact).map(([key, contact], index) => {
                            // Dynamically choose the icon based on the contact type
                            let IconComponent;
                            switch (contact.icon) {
                                case 'mail':
                                    IconComponent = Mail;
                                    break;
                                case 'linkedin':
                                    IconComponent = LinkedinIcon;
                                    break;
                                case 'github':
                                    IconComponent = Github;
                                    break;
                                default:
                                    IconComponent = null;
                            }

                            return (
                                <Link key={index} href={contact.link}
                                      className="flex items-center text-primary hover:text-primary-focus transition-colors"
                                      target="_blank" rel="noopener noreferrer">
                                    {IconComponent && <IconComponent
                                        className="w-4 h-4 mr-2"/>}
                                </Link>
                            );
                        })}
                    </div>
                </header>


                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{aboutData.aboutMe.heading}</h2>
                    <Card className="bg-card/50 backdrop-blur-sm">
                        <CardContent className="pt-6">
                            <p className="text-card-foreground">{aboutData.aboutMe.description}</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{aboutData.experience.heading}</h2>
                    {aboutData.experience.items.map((exp, index) => (
                        <Card key={index}
                              className="mb-4 bg-card/50 backdrop-blur-sm hover:bg-card/75 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-primary">{exp.role}</CardTitle>
                                <CardDescription>{exp.company} | {exp.startDate} - {exp.endDate}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-2 text-card-foreground">{exp.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex}>{tech}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{aboutData.skills.heading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(aboutData.skills.items).map(([category, skills]) => (
                            <Card key={category}
                                  className="bg-card/50 backdrop-blur-sm hover:bg-card/75 transition-colors">
                                <CardHeader>
                                    <CardTitle
                                        className="capitalize text-primary">{category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill, index) => (
                                            <Badge key={index}>{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{aboutData.education.heading}</h2>
                    <Card
                        className="bg-card/50 backdrop-blur-sm hover:bg-card/75 transition-colors">
                        <CardHeader>
                            <CardTitle
                                className="text-primary">{aboutData.education.degree}</CardTitle>
                            <CardDescription>{aboutData.education.institution} | {aboutData.education.years}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-card-foreground">{aboutData.education.thesis}</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{aboutData.projects.heading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {aboutData.projects.items.map((project, index) => (
                            <Card key={index}
                                  className="bg-card/50 backdrop-blur-sm hover:bg-card/75 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-primary">{project.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-2 text-sm text-card-foreground">{project.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex}>{tech}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
