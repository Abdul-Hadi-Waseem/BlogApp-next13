'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Epost() {
  const router=useRouter();
    return (
      <main className={styles.main}>
        <div className={styles.centre}>
          <h1>

          Post
          </h1>
          </div>
        <Link href={"/"}>
        <i>
        Go Home
        </i>
      
        </Link>
        {/* <button onClick={()=>router.push("/")}>Go Back To Home</button> */}
      </main>
    );
  }
   