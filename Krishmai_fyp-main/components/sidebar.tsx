import { LayoutGrid, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold underline">FYP PROJECT</h1>
      </div>
      <nav className="space-y-2">
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <LayoutGrid size={20} />
          Overview
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800"
        >
          <MessageSquare size={20} />
          Sentiment Analysis
        </Link>
      </nav>
    </div>
  );
}
