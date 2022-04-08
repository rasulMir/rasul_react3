import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';
import Task3 from './task3/Task3';
import Task4 from './task4/Task4';
import Task5 from './task5/Task5';
import Task6 from './task6/Task6';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
		<div className='wrapper'>
    	{/* <Task1/> */}
    	{/* <Task2/> */}
			{/* <Task3/> */}
			{/* <Task4/> */}
			{/* <Task5/> */}
			{/* <Task6/> */}
		</div>
  </React.StrictMode>
);
