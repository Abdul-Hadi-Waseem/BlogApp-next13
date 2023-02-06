import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { posts } from "../data/posts";
import Date from "./date";

const inter = Inter({ subsets: ["latin"] });
type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
};
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centre}>
        <h1>Welcome To Blog App</h1>
      </div>
      <div>
        {posts.map(({ id, title, date, description }: Post) => (
          <>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <Date dateString={date} />
            <br />
            <br />
          </>
        ))}
      </div>
      {/* 
      <Link href={"/posts"}>
        <i>
          Visit Post
          </i>
          </Link>
          <Link href={"/account"}>
        <i>
          Visit Account
          </i>
          </Link> */}
    </main>
  );
}
