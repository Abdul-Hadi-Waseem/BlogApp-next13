import { posts } from "../../../../data/posts";
import styles from "./page.module.css";
import Date from "../../../date";
import Link from "next/link";

export async function generateStaticParams() {
  const ids: string[] = ["1", "2"];
  return ids.map((id) => ({ id: id }));
}

async function getPost(id: string) {
  const post = posts.find((post) => {
    return post.id === id;
  });
  if (post != undefined) return post;
}
export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <main className={styles.main}>
      <div className={styles.centre}>
        {post!.title}
        <br />
        <Date dateString={post!.date} />
        <br />
        {post!.description}
<div className={styles.description}>

        <Link href={"/"}>
          <i>Go Home</i>
        </Link>
      </div>
</div>
    </main>
  );
}
