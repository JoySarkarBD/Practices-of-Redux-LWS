import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counter/actions";

export default function Counter() {

    const count = useSelector(state=>state.counter.value);
    const dispatch = useDispatch();

    const incrementHandler = ()=>{
        return dispatch(increment())
    }
    const decrementHandler = ()=>{
        return dispatch(decrement())
    }
    const resetHandler = ()=>{
        return dispatch(reset())
    }
    
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">From Hook Counter Component</div>
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>incrementHandler()}
                >
                    Increment
                </button>
                <button
                    className="bg-green-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>resetHandler()}
                >
                    Reset
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>decrementHandler()}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}