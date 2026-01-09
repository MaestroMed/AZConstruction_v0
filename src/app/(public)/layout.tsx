import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HomepageStructuredData } from "@/components/seo/StructuredData";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <HomepageStructuredData />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}








