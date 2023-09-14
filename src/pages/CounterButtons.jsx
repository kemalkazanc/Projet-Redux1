import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, multiply, divide } from "../features/counter";

export default function CounterButtons() {
  const dispatch = useDispatch();
  //console.log("l'incrementation", increment());
  return (
    <div className="mb-4">
      <p className="mb-2 text-slate-50">Modifier le compteur de la valeur </p>
      <button
        onClick={() => dispatch(increment())}
        className="w-10 h-10 mr-2 text-lg rounded bg-slate-100 text-slate-900"
      >
        +1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="w-10 h-10 mr-2 text-lg rounded bg-slate-100 text-slate-900"
      >
        -1
      </button>
      <button
        onClick={() => dispatch(multiply())}
        className="w-10 h-10 mr-2 text-lg rounded bg-slate-100 text-slate-900"
      >
        X10
      </button>
      <button
        onClick={() => dispatch(divide())}
        className="w-10 h-10 mr-2 text-lg rounded bg-slate-100 text-slate-900"
      >
        /10
      </button>
    </div>
  );
}
