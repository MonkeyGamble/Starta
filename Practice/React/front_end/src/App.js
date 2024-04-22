import React, { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
	const [check, setCheck] = useState(true);

	return (
		<div>
			<button onClick={() => setCheck(!check)}>Change Visible</button>
			<div>{check && <button>Click!</button>}</div>
		</div>
	);
}
