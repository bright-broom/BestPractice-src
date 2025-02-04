import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  if (isAdminPage) {
    return children;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
