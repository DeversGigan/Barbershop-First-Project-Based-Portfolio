import Navbar from "../Navbar";

export default function NavbarExample() {
  return <Navbar onBookClick={() => console.log("Book clicked")} />;
}
