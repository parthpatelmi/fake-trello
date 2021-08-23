import './App.scss';
import TodoContainer from "./container/TodoContainer/index";
import ProgressContainer from "./container/ProgressContainer";
import DoneContainer from "./container/DoneContainer";

function App() {
    return (
        <div className="container py-5">
            <div className="d-flex align-items-start">
                <TodoContainer/>
                <ProgressContainer/>
                <DoneContainer/>
            </div>
        </div>
    );
}

export default App;
