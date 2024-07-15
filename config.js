const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020619432";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_47_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUdS9iSGcrbE92MVdwN2RxZEdzWHZOa2FlT0Y5RW94NGRPUWxuc0hBOUowPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1UzZHaFI2dFJrT29FdHRCa0dseUFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQzZGRmNGUwLTQ5MTgtNGI2NS1iNGM4LWY4Yjk2MzU3MTNjZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICA1MSxcbiAgICAgIDMzLFxuICAgICAgMzcsXG4gICAgICAyNDksXG4gICAgICAyNTMsXG4gICAgICAxNTQsXG4gICAgICAyNyxcbiAgICAgIDMyLFxuICAgICAgMTYwLFxuICAgICAgMTI0LFxuICAgICAgMTMxLFxuICAgICAgMTk0LFxuICAgICAgMjMyLFxuICAgICAgMTkwLFxuICAgICAgNjMsXG4gICAgICA3OSxcbiAgICAgIDcwLFxuICAgICAgNjgsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMTY3LFxuICAgICAgMTUzLFxuICAgICAgMTA5LFxuICAgICAgMTk0LFxuICAgICAgMTcwLFxuICAgICAgNzgsXG4gICAgICA1NixcbiAgICAgIDE4LFxuICAgICAgNzgsXG4gICAgICA4NSxcbiAgICAgIDE1OCxcbiAgICAgIDYyLFxuICAgICAgMTIsXG4gICAgICA3MixcbiAgICAgIDI1MyxcbiAgICAgIDE1MyxcbiAgICAgIDcsXG4gICAgICAzOSxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldHUTJQM0w0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIwNjE5NDMyOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDIyNTMxNTY3Nzk3OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2bG1aSUJFTzdOMXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUDJhaE9UcVJ1WitHQkhCdjdsdFRRTW1QTG1BcEF2UUUvdXJFRUNFWk9EYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZaWQ5dVZuaUVmMTQ2UDgyazEwKzBkYjNTdDdmcytqempsMWp5amNCWFliN3NsUjZJVFRhVHpzQUgvUHZIbUo4alNpRWRyd3JKM1BSRkpxcCtCR09BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCQmdCQWtqOElRSUFWMDlDV2hsTDJVcE1tV2l4bWVOMHh2WnNGSlhiWm5rT1ZRMmJrK3RLVG8yOTdSMlBXNnpERXZRTXdQdlVyWXF5dzZxQThkOHBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIwNjE5NDMyOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA4MzYzNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
