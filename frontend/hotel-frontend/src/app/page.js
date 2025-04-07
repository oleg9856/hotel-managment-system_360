import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-8">
      <header className="text-center mb-12">
        <Image
          className="mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold mt-4">Welcome to Hotel Management</h1>
        <p className="text-gray-400 mt-2">
          Manage your bookings and guests with ease.
        </p>
      </header>
      <main className="flex flex-col items-center gap-6">
        <Link
          href="/register"
          className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Go to Register Page
        </Link>
      </main>
    </div>
  );
}