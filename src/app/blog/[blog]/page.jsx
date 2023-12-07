"use client";
import BlogData from "@/data/blog.json";
// import absoluteUrl from "next-absolute-url";

export default function SingleBlog({ params }) {

  const blogSlug = params.blog;
  const data = BlogData?.find((item) => item.slug === blogSlug);
//   const origin = absoluteUrl();
  const websiteUrl = "https://portfolio-next-dilkhush-raj.vercel.app";

  const shareData = {
    title: data.title,
    text: data.description,
    url: websiteUrl + "/blog/" + data.slug,
  };

  const handleShareClick = async () => {
    try {
      await navigator.share(shareData);
      console.log("Page shared successfully");
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  return (
    <main className="max-w-3xl mx-auto my-10 p-2 min-h-screen">
      <div>
        <h1 className="text-4xl">{data.title}</h1>
        <h4>by - {data.author}</h4>
      </div>
      <img src={data.thumbnail} alt="" />
      <p>{data.content}</p>
      <button onClick={handleShareClick}>Share this page</button>
    </main>
  );
}
