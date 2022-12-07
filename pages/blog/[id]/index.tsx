import { usePost } from '@/hooks/usePost';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const BlogId: React.FC = () => {
    const router = useRouter()
    const id = router.query.id && typeof router.query.id === 'string' ? router.query.id : null
    const { data, getData } = usePost(id)

    useEffect(() => {
        getData()
    }, [router])

    if (!data) return <div />
    return (
        <div>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
    );
}

export default BlogId