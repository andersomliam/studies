const { clear } = require('console');
const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(totalmem() / 1024 / 1024)} MB`,
        FreeRAM: `${parseInt(freemem() / 1024 / 1024)} MB`,
        Usage: `${((freemem / totalmem)*100).toFixed(2)} %`,
    }

    console.clear();
    console.table(stats);

    exports.stats = stats;

}, 1000);