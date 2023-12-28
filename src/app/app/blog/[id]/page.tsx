import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function ArticlePage({ params }: Params) {
  return <div>blog id {params.id}</div>;
}

export default ArticlePage;
