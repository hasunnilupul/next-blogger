import Tag from '@/types/Tag';
import User from '@/types/User';

type Post = {
    id: string;
    datetime: string;
    title: string;
    tags: Array<Tag>;
    contentShort: string;
    contentHtml: string;
    slug: string;
    user: User;
}

export default Post;