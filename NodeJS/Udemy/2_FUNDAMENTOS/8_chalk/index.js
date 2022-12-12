const chalk = require("chalk")

const nota = 6

console.log(chalk.bold.green("Parabéns! Você está aprovado!!"))

console.log(
    chalk.blue("Anderson " + chalk.red("Martins ") + chalk.yellow("de ") + chalk.bold("LIMA"))
);

if (nota >= 7 ) {
    console.log(chalk.bold.green("PARABÉNS, você foi aprovado!!"));
} else {
    console.log(
        chalk.bold.red(chalk.bgYellow("RECUPERAÇÃO:") + 
        chalk.italic(" Você precisa fazer a prova de recuperação!!"))
        )
}
