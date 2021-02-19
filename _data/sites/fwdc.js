module.exports = {
	name: "fabian wohlgemuth digital creative.", // optional, falls back to object key
	description: "fwdc projects, templates, customer sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.fwdc-pagespeed.netlify.app/",
		"https://www.fwdc-neat-starter.netlify.app/",
		"https://www.fwdc-ald.netlify.app/",
		"https://www.fwdc-dece.netlify.app/",
		"https://www.fwdc-intimgeist.netlify.app/",
		"https://www.feynmatt.com/",
		"https://www.ninafabian.de/",
		"https://www.jäckel.com/",
		"https://www.bootsmannnrw.de/",
		"https://www.kurzundscherzlos.de/",
		"https://www.buffedbrain.com/",
		"https://www.wohfab.tech/",
		"https://www.immobaysteuer.de/",
		"https://www.tobiaswohlgemuth.de/",
		// "https://www.fwdc-pagespeed.netlify.app/",
		// "https://www.fwdc-pagespeed.netlify.app/",
		// "https://www.fwdc-pagespeed.netlify.app/",
		// "https://www.fwdc-pagespeed.netlify.app/",
	]
};