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
			<div className="core-values">
				<h5 className="click dim" onClick={props.his}>
					ΛΦΝ HISTORY
				</h5>
			</div>
			<div>
				{props.showHis ? (
					<div>
						<p>
							Lambda Phi Nu is a UC Irvine-founded business
							leadership community for students seeking leadership
							development and coaching. We immerse our members in
							an environment that emulates the professional world
							to prepare them for a more successful future.
						</p>
						<p className="aside-paragraph">OUR HERITAGE</p>
						<p className="aside-paragraph">
							The Global Financial Crisis of 2008 was the catalyst
							for starting Lambda Phi Nu. At a macro level, the
							housing bubble burst, Dow Jones prices were at a
							historical low, and 1.2 million jobs were lost
							within one year. At a micro-level, students felt the
							impact with rising tuition, curtailed financial aid,
							and shortage in faculty. There was also a drought in
							local job opportunities. To make matters worse,
							UCI’s business program was still young. Its
							undergraduate business program only initiated its
							first 200 students in the Fall of 2008. Thus UCI was
							a school many companies considered dropping their
							sponsorship and support.
						</p>
						<p className="aside-paragraph">
							In the midst of these challenging times arose a
							group of student leaders who wanted to create
							opportunities for UCI’s business students. It began
							with the Accounting Association Officer Board
							seeking to make UCI a target school for public
							accounting firms. As a result of pursuing this
							vision, a deep camaraderie was formed between the
							Officers – reflecting a brotherhood like that of a
							Fraternity. In the summer of 2010, our founding
							Chief Executive Officer, decided to extend this
							spirit of brotherhood to student leaders in other
							organizations. Subsequently, the officers from
							Accounting Association, President and Founder of
							Merage Undergraduate Student Association, Senior
							Advisor of Undergraduate Business Association,
							President of Undergraduate Finance Association,
							President and Founder of Management Information
							Student Society, and a Paul Merage MBA candidate
							convened to form Lambda Phi Nu – 16 Founding Fathers
							in total*.
						</p>
						<p className="aside-paragraph">
							Although a majority of the Founders already received
							full-time offers, they decided to dedicate their
							last year at UCI mentoring students, growing
							sponsorships, and launching new initiatives. Their
							motive was to give back to UCI and cultivate a
							legacy of student leaders who also wanted to give
							back. Lambda Phi Nu continues to push the envelope
							to make our school more competitive in the business
							community through fostering collaboration among
							student leaders. In the words of the Apostle Paul,
							“do nothing out of selfish ambition or vain conceit.
							Rather, in humility value others above yourselves.”
							Thus, Lambda Phi Nu serves students who are
							challenged to grow forward and called to give back.
							Our reason to exist has been and will always be to
							“Grow Forward, Give Back” – one leader, one
							community, and one campus at a time.
						</p>
						<p className="aside-paragraph">
							CHAPTER FOUNDED AND REBRANDED
						</p>
						<p className="aside-paragraph">
							The Chapter was founded in 2010 as Beta Alpha Psi
							and rebranded into Lambda Phi Nu in 2014 due to
							fundamental differences within organizational
							structures. Standard Beta Alpha Psi chapters operate
							under an honor society structure; however the Irvine
							chapter sought to operate under a fraternity
							structure. We at Lambda Phi Nu believed our value
							proposition would be lost if we changed our
							organizational structure and chose to rebrand under
							Lambda Phi Nu in order to preserve the culture and
							mission that we currently held.
						</p>
						<p className="aside-paragraph">
							*FOUNDING C-SUITE INCLUDED: MR. DENNIS YU (CEO), MR.
							MICHAEL WEN (CFO), MR. BRANDON SHIAW (CIO), MR. ART
							REYES (COO), AND MS. EMILY RONG (CTO). FOUNDING
							FATHERS INCLUDED: MS. IRIS CHAN, MR. EDWARD CHOW,
							MR. NATHAN KOBAYASHI, MS. CHRISTINE LIAO, MS. LUCY
							LUXIAO, MS. MICHELLE NGUYEN, MS. EVA PARK, MR. JAMES
							SHEN, MR. ADAM WHITESCARVER, MS. JESSICA WONG, AND
							MS. TONIE ZHU.
						</p>
					</div>
				) : null}
				<div className="core-values">
					<h5 className="click dim" onClick={props.mis}>
						MISSION STATEMENT
					</h5>
				</div>
			</div>
			<div>
				{props.showMis ? (
					<div>
						<p className="aside-paragraph">MISSION STATEMENT</p>
						<p className="aside-paragraph">
							Lambda Phi Nu is a business leadership fraternity
							committed to igniting leaders by immersing
							Associates into an environment full of driven
							individuals, offering experiences through a
							curriculum which emulates the professional world,
							and providing mentorship which allows each of our
							Associates to craft their own development roadmap;
							illuminating communities by calling every active
							Partner to start new campus initiatives and/or to
							advocate for a campus organization they wish to
							impact, while creating meaningful relationships
							along the way; and inspiring legacies by creating
							long-lasting impacts on other individuals and
							organizations, and through the continued
							relationship and involvement of our active and
							alumni brothers with our organization and campus.
						</p>
						<p className="aside-paragraph"></p>
						<p className="aside-paragraph"></p>
					</div>
				) : null}
			</div>
		</div>
	</div>
);

export default AboutSection;
