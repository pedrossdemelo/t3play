import Link from "next/link";
import { Suspense } from "react";

async function getData() {
  // await 3 seconds
  const start= Date.now();
  await new Promise((resolve) => setTimeout(resolve, 8000));
  const timeItTook = Date.now() - start;

  return {
    data: {
      greeting: `response sent at ${new Date().toISOString()}}. Waited ${timeItTook}ms`,
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
