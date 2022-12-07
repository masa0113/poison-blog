import { useState } from "react";
import { ListItem } from "@/types/List";
import { client } from "@/api/client";

export const usePost = (contentId: string | null) => {
    const [data, setData] = useState<ListItem | null>(null);

    const getData = async () => {
        if (!contentId) return;

        await client
            .get<ListItem>({ endpoint: "blogs", contentId })
            .then((res) => {
                if (res) setData(res);
            })
            .catch((err) => {
                throw err;
            });
    };
    return { data, getData };
};
