
import React, { useState } from "react";


//create your first component
const Home = () => {
	
	 const [inputValue, setInputValue] = useState ("");
	 const [saveTask, setSaveTask] = useState ([]);
	 const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			setSaveTask([...saveTask, inputValue])
			setInputValue("")

		}
	 }
	 const handleDeleteTask = (index) => {
		setSaveTask(saveTask.filter((_, currentIndex) => index !== currentIndex));
	 }
		
	 return (
		 	<div className="container">
		 		<h1>My to do's </h1>

				<div>
		 				<input type="text" onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={handleKeyDown} 
		 				placeholder="Things you need to do"></input>

				</div>
		
		 		<ul>
					{saveTask.map((t, index) => (
					<li key={index}> {t} 
		 			<i className="fas fa-trash" 
					onClick={() => handleDeleteTask(index)}>
					</i>
					</li>
					))}
		 		</ul>

				<div>{saveTask.length} tasks to do left</div>
		 	</div>
		)
	};
	
	export default Home;
	
	

























	
	// const [count, setCount] = useState (0);
	
	// useEffect(() => {
		// 	// Actualiza el título del documento usando la API del navegador
		// 	document.title = `You clicked ${count} times`;
		//   });
		
		// return (
			// 	<div>
			// 		<p> Has hecho click {count} veces</p>
	// 		<button onClick={() => setCount(count + 1)}>
	// 			Hazme click!
	// 		</button>
	
	// 		<button onClick={()=> setCount (count - 1)}>
	// 			Hazme click para disminuir
	// 		</button>
	// 	</div>
	
	// )