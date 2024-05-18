import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
}

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `pages/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
    },
    computedFields,
}))

export const Snippet = defineDocumentType(() => ({
    name: 'Snippet',
    filePathPattern: `**/snippets/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the snippet',
            required: true,
        },
        publishedAt: {
            type: 'date',
            description: 'The date the snippet was published at',
            required: true,
        },
        tags: {
            type: 'list',
            of: {type: 'string'},
            description: "A list of common technical keywords for this snippet",
            required: true
        }
    },
    computedFields,
}))

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `**/projects/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the project',
            required: true,
        },
        summary: {
            type: 'string',
            description: 'A brief description of the project',
            required: true
        },
        externalUrl: {
            type: 'string',
            description: 'The url to the hosted project',
            required: false
        }
    },
    computedFields,
}))

const options = {
    onVisitHighlightedLine(node) {
        node.properties.className.push('line--highlighted')
    },
}

export default makeSource({
        contentDirPath: "./content",
        documentTypes: [Snippet, Project, Page],
        mdx: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
                [
                    rehypePrettyCode, options
                ],
            ],
        },
    }
)
