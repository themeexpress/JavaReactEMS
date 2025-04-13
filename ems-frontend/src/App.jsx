import './App.css';
import EmployeeListComponent from "./components/EmployeeList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      {/* Main Content Container */}
      <div className="container my-4">
        <div className="d-flex justify-content-center">
          <EmployeeListComponent />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

