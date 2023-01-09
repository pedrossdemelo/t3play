import type { InferGetServerSidePropsType } from "next";
import Link from "next/link";

export async function getServerSideProps() {
  // await 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    props: {
      hello: {
        data: {
          greeting: "Hello World!",
        },
      },
    },
  };
}

export default function Cool({ hello }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>I took 300ms xD. Data: {JSON.stringify(hello)}</h1>
      <Link href="/">goto /</Link>
      <Link href="/coolapp">goto /coolapp</Link>
    </>
  );
}
