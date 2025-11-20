import Link from "next/link";

export default function Home() {
  return (
    <>
      <strong>Hello</strong><br/>
      <Link href="/secondpage">Second Page</Link>
    </>
  );
}
