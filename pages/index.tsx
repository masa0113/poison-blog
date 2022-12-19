import { Grid, Image, Link } from "@chakra-ui/react";
import { client } from "../api/client";
import { List } from "../types/List";

interface Props {
  data: List;
}

const BlogTop: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Grid gridTemplateColumns='1fr 1fr 1fr' gap='16px'>
      {data.contents.map((v) => (
        <Link

          key={v.id}
          style={{
            cursor: "pointer",
          }}
          href={`/blog/${v.id}`}
        >
          {v.title}
          <Image width='100%' src={v.eyecatch.url} />

        </Link>
      ))}
    </Grid>
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
