import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
      <Link href="/">
        Go back to the home page
      </Link>
    </div>
  );
}