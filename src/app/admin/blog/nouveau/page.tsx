"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

// Redirect to main blog page with new article trigger
export default function NouvelArticlePage() {
  const router = useRouter();

  React.useEffect(() => {
    // Set flag for parent page to open editor
    sessionStorage.setItem("blog_new_article", "true");
    router.replace("/admin/blog");
  }, [router]);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Ouverture de l&apos;éditeur...</p>
      </div>
    </div>
  );
}
