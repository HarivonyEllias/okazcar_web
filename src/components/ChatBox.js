import React from "react";

import "../assets/css/chat.css";
import Annonce from "./Annonce";

function ChatBox(){
    return(
		<div id="container">
			<aside>
				<header>
					<input type="text" placeholder="search" />
				</header>
				<ul>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status orange"></span>
								offline
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status green"></span>
								online
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status orange"></span>
								offline
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status green"></span>
								online
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status orange"></span>
								offline
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_06.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status green"></span>
								online
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status green"></span>
								online
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status green"></span>
								online
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status green"></span>
								online
							</h3>
						</div>
					</li>
					<li>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg" alt="" />
						<div>
							<h2>Prénom Nom</h2>
							<h3>
								<span class="status orange"></span>
								offline
							</h3>
						</div>
					</li>
				</ul>
			</aside>
			<main>
				<header>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
					<div>
						<h2>Chat with Vincent Porter</h2>
						<h3>already 1902 messages</h3>
					</div>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
				</header>
				<ul id="chat">
					<li class="you">
						<div class="entete">
							<span class="status green"></span>
							<h2>Vincent</h2>
							<h3>10:12AM, Today</h3>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
					<li class="me">
						<div class="entete">
							<h3>10:12AM, Today</h3>
							<h2>Vincent</h2>
							<span class="status blue"></span>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
					<li class="me">
						<div class="entete">
							<h3>10:12AM, Today</h3>
							<h2>Vincent</h2>
							<span class="status blue"></span>
						</div>
						<div class="triangle"></div>
						<div class="message">
							OK
						</div>
					</li>
					<li class="you">
						<div class="entete">
							<span class="status green"></span>
							<h2>Vincent</h2>
							<h3>10:12AM, Today</h3>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
					<li class="me">
						<div class="entete">
							<h3>10:12AM, Today</h3>
							<h2>Vincent</h2>
							<span class="status blue"></span>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
					<li class="me">
						<div class="entete">
							<h3>10:12AM, Today</h3>
							<h2>Vincent</h2>
							<span class="status blue"></span>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
					<li class="me">
						<div class="entete">
							<h3>10:12AM, Today</h3>
							<h2>Vincent</h2>
							<span class="status blue"></span>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
					<li class="me">
						<div class="entete">
							<h3>10:12AM, Today</h3>
							<h2>Vincent</h2>
							<span class="status blue"></span>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
					<li class="me">
						<div class="entete">
							<h3>10:12AM, Today</h3>
							<h2>Vincent</h2>
							<span class="status blue"></span>
						</div>
						<div class="triangle"></div>
						<div class="message">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						</div>
					</li>
				</ul>
				<footer>
					<textarea placeholder="Type your message"></textarea>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
					<a href="#">Send</a>
				</footer>
			</main>
			<main style={{width:"21%"}}>
				<header>
					{/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" /> */}
					<div>
						<h2>Current Annonce</h2>
						<h3>very active</h3>
					</div>
				</header>
				<div style={{
					display: "grid",
					gridTemplateColumns: "repeat(1, minmax(20px, 1fr))", // Adjust the number of columns and minmax values as needed
					gridGap: "16px", // Adjust the gap between grid items as needed
					width: "100%",
					height: "60vh",
					bottom: "16px",
					zIndex: "1000",
					position: "",
					borderRadius: "10px",
					overflowY: "scroll",
				}}>
					<Annonce />
					<Annonce />
					<Annonce />
				</div>
			</main>
		</div>
    )
}

export default ChatBox;