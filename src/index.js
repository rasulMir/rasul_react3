import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import UseContext from './useContext/UseContext';
// import UseContext2 from './useContext2/UseContext2';
// import Task1 from './tasks/task1/Task1';
// import Task2 from './tasks/task2/Task2';
// import Task3 from './tasks/task3/Task3';
// import Task4 from './tasks/task4/Task4';
// import Task5 from './tasks/task5/Task5';
// import Task6 from './tasks/task6/Task6';
// import UseRef from './useRef/UseRef';
// import UseRef2 from './useRef2/UseRef2';
// import UseReducer from "./useReducer/UseReducer";
// import UseReducer2 from './useReducer2/UseReducer2';
import UseCallback from './useCallback/UseCallback';
import UseImperHandle from './useImperativeHandle/UseImperHandle';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
		<div className='wrapper'>
    	{/* <Task1/>
    	<Task2/>
			<Task3/>
			<Task4/>
			<Task5/>
			<Task6/>
			<UseRef></UseRef>
			<UseRef2></UseRef2> */}
			{/* <UseContext/> */}
			{/* <UseContext2/> */}
			{/* <UseReducer/> */}
			{/* <UseReducer2/> */}
			{/* <UseCallback/> */}
			<UseImperHandle/>
		</div>
  </React.StrictMode>
);
