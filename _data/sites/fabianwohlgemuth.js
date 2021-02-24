module.exports = {
	name: "fabianwohlgemuth.de", // optional, falls back to object key
	description: "Fabian's Personal web site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.fabianwohlgemuth.de/",
		"https://www.fabianwohlgemuth.de/writing/",
		"https://www.fabianwohlgemuth.de/projects/",
		"https://www.fabianwohlgemuth.de/contact/",
		"https://www.fabianwohlgemuth.de/legal-terms/",
		"https://www.fabianwohlgemuth.de/privacy-policy/",
		"https://www.fabianwohlgemuth.de/uses/",
	]
};
