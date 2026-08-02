import Background from "@/components/Background";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import RosterGate from "@/components/RosterGate";
import { roster } from "@/data/roster";

export default function Home() {
  return (
    <>
      <Background />
      <main className="page">
        <RosterGate>
          <Header />
          <div className="roster">
            {roster.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </RosterGate>
        <Footer />
      </main>
    </>
  );
}
