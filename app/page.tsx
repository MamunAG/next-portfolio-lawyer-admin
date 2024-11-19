import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <h1 className="font-bold text-2xl">
        <em> Welcome to KKK Law House!</em>
      </h1>
      <Link href={"/admin"} className="text-blue-600 underline mt-3">
        Got to Admin page
      </Link>
    </div>
  );
}
