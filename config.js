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
global.statusseen = true;                 //make true to view statuses 


global.Owner = ["2348140825959"];
global.OwnerNumber = ["2348140825959"];
global.ownertag = [""]; 
global.OwnerName =  "BADBOI  MD";
global.BotName = "🐦BADBOI-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦BADBOI md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"4Ol5C5wcD2eKwHJ0sQMNpP7hKzbAJzz0IiVmIq51Yl4="},"public":{"type":"Buffer","data":"5ldGc+3SECCC2ub35cTCyp7xoSf145HtMtHn0mZFVlM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"wN2VaEfRFUwboJwHJe3ST3TWOoebn78U3AFs1Wy5x0g="},"public":{"type":"Buffer","data":"UKQIkJY9WNcYkLukI5EDM+4cF5AUD0aapkqp358rJSk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0OPIIDi+/vIxJP6DM06yHUtIeBuQ5C0ghYHLi7CQlVI="},"public":{"type":"Buffer","data":"zLz3wka+M1YGv842iZa5XfmRMa1tLKGUuHwNAf7+8S4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GKe62oxaFF8szFJ7MV2qu+0CByh1B4IKR6rN0Fuh02U="},"public":{"type":"Buffer","data":"5dcnWOgyB/un0vYLts3ZrTBbUEgby/E5tVMaf7YDPGk="}},"signature":{"type":"Buffer","data":"nBFS9C236PsuF1PL172RxFFAF01In2vyvjUYpLDIpjK/JJ0wKFRLlDgNb3g/KsWCSJpzLldEIZPN9zCu5SfqgA=="},"keyId":1},"registrationId":142,"advSecretKey":"bt66rzdTK7fd9F04M1faVKRzi8Ele635wbG6Uy+tzac=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"9NUT3n11TYCryhq0K8x8oA","phoneId":"4ecc7762-17dc-470e-a856-18810a353598","identityId":{"type":"Buffer","data":"P9qm5gtADYrGZKra7DTVevy1N0k="},"registered":true,"backupToken":{"type":"Buffer","data":"TAZ3M0uEFQ7X9xkwVp2t/MIJ5ps="},"registration":{},"pairingCode":"2KYFKGH6","me":{"id":"2348140825959:76@s.whatsapp.net","name":"Bad Boi Hacker"},"account":{"details":"CKCi2f8PEJmElrQGGAMgACgA","accountSignatureKey":"EOU2gt5eCggXMBPEIrO0EHq9m5HbxTcSyIwzZkYN3EM=","accountSignature":"0CsVReLxw6rOOldryA3HtBZy2NEzUfBmpvWscVgzCRNPPH/zJ9QqsFS8HnrjxQwmADiA+2t4Qyiq5wUiKhedjg==","deviceSignature":"FY/UfQurixJzQWSGR3MM9pAzS4TAP12lBOyuuHFs24Y+BkO5aEMS4lcuTMzwb4Tkeg7Uiok//UOn33m9oXuHig=="},"signalIdentities":[{"identifier":{"name":"2348140825959:76@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRDlNoLeXgoIFzATxCKztBB6vZuR28U3EsiMM2ZGDdxD"}}],"platform":"smbi","lastAccountSyncTimestamp":1720025638,"myAppStateKeyId":"AAAAAKxO"}`
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
