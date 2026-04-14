"use client";

import { useRouter, useParams } from "next/navigation";
import * as React from "react";

// Redirect to main blog page with edit trigger
export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  React.useEffect(() => {
    sessionStorage.setItem("blog_edit_id", id);
    router.replace("/admin/blog");
  }, [router, id]);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Ouverture de l&apos;article...</p>
      </div>
    </div>
  );
}
