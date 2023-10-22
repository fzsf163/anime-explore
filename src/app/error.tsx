"use client"; // Error components must be Client Components

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="text-center space-y-4 mt-10">
      <h2>Something went wrong!</h2>
      <button
        className="first-letter:text-2xl font-mono bg-orange-400 px-2 py-3"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
