import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');

  return (
    <main>
      <h1 className="text-xl">Home page</h1>
    </main>
  );
}
