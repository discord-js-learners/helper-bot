function fetch(...args) {
	return import('node-fetch').then(({ default: fetch }) => fetch(...args));
}
const name = 'gif';

module.exports = async (message, args) => {
	let keywords = 'coding';
	if (args.length > 0) {
		keywords = args.join(' ');
	}
    
	const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=high`;
	const response = await fetch(url);
	const json = await response.json();
	const index = Math.floor(Math.random() * json.results.length);
	message.channel.send(json.results[index].url);
	message.channel.send(`GIF from Tenor: ${keywords}`);

	console.log(`${message.member.user.tag} executed '!${name}':`);
	console.log(`keywords: ${keywords}`);
};
