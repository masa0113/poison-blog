import { client } from "../api/client";
import { List } from "../types/List";

interface Props {
  data: List;
}

const BlogTop: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.contents.map((v) => (
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

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      data,
    },
  };
};

export default BlogTop;
