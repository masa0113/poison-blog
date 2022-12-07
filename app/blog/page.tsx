import { FC, use } from "react";
import { client } from "@/api/client";
import { List } from "@/types/List";


async function getData() {
    return await client.get<List>({ endpoint: "blogs" });
}

const BlogTop: FC = () => {
    const list = use(getData());

    if (!list) return <div />;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            {list.contents.map((v) => (
                <a
                    key={v.id}
                    style={{
                        cursor: "pointer",
                    }}
                    href={`/blog/${v.id}`}
                >
                    {v.title}
                </a>
            ))}
        </div>
    );
};

export default BlogTop;
