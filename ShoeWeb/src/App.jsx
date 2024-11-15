import React from "react";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import AuthForm from "./components/Authen";

function App() {
  return (
<<<<<<< HEAD
    <>
     <div className="min-h-screen bg-gray-100">
=======
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
>>>>>>> refs/remotes/origin/main
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center mb-8">
          <SearchBar />
        </div>
        <div className="mb-8">
          <AuthForm />
        </div>

        <ContactPage />
      </div>
      <div>
      <Footer />
      </div>
      </div>
    </>
   
  )
}

        

export default App;