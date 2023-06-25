import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Abhoy Gorai",
    location: "Chandigarh Punjab",
    email: "abhoygorai04@gmail.com",
    availability: "Open for work",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
