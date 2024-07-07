"use client";
import ArticlePage from "@/components/Pages/Dashboard/blogPage/ArticlePage";
import BlogPage from "@/components/Pages/Dashboard/blogPage/BlogPage";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function Article({ params }: { params?: Params }) {
  // if there is no id just navigate to /app/blog
  return (
    <>
      <ArticlePage params={params} />;
    </>
  );
}

export default Article;
