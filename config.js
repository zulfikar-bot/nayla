let fs = require('fs')
let chalk = require('chalk')

global.Owner = {
    // use the phone number with the country code, for example Indonesia '62' America '1' etc
    '6282279425257': { // 628818770766
        name: 'Muhammad Zulfikar Putra',
        isReport: true, // if true this number will send if user use command /report or /join
        isCreator: true, // if true this number will send if user use command /owner or /creator
        isDev: true
    }
}
global.ext = {
	title: 'Sabar, sedang di proses',
	body: 'Zulfikar Bot',
	thum: 'https://scontent.fcgk35-1.fna.fbcdn.net/v/t1.6435-9/88248395_108584750748698_3424284829900865536_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrlxN0Nof4XOLWra5O0m0Lm73WbR0T1zKbvdZtHRPXMslW31ZjSV85Ofs57zUxQNy0-7V1MN6dbme03SsuOi-q&_nc_ohc=TCDTb_4B7AwAX9hSrE-&_nc_ht=scontent.fcgk35-1.fna&oh=00_AT8NA8jVXqerOPzv_eUO53wdEQ6u3-jdV2I6oPId279FeA&oe=630B65B4'
}
global.mods = ['6282279425257'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.DeveloperMode = 'false' // true or false
global.linkGC = ['https://chat.whatsapp.com/JbWKDM8dM462QUlDwKKs8m']
global.packname = 'Zulfikar Bot'
global.author = 'Muhammad Zulfikar Putra'
global.multiplier = 7777777 // The higher, The harder levelup
global.sessionName = 'nayla' // The Session name behind the .json example is nayla.json
global.mesreport = 50
global.botname = 'Zulfikar Bot'
global.thumnail = ext.thum // It's hard to change if you don't get an error
global.thum = ext.thum // Same as above
    global.mess = {
	wait: '*❏ WAIT TUNGGU*',
	error: '*❏ ERROR CUK*',
	owner: 'Maaf fitur ini hanya bisa digunakan oleh *Owner*',
	mods: 'Maaf fitur ini hanya bisa digunakan oleh *Moderator*',
	premium: 'Maaf fitur ini hanya bisa digunakan oleh user *Premium*',
	group: 'Maaf fitur ini hanya bisa digunakan di *Group*',
	private: 'Maaf fitur ini hanya bisa digunakan di *Private*',
	admin: 'Maaf fitur ini hanya bisa digunakan *Admin*',
    botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan fitur ini',
    unreg: '── 「 NOT REGISTERED 」 ──\nSilakan Register Terlebih Dahulu Sebelum Menggunakan Bot. Cara Register Cukup Dengan Command *.daftar nama.umur*\nContoh .daftar ' + global.botname + '.16\n\nNote\nHarap Save Serial Number Mu Agar Bisa Melakukan Unreg Database Bot',
    sukses: 'Done Ya kawan',
    wm: '© 2022 - Zulfikar Bot',
    wel: 'Hai @user\n◪ Welcome in group:\n├─ @subject\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Usia: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin:',
    bye: 'Selamat Tinggal @user!\nTerimakasih Telah Bergabung Di Grup\n\nKalo Balik Jangan Lupa Bawa Gorengan Buat Anggota Disini',
    promote: '「 PROMOTE - DETECTED 」\nTarget : @user\nStatus : Member -> Admin\nSELAMAT KAMU JADI ADMIN',
    demote: '「 DEMOTE - DETECTED 」\nTarget : @user\nStatus : Admin -> Member\nKAMU DITURUNKAN JADI MEMBER'
}
    global.adven = {
	limit: 100,
	tigame: 100,
	money: 100000
}
    global.APIs = { // API Prefix
    // name: 'https://website'
    nrtm: 'https://nurutomo.herokuapp.com',
    xteam: 'https://api.xteam.xyz',
    nzcha: 'http://nzcha-apii.herokuapp.com',
    bg: 'http://bochil.ddns.net',
    fdci: 'https://api.fdci.se',
    dzx: 'https://api.dhamzxploit.my.id',
    bsbt: 'https://bsbt-api-rest.herokuapp.com',
    zahir: 'https://zahirr-web.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
    hardianto: 'https://hardianto-chan.herokuapp.com',
    pencarikode: 'https://pencarikode.xyz', 
    LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
    global.APIKeys = { // Apikey Here
    // 'https://website': 'apikey'
    'https://api.xteam.xyz': 'HIRO',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://bsbt-api-rest.herokuapp.com': 'benniismael',
    'https://api.zeks.xyz': 'apivinz',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://pencarikode.xyz': 'pais', 
    'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.cyanBright("Update 'config.js'"))
    delete require.cache[file]
    require(file)
})
