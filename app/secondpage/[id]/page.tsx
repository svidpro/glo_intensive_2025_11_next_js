import Link from "next/link";

export default async function ID({params}: any) {
  console.log(params)
  const { id } = await params
  return (
    <>
      <strong>Params Id = {id}</strong><br></br>
      <Link href="/secondpage">Second Page</Link>
    </>
  );
}
