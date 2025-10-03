import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AppRouters from "../Route/AppRouters";

export default function Mainlayout({ darkMode, setDarkMode }) {
  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-[80px] px-4">
        <AppRouters />
      </main>
      <Footer />
    </>
  );
}
