import Link from "next/link";
import { Suspense } from "react";

async function getData() {
  // await 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 8000));

  return {
    data: {
      greeting: "Hello World!",
    },
  };
}

export default async function Page() {
  const { data } = await getData();

  return (
    <>
      <h1>I waited 3 secs XD Data: {JSON.stringify(data)}</h1>
      <Link href="/">goto /</Link>
      <Link href="/cool">goto /cool</Link>
      <Link href="/cooler">goto /cooler</Link>
    </>
  );
}
