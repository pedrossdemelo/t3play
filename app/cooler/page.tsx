import Link from "next/link";

async function getCool() {
  // await 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { cool: "cool" } as const;
}

export default async function Page() {
  const cool = await getCool();
  return (
    <>
      <Link href="/coolapp">goto /coolapp</Link>
      <h1>cooler: {cool.cool}</h1>
    </>
  )
}