import { client } from '../../../api/client';

export default function BlogId({ data }) {
    return (
        <div>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blogs" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await client.get({ endpoint: "blogs", contentId: id });

    return {
        props: {
            data,
        },
    };
};