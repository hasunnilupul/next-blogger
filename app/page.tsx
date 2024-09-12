import Header from "@/components/header";
import PostItem from "@/components/posts/post-item";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header title="Latest" summary="A blog created with Next.js and Tailwind.css" />
      <div className="flex flex-col items-center justify-start *:border-t *:border-gray-200">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </>
  );
}
