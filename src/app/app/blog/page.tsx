import PostComponent from "@components/appComponents/blogPage/PostComponent";
import Tooltip from "@components/appComponents/blogPage/Tooltip";


function BlogPage() {
  return (
    <>
      <Tooltip />
      <section className=" mx-auto grid max-w-5xl place-items-center gap-y-8 py-8">
        <PostComponent id={1} image />
        <PostComponent id={2} />

        <PostComponent id={3} image />
        <PostComponent id={4} />

        <PostComponent id={5} image />
        <PostComponent id={6} />

        <PostComponent id={7} image />
        <PostComponent id={8} />
      </section>
    </>
  );
}

export default BlogPage;
