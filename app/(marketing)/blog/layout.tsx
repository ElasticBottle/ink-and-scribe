import Footer from "~/app/(marketing)/_components/footer";
import { Header } from "../_components/navigation/header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
