import React, { useState } from "react";
import line from "../assets/img/line.png";
import iconDown from "../assets/img/IconDown.png";
import iconUp from "../assets/img/iconUp.png";
import planet1 from "../assets/img/planet1.png";
import planet2 from "../assets/img/planet2.png";
import planet3 from "../assets/img/planet3.png";
import planet4 from "../assets/img/planet4.png";
// //import css
import "../index.css";

const Faq = () => {
	const [clicked, setClicked] = useState("false");
	return (
		<div className="container">
			<div className="container1">
				<h1>FAQ</h1>
				<img className="immgline" src={line} alt="" />
				<img
					className="immg"
					style={{ position: "absolute", top: "1795px" }}
					src={planet1}
					alt=""
				/>
				<img
					className="immg"
					style={{ position: "absolute", top: "1923px" }}
					src={planet2}
					alt=""
				/>
				<img
					className="immg"
					style={{ position: "absolute", top: "1154x" }}
					src={planet3}
					alt=""
				/>
				<img
					className="immg"
					style={{ position: "absolute", top: "2292px" }}
					src={planet4}
					alt=""
				/>
			</div>
			<div className="container2">
				<div className="div1" onClick={() => setClicked(!clicked)}>
					<div className="flex">
						<h2>How to get inspired using ScopArt?</h2>
						<div>
							{clicked ? (
								<img src={iconDown} alt="" />
							) : (
								<img src={iconUp} alt="" />
							)}
						</div>
					</div>
				</div>
				{clicked && (
					<div className="div2">
						<h2>
							ScopArt is a platform that allows you to find inspiration for your
							next project. You can find inspiration by searching for a specific
							topic or looking at the most popular topics. You can also look at
							the most popular topics by clicking on the “Popular” button.
						</h2>
					</div>
				)}

				<div className="div3">
					<div className="flex">
						<h2>What is the official ressource of the used Data?</h2>
					</div>
				</div>
				<div className="div4">
					<div className="flex">
						<h2>How can I share my results?</h2>
					</div>
				</div>
				<div className="div5">
					<div className="flex">
						<h2>How can I save my favorite pictures?</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
