import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/main";

export default function App() {
  return (
    <div className="flex justify-between flex-col px-2  w-full mx-auto h-screen gap-3 max-w-[1200px]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
