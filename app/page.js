// "use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div><UserButton />
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to AutoPrep
      </h1>
      <p className="text-center mt-4">
        Your AI-powered assistant for efficient task management.
      </p>
      <div className="flex justify-center mt-8">
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={500}
          height={300}
        />
      </div>
      <div className="mt-10 text-center">
        <p className="text-lg">Get started by exploring our features:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Task Automation</li>
          <li>AI Recommendations</li>
          <li>Real-time Collaboration</li>
          <li>Customizable Workflows</li>
        </ul>
      </div>
    </div>
  );
}
