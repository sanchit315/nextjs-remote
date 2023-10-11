import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav>This is my nav from main app 1</Nav>

      <main className="flex-1 p-24">
        <h1 className="text-4xl">Welcome to main app port: 3000</h1>
      </main>

      <Footer />
    </>
  );
}
