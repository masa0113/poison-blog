import styles from '../styles/Home.module.css'
import { client } from '.././api/client'
import Link from 'next/link'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <p>{blog.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      data: data.contents,
    },
  };
};