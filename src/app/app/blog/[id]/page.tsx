import ArticlePage from "@/components/Pages/Dashboard/blogPage/ArticlePage";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function Article({ params }: { params?: Params }) {
  return <ArticlePage />;
}

export default Article;
