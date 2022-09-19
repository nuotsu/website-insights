<figure>
	<shape-1 class="blob debug" />
	<shape-2 class="blob debug" />
	<shape-3 class="blob debug" />
</figure>

<style>
	figure {
		pointer-events: none;
		position: fixed;
		inset: 0;
		z-index: -1;
	}

	figure::after {
		content: '';
		position: absolute;
		inset: 0;
	}

	.blob {
		position: absolute;
		translate: -50% -50%;
		display: block;
		filter: blur(1000px);
		mix-blend-mode: luminosity;
	}
	.blob::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		translate: -50% -50%;
		display: grid;
		aspect-ratio: 1;
		border-radius: 100%;
	}

	@keyframes rotate {
		to { rotate: 1turn; }
	}

	shape-1 {
		left: 60%;
		top: 25%;
		width: 50vw;
		height: 50vh;
		animation: rotate 13s ease-in-out infinite alternate;
	}
	shape-1::before {
		width: 50vw;
		background-color: #a2ffce;
		opacity: 0.4;
	}

	shape-2 {
		left: 20%;
		top: 65%;
		width: 12vw;
		height: 12vw;
		animation: rotate 31s ease-in-out infinite;
	}
	shape-2::before {
		width: 30vw;
		background-color: #5200ff;
		opacity: 0.2;
	}

	shape-3 {
		left: 55%;
		top: 65%;
		width: 30vw;
		height: 40vh;
		animation: rotate 23s ease-in-out infinite;
	}
	shape-3::before {
		left: 100% !important;
		width: 40vw;
		background-color: #fac937;
		opacity: 0.3;
	}
</style>
