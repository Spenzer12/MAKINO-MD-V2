const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"AE9N7CeunrWhI+AL45FQIYCblhkpthqpSkKEpAzAEXU="},"public":{"type":"Buffer","data":"5ZBKcL/oYlUyoIOW00mkef8yPQ0QDsEoD2MPMApH9n8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"uCLrjB+qCk81pv6wQ+0pisQFcFvfn3D2LqRwz01+VEU="},"public":{"type":"Buffer","data":"yWmZ7Ch9kc7KrcOkbAg4fWNEFjsmClHNKhaPSQ1XkwU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"kNsVvny1bM2Q9/DFkjh66wiDW8ZtXl7yQyVYLlD+x34="},"public":{"type":"Buffer","data":"tyBGP8HmOPij4lwNTHk6m+BJj4fVVLPTy07SM0vkq0Y="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qC2lLQZUYPY7kiOodFxlLfqQvdFZ8a+i+W/zaLuO93I="},"public":{"type":"Buffer","data":"ndq4l1KmHzM2tKbyyDkCBVYh7+puGYo6udMdNZN8CQQ="}},"signature":{"type":"Buffer","data":"aoZI/ARocWY8wg4CFoVgrsIipxKfCxfop4vuIB+QVnWHMZAgUSf1eRTYfneN8L/7PisV+sguVWfaU0hsKXJFBQ=="},"keyId":1},"registrationId":18,"advSecretKey":"kRlfNjfz9qyX62afBBsp/UnAE4yyuB6Fx+gNLAMCHM0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"qdmm-Y4URNOkkp7lA4A4oA","phoneId":"cae78bbf-bb9a-433b-94bd-817d4e4aeef3","identityId":{"type":"Buffer","data":"VK8q3966fE3OrEESrkaHwDLAhxA="},"registered":true,"backupToken":{"type":"Buffer","data":"JcnkcfOuU6MmdBdBXsYVEUZhoto="},"registration":{},"pairingCode":"337BHLYK","me":{"id":"2348140825959:75@s.whatsapp.net","name":"Bad Boi Hacker"},"account":{"details":"CKCi2f8PEIzgk7QGGAIgACgA","accountSignatureKey":"EOU2gt5eCggXMBPEIrO0EHq9m5HbxTcSyIwzZkYN3EM=","accountSignature":"7pmj8BMwjZ5icVBzYxcUTBoCFRW0Daa44IeZnrlkfyXWSG47eBk6uDhwsLb9ygLUieXbgcWBSCoREq4ucCj0iw==","deviceSignature":"du2ydqego2wR6q9Y4WGoS+n0+K8R6G6SeQsceTTpzh5zfjsJP/760TNemov8dREQSX/ejeHkODPH3TBd7pWuCA=="},"signalIdentities":[{"identifier":{"name":"2348140825959:75@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRDlNoLeXgoIFzATxCKztBB6vZuR28U3EsiMM2ZGDdxD"}}],"platform":"smbi","lastAccountSyncTimestamp":1719988249,"myAppStateKeyId":"AAAAAKxO"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
