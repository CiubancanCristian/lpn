import React from "react";

const Video = ({ src }) => (
	<iframe
		allowFullScreen
		title="demo"
		frameBorder="0"
		height="315"
		src={src}
		width="560"
	/>
);
export default Video;
