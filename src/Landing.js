import React from 'react';
import './Landing.css';

function Landing() {
	return (
		<section className="landing-body">
			<div className="landing-content">
				<h1>Hidžama Began</h1>
				<h1 className="landing-atmosfera">Profesionalan rad i osjetno ljepša atmosfera</h1>
				<p className="landing-p">Radnja pamti već 5 godina zadovoljne mušterije</p>
				<p className="landing-serijat">Sav rad je u skladu sa šerijatskim propisima </p>
				<div className="icons">
					<p>
						<div class="cupping-icon">
						</div>
					</p>
					<p>
						<i class="fas fa-heartbeat" />
					</p>
					<p>
						<i class="fas fa-burn" />
					</p>
				</div>
			</div>
		</section>
	);
}

export default Landing;
