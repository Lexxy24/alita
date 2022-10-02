const os = require("os");
const { sizeFormatter } = require("human-readable");
const formatSize = sizeFormatter({
	std: "JEDEC",
	decimalPlaces: "2",
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
});

module.exports = {
	name: "status",
	alias: ["stats", "botstat"],
	category: "main",
	desc: "Status host server",
	isSpam: true,
	wait: true,
	async run({ msg }) {
		let text = "";
		text += `HOST:\n- Arch: ${os.arch()}\n- CPU: ${os.cpus()[0].model}${
			os.cpus().length > 1 ? " (" + os.cpus().length + "x)" : ""
		}\n- Release: ${os.release()}\n- Version: ${os.version()}\n`;
		text += `- Memory: ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}\n`;
		text += `- Platform: ${os.platform()}`;
		await msg.reply(text);
	},
};
