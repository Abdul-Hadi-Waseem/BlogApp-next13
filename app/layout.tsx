import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import styles from "./layout.module.css"
import utilStyles from "./utils.module.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
  const name="Abdul Hadi Waseem";
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <div className={styles.container}>
        <header className={styles.header}>
        <Link href={"/"}>
        <Image
              priority
              src="/images/me.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
              />
      
        </Link>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
              {children}
              </header>
              </div>
        </body>
    </html>
  )
}
