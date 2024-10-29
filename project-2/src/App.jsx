import "./App.css";
import Contact from "./components/contact-header/contact";
import Navigation from "./components/navigation/navi";
import ContactForm from "./components/contact-form/contactForm";


function App() {
  return (
    <>
      <Navigation />
      <main className="main_container">      
        <Contact />
        <ContactForm />
      </main>

    </>
  );
}

export default App;
