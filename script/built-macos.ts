const lang = Deno.env.get("MATRIX_LANG")
let arch = Deno.env.get("MATRIX_ARCH")
const version = Deno.env.get("TRAN_VERSION")

const root = "src-tauri/target/" + arch + "-apple-darwin/release/bundle/";

if (arch == "x86_64") {
    arch = "x64"
}

const dmg = root + "dmg/tran_" + version + "_" + arch + ".dmg"

const new_dmg = "Tran_" + lang + "_" + arch + ".dmg"

await Deno.mkdir("release")
await Deno.copyFile(dmg, `release/${new_dmg}`)

for await (const file of Deno.readDir("release")) {
    console.log(file.name)
}