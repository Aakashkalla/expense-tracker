"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full mt-4 py-2 rounded-lg text-sm font-medium transition
        ${
          pending
            ? "bg-cyan-500/40 cursor-not-allowed"
            : "bg-cyan-500 hover:bg-cyan-400"
        }
        text-black`}
    >
      {pending ? "Saving setup..." : "Continue"}
    </button>
  );
}
