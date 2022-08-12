import MainInfo from '../src/components/MainInfo';
import About from '../src/components/About';
import Interests from '../src/components/Interests';
import Social from '../src/components/Social';

function App() {
    return (
        <div className="wrapper">
            <MainInfo />
            <About />  
            <Interests />
            <Social />   
        </div>
    )
}

export default App