import React from 'react';
import './Question.css';

const Question = () => {
	return (
		<div className='question'>
			<div>
				<h2>1. How raact works?</h2>
				<p>Ans: React is tool for UI components dynamically.
					React components work similarly to JavaScript function as they accept arbitary inputs called props. You can creatr as many components as necessary without jumble your code.
					Instead of menupulating the browser DOM, react create a virtual DOM in memory, where it does all the necessary manupulating before making the changes in the browser DOM.
					If you change anything in your code rect find out what changes ahve been made and it changes only what need to change
				</p>
			</div>

			<div>
				<h2>2. What is the difference between Props and State</h2>
				<p>Ans:</p>
				<p><strong>prpos:</strong></p>
				<p>i. props are use for receiving data from outside.</p>
				<p>ii.props are use only for pass data and one way binding.</p>
				<p>iii. data from props are read only it cann't be changes or modified</p>
				<p><strong>State:</strong></p>
				<p>i. State creat and amnage their own data.</p>
				<p>ii. state can change and modified their their data</p>
			</div>

		</div>
	);
};

export default Question;