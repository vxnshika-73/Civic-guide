import Navbar from "../components/Navbar";
import ChatBot from "../components/ChatBot";
import SchemeForm from "../components/SchemeForm";
import OCRUpload from "../components/OCRUpload";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            CivicGuide AI
          </h1>
          <p className="text-gray-400 text-lg">
            Simplifying Government Services with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ChatBot />
          <SchemeForm />
          <OCRUpload />
        </div>
      </section>
    </div>
  );
};

export default Home;