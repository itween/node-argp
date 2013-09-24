"use strict"

var argv = require("./lib")
		.main()
				.body ()
						.help()
						.usage()
						.end ()
		.command("foo", { trailing: { eq: 1 } })
				.body ()
						.option ({ long: "a" })
						.argument ("bar", { trailing: { eq: 1 } })
						.argument ("b")
						.help()
						.usage()
						.end ()
		.command("bar")
				.body ()
						.option ({ long: "b" })
						.help()
						.usage()
						.end ()
		.argv ()
console.log(argv)