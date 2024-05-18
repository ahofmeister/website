import {compareDesc, format, parseISO} from 'date-fns'
import {allSnippets, Snippet} from 'contentlayer/generated'
import Link from 'next/link'

async function getSnippets() {
    return allSnippets.sort((a, b) => {
        return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    })
}

export default async function Snippets() {

    const snippets = await getSnippets()

    return (
        <div className="mx-auto max-w-2xl py-16">
            {snippets.map((snippet, id) => (
                <Snippet key={id} {...snippet} />
            ))}
        </div>)
}

const Tag = ({tag}: {tag: string}) => <div key={tag}>
      <span
          className="text-xs text-primary-foreground font-medium mr-2 px-2.5 py-0.5 rounded bg-primary">{tag}</span>
</div>

const Snippet = (snippet: Snippet) => (
    <div className="mb-3 py-6 border-b ">
        <time dateTime={snippet.publishedAt} className="block text-sm mb-5">
            {format(parseISO(snippet.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h2 className="text-lg">
            <Link href={snippet.slug}>
                {snippet.title}
            </Link>
        </h2>
        <div className={'mt-2 flex flex-row gap-2'}>{snippet.tags.map(tag => <Tag key={tag}
                                                                                  tag={tag}/>)} </div>
    </div>
)
