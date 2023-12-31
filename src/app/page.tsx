import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <h1 className="mb-4 text-3xl">Frontend Mentor</h1>
      <Link href="/frontend-mentor/01-results-summary-component">01 Results Summary Component</Link>
      <Link href="/frontend-mentor/02-qr-code-component">02 QR Code Component</Link>
      <Link href="/frontend-mentor/03-3-column-preview-card-component">03 3 Column Preview Card</Link>
    </main>
  );
}
