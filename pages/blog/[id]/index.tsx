import { client } from '../../../api/client';
import { List, ListItem } from '../../../types/List';

interface Props {
    data: ListItem
}

const BlogId: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
    );
}

export const getStaticPaths = async () => {
    const data: List = await client.get({ endpoint: "blogs" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return { paths, fallback: false };
};

export const getStaticProps = async (context: ListItem) => {
    const id = context.params.id
    const data = await client.get({ endpoint: "blogs", contentId: id });

    return {
        props: {
            data,
        },
    };
};

export default BlogId