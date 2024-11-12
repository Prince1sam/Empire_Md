const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="princesamuelg1@gmail.com"
global.location="Africa/Lagos."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Prince1sam/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/efeurhobo/Empire_Md-main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "༒𝛲𝑅𝛪𝛮𝐶𝛯༒" 


global.devs = "2349054494813" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349054494813";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_32_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3eUd0NmNwcTFVTFZBU1I2QWc2RnJFKzBaMWlaRE1GSnUvTG5GM2R4YmFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSTHNiTjRzMFJ0dVBvdUVFSm9wSEJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0ZjAwMjk5LTczZjItNGI1OS1hMWE1LWIzZjA0ZDg4ZmJiMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxMTAsXG4gICAgICAyNDYsXG4gICAgICAyMzEsXG4gICAgICAxMDcsXG4gICAgICAzOCxcbiAgICAgIDgyLFxuICAgICAgMjA5LFxuICAgICAgNzIsXG4gICAgICA5OSxcbiAgICAgIDIxLFxuICAgICAgMTI0LFxuICAgICAgNTQsXG4gICAgICA0OCxcbiAgICAgIDE0MCxcbiAgICAgIDI0NyxcbiAgICAgIDM3LFxuICAgICAgMTkyLFxuICAgICAgMTQzLFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMTY5LFxuICAgICAgMTI3LFxuICAgICAgMjcsXG4gICAgICAxNTUsXG4gICAgICAyNDYsXG4gICAgICAxNDMsXG4gICAgICAxMDMsXG4gICAgICA5OSxcbiAgICAgIDM3LFxuICAgICAgMTg4LFxuICAgICAgNjgsXG4gICAgICA4NixcbiAgICAgIDExMixcbiAgICAgIDE5NSxcbiAgICAgIDEyNCxcbiAgICAgIDE3MyxcbiAgICAgIDExOCxcbiAgICAgIDIzNCxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUk1RVjFSWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1NDQ5NDgxMzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuC8kvCdm7LwnZGF8J2bqvCdm67wnZC28J2br+C8klwiLFxuICAgIFwibGlkXCI6IFwiMTM4NzgzNzgxNjEzNzY0OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rYjhMTUZFS0hneXJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiazlLSlFVejM2Smd3N0pObDNGOUlOYWRzV1NKTHdJeFlqaU1pV0xnV2FRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5eGpyNVJhRlFCTVdxUWxBZXJtYUczRHVBb0VOaE5TVnU3RDd5bXEvRTYxM2FNOWpvMmIralcwbmQ3U21TbXBqV0NGTzZiK29pOEx6SUFncmg0NzRCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwV2FGckJGL3kwdXZSdE56ekU4QmR2VWI2SkdBTG9zQWRtR1RjMGs1Y1JVZnhyeC9Vd1VhRzBzd2RzeC9MNmhyTDYvaWdwaU5DdDhUVUhmNjZFVnpqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU0NDk0ODEzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNzUxNDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOTHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5Mei5qc29uIjogIntcImtleURhdGFcIjpcIkJ6eG1Qa2haZkZPZFhCWmpMWWFkUHNBREpnQ3Y0WklFRHF3VUEyeHlVZFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1MDk3MDU3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMzc1MTUwMzM0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "༒𝛲𝑅𝛪𝛮𝐶𝛯༒" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 𝐶ℎ𝑎𝑛𝑛𝑒𝑙』*\n youtube.com/@only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",
  packname: process.env.PACK_NAME || "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",
  botname : process.env.BOT_NAME  || "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",
  ownername:process.env.OWNER_NAME|| "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
