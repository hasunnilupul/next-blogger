type Tag = {
    id: string;
    label: string;
    slug: string;
}

export type TagWithPostsCount = {
    count: number;
} & Tag;

export default Tag;