import React, { useRef } from "react";
import music from './music.mp3';
export default function UseRef() {

	const audioTag = useRef(null);

	const play = () => {
		audioTag.current.play()
	}

	const pause = () => {
		audioTag.current.pause()
	}

	return (
		<>
			<audio src={music} type="audio/mp3" controls ref={audioTag}></audio>
			<button onClick={play}>play</button>
			<button onClick={pause}>pause</button>
		</>
	);
}