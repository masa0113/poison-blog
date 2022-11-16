import { client } from '@/api/client';
import { ListItem } from '@/types/List';
import { FC, use } from 'react';

type Props = {
    params: { id: string };
};

async function getData(contentId: string) {
    return await client.get<ListItem>({ endpoint: "blogs", contentId });
}


const BlogId: FC<Props> = ({ params }) => {
    const post = use(getData(params.id));

    if (!post) return <div>not</div>
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}

export default BlogId