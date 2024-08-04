import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='mb-5'>Authorization Page - Coming Soon</div>
      <div>
        <Link
          href='/order'
          className='text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded'
        >
          Go to Order Instead➡️
        </Link>
      </div>
    </>
  );
}
