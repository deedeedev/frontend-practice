import Link from "next/link";

import "./styles.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <h1 className="mb-4 text-3xl">Frontend Mentor</h1>
      <Link href="/frontend-mentor/01-results-summary-component">01 Results Summary Component</Link>
      <Link href="/frontend-mentor/02-qr-code-component">02 QR Code Component</Link>
      <Link href="/frontend-mentor/03-3-column-preview-card-component">03 3 Column Preview Card</Link>
      <Link href="/frontend-mentor/04-recipe-page">04 Recipe Page</Link>
      <Link href="/frontend-mentor/05-social-links-profile">05 Social Links Profile</Link>
    </main>
  );
}
