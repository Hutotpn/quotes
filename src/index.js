import quotes from "./quotes.json";

export default {
	async fetch(request, env, ctx) {
		if (request.method !== "GET") {
			return new Response("Method Not Allowed", { status: 405 });
		}

		const randomIndex = Math.floor(Math.random() * quotes.length);
		const randomQuote = quotes[randomIndex];

		return new Response(JSON.stringify(randomQuote), {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});
	},
};
