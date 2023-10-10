import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
    return (
        <div className='wrapper'>
            <hr className="horizontal-line" />
            <Header />
            <Home />
            {/*<Footer />*/}
        </div>
    );
}

export default App;
