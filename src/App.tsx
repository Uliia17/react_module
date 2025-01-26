import LeftBranch from "./components/LeftBranch";
import RightBranch from "./components/RightBranch";
import {ThemeProvider} from "./context/MyContext";

function App() {
    return (
        <ThemeProvider>
            <div>
                <LeftBranch/>
                <RightBranch/>
            </div>
        </ThemeProvider>
    );
}

export default App;

