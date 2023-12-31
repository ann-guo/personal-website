import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getSingleBlogBySlug } from "../contentful.server"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const richTextRenderOptions = {
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { data } = node;
            const { uri } = data;
            return (
                <a
                    className="text-primary underline"
                    target="_blank"
                    href={uri}
                >
                    {children[0]}
                </a>
            );
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
            if(node.content.find(item=>
                item.marks?.find(mark=> mark.type==='code')
                )
            ) {        
            return (
                <div classname="mx-10">
                    <pre class="bg-slate-300">
                        <code className="text-gray-900 p-10">{children}</code>
                    </pre>
                </div>
            
            
            )} else {
                return (
                    <p className="text-gray-700 mb-4 mt-4 dark:text-white">{children}</p>
                )
            }
            
        },
        [BLOCKS.HEADING_1]: (node, children) => {
            return (
                <h2 className="text-4xl">{children}</h2>
            )
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return (
                <h2 className="text-3xl">{children}</h2>
            )
        },
        renderMark: {
            [MARKS.CODE]: (text) => {
              return (
                <pre><code>{text}</code></pre>
              );
            },
          },
    },
};

export async function loader({ params }) {
    const blog = await getSingleBlogBySlug(params.slug)
    return json({ blog })
}

export const meta = ({ data }) => {
    const { blog } = data;
    return [
        { title: blog.title },
        { name: "description", content: blog.description },
    ];
};

export default function () {
    const { blog } = useLoaderData()
    return (
       
      
        <div className="mx-8 md:mx-16 lg:mx-32 xl:mx-32">
        <main className="">
            <h1 className="mt-8 mb-8 text-3xl sm:text-6xl">{blog.title}</h1>
            <img src={blog.coverImage.url} width='100%' height='50%' className="mb-8" alt={blog.coverImage.description} />
            {documentToReactComponents(blog.content.json, richTextRenderOptions)}
        </main>
        </div>
       
        
    )
}