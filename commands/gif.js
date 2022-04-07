function fetch(...args) {
    return import('node-fetch').then(({ default: fetch }) => fetch(...args));
}

module.exports = async function (message, args) {
    let keywords = 'response';
    if (args.length > 0) {
        keywords = args.slice(1, args.length).join(' ')
    }

    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)

    message.channel.send(json.results[index].url)
    message.channel.send(`GIF from Tenor`)
}
