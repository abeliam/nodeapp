#!/usr/bin/env node

const program = require("commander")
const shell = require("shelljs")

const devCommand = (pkgs) => {
    if(pkgs === undefined) {
        shell.exec("pnpx pm2 start dev.ecosystem.yml")
    }
    else {
        pkgs.forEach(pkg => {
            shell.exec(`pm2 start dev.ecosystem.yml --only ${pkg}`)
        })
    }
}

program.command("dev [pkgs...]")
    .action(devCommand)

program
.command("deploy")

program.parse(process.argv)
