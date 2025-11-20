import Link from "next/link";

export default function Second() {
  return (
    <>
      <strong>Hello</strong><br/>
      <Link href="/">Home Page</Link><br/>
      <Link href="/secondpage/1">Second Page 1</Link><br/>
      <Link href="/secondpage/2">Second Page 2</Link><br/>
      <Link href="/secondpage/3">Second Page 3</Link><br/>
    </>
  );
}
