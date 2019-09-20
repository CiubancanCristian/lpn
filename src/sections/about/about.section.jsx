import React from "react";

import "./about.styles.css";

const AboutSection = props => (
	<div className="about-section">
		<div className="message">
			<h3>
				IGNITING LEADERS, ILLUMINATING COMMUNITIES, AND INSPIRING
				LEGACIES.
			</h3>
			<p>
				We are a co-ed business leadership fraternity committed to
				inspire the best in everyone. We aspire to become visionaries,
				influencers, and mobilizers. This means we dream big, rally
				support, and get it done. Our mission is clear – to inspire
				leaders. As a Partnership, our members are each co-owners of
				this mission.
			</p>
			<p>
				We are differentiated in that our Partners don’t just want to
				land a career, we each want to fulfill a calling. We are proud
				of our history of campus community leaders and founders. During
				their short time on campus, they each left a legacy because they
				saw a need to fill, a problem to solve, or someone to care
				about. We are inspired to carry on the torch with the aim to
				leave our world better than we found it.
			</p>
			<p className="aside-paragraph">
				Welcome to Lambda Phi Nu, where we
			</p>
			<h3>“GROW FORWARD, GIVE BACK.”</h3>
			<h4>CORE VALUES</h4>
			<p>
				Do you follow through with your promises? Have an insatiable
				desire to keep learning? Naturally inclined to serve others?
				Enjoy forming relationships? And always seeking to better
				yourself?
			</p>
			<p>
				If yes, we do too. That’s why we hold on to the values of
				Integrity, Curiosity, Altruism, Relationships, and Excellence.
			</p>
			<div className="core-values">
				<h5 className="click dim" onClick={props.int}>
					Integrity
				</h5>
				<h5 className="click dim" onClick={props.cur}>
					Curiosity
				</h5>
				<h5 className="click dim" onClick={props.alt}>
					Altruism
				</h5>
				<h5 className="click dim" onClick={props.rel}>
					Relationships
				</h5>
				<h5 className="click dim" onClick={props.exc}>
					Excellence
				</h5>
			</div>
			<div>
				{props.showInt ? (
					<p className="aside-paragraph">
						Integrity means persevering for what is true and right
						in every decision. Our brothers strive to be the best
						versions of themselves through hard work, tenacity,
						discipline, and ambition.
					</p>
				) : null}
			</div>
			<div>
				{props.showCur ? (
					<p className="aside-paragraph">
						Our brothers embody curiosity by consistently exploring
						what could be and challenging the status quo. We strive
						to become better versions of ourselves and to better
						impact the community around us.
					</p>
				) : null}
			</div>
			<div>
				{props.showAlt ? (
					<p className="aside-paragraph">
						Altruism means morally obligating oneself to the welfare
						of others. We emphasize that success is having an impact
						on our campus and community.
					</p>
				) : null}
			</div>
			<div>
				{props.showRel ? (
					<p className="aside-paragraph">
						Our brotherhood emphasizes relationships, not only in
						the business world but in the community around us.
						Cultivating one’s relationships means authentically
						loving people from worlds not of one’s own, and learning
						to appreciate the diversity that makes up the world
						around us.
					</p>
				) : null}
			</div>
			<div>
				{props.showExc ? (
					<p className="aside-paragraph">
						Our brothers embody excellence by persistently striving
						to enhance their capabilities and character. The pursuit
						to be remarkable leaders results in the transformation
						of ideas into reality.
					</p>
				) : null}
			</div>
		</div>
	</div>
);

export default AboutSection;
