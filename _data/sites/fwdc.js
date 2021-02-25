module.exports = {
	name: "fabian wohlgemuth digital creative.", // optional, falls back to object key
	description: "fwdc projects, templates, customer sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.fabianwohlgemuth.de/",
		// "https://fwdc-neat-starter.netlify.app/",
		// "https://ninafabian.de/",
		// "https://jäckel.com/",
		"https://wp.fabianwohlgemuth.de/",
	]
};
