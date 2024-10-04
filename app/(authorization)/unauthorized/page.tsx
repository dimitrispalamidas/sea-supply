import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <p className='mt-4'>
        <Link href='/order' className='text-blue-500 underline'>
          Go to order
        </Link>{" "}
        instead.
      </p>
    </div>
  );
};

export default UnauthorizedPage;
