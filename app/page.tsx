import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            News Homepage Layout
          </h2>
          <p className="text-gray-600">
            Header component is ready. Content sections coming next.
          </p>
        </div>
      </main>
    </div>
  );
}
