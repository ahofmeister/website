import {notFound} from "next/navigation"
import {allSnippets} from "contentlayer/generated"

import {Metadata} from "next"
import {format, parseISO} from "date-fns";
import {Mdx} from "@/components/mdx-components"


interface SnippetProps {
    params: {
        slug: string
    }
}

async function getSnippetFromParams(params: SnippetProps["params"]) {
    const slug = params?.slug
    const snippet = allSnippets.find((snippet) => snippet.slugAsParams === slug)

    if (!snippet) {
        return null
    }

    return snippet
}

export async function generateMetadata({
                                           params,
                                       }: SnippetProps): Promise<Metadata> {
    const snippet = await getSnippetFromParams(params)

    if (!snippet) {
        return {}
    }

    return {
        title: snippet.title,
    }
}

export async function generateStaticParams(): Promise<SnippetProps["params"][]> {
    return allSnippets.map((snippet) => ({
        slug: snippet.slug,
    }))
}

async function SnippetPage({params}: SnippetProps) {
    const snippet = await getSnippetFromParams(params)

    if (!snippet) {
        notFound()
    }

    return (
        <article className="py-8 mx-auto max-w-xl">
            <div className="mb-8 text-center">
                <time dateTime={snippet.publishedAt} className="mb-1 text-xs text-gray-600">
                    {format(parseISO(snippet.publishedAt), 'LLLL d, yyyy')}
                </time>
                <h1>{snippet.title}</h1>
            </div>
            <Mdx code={snippet.body.code}/>

        </article>
    )
}

export default SnippetPage
