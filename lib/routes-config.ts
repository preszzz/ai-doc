// for page navigation & to sort on leftbar
import ROUTES from "@/utils/routes-map"

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};



type Page = { title: string; href: string };

function getRecursiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecursiveAllLinks(temp));
  });
  // console.log(ans)
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecursiveAllLinks(it)).flat();
