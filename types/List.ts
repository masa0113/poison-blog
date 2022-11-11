export type List = {
    contents: Array<ListItem>
    totalCounts: number
    offset: number
    limit: number
}

export type ListItem = {
    id: string,
    params: {
        id: string
    },
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    content: string
    eyecatch: {
        url: string
        height: number
        width: number
    },
    category: {
        id: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        revisedAt: string
        name: string
    }
}