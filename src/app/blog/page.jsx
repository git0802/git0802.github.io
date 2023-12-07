import Swipe from "@/components/Swipe";
import BlogCard from "@/components/BlogCard";
import BlogData from "@/data/blog.json";

export default function Blog() {
  return (
    <Swipe prev={"/work"} next={"/contact"}>
      <main className="min-h-screen max-w-3xl mx-auto flex flex-col p-2 pb-20">
        <h1 className=" text-5xl my-52">
          This is the place where I share my <span className="gradient-text1s">knowledge</span>, experience, ideas and
          thoughts.
        </h1>
        <div className="flex flex-col gap-10">
        {BlogData.map((blog, index) => (
          <div key={index}>
            <BlogCard data={blog} />
          </div>
        ))}
        </div>
      </main>
    </Swipe>
  );
}
