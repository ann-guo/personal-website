import { json } from "@remix-run/node";
import { getAllBlogs } from "../contentful.server";
import { Link, useLoaderData } from "@remix-run/react";

export const meta = () => {
    return [
        { title: "Blog | Ann" },
        { name: "description", content: "Ann's blog" },
    ];
};

export async function loader() {
    const blogs = await getAllBlogs();
    return json({ blogs })
}

export default function () {
    const { blogs } = useLoaderData();
    return (
        <main className="container mx-auto">
            <h1 className="text-3xl sm:text-6xl">Blogs</h1>
            <ul className="mt-8">
                {
                    blogs.map(blog => {
                        return (
                            <li key={blog.slug} className="mb-8 ">
                                <Link to={blog.slug}>
                                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${blog.coverImage.url})` }} title={blog.coverImage.description}>
                                        </div>
                                        <div className="bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal dark:bg-true-gray-700">
                                            <div className="mb-8">
                                                <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">{blog.title}</div>
                                                <p className="text-gray-700 text-base dark:text-gray-100">{blog.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}