import AsciiTitle from "./AsciiTitle";

export default function Header() {
  return (
    <header className="roster-header">
      <AsciiTitle text="765" className="ascii-title" />
      <h2 className="hero-subtitle">ROSTER</h2>
      <p className="hero-tagline">
        a completely unnecessary roster for a group of people who talk every
        day anyway
      </p>
    </header>
  );
}
