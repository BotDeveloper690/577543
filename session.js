//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01yQWtxUmFQUENrR1RaUWZnc1kycVoza0w4T0taMmovOEdaYm84QkQwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDhPN0xWUDRWK2RZenpoSlRXSzc0VG0zNEk5OE9qYkNNTjlZMU5GQkdHQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QU5TcFd3OFBPNUhSTi9aL1hXRVBUUDQ5L3d1TFBQQytEWm1Pb3dzTGs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrV29vNEtFNU02Y3JTOFZhWnJCYTRFRXdSS256TmF3Z3BIaDJpaUpyY2lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPY01MZkdGOVlvVXRmT0FDWGJVMmlCU1o3emJRVjRSQ3Zick56ampPbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd4ak5Db0ZHSEVKbU0veHJuUVdZQ3U0cUtzanl0M1h3bjZkdURjbWVGemc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpPYkRjU0V0OWV4bUFLZ1NWR0szK0RPeWYyS2lDUWVEMjQ3Z3A5Nm8zTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGxYZ2pFaG5leDhiT01tUkxXdDNEazUzNWdVWGhXQ0NENXFKZ3gvS0sxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVHd2VjMHU1VUtja1JiUEIyZnZ4YXdxcHE0MHB5ejdJcWwva1lTZndCclJvUFJhUVJIeGxpQ2RyYmJBdHVwdDJQRnVVWWVmRTgrWnlHb0dleVcwRWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJEanRKZDB2b01GRnkyTlpGU21VeTlCdEVWc1JSM3NyeGVqUkdmdlRCUE9vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4MDgwMDQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNCQUNDQ0U5RTg1MTUyRjVCRThFRTUxOTYzREIwN0Q0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA4NzEyNDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4MDgwMDQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFCQjNBRTk1RUY2OUJEQjZGQUY2Mjc0NjcxQUZCRDYxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA4NzEyNDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlI2MnVLU1BvUWplZ0Eyb09YWGEyUHciLCJwaG9uZUlkIjoiM2NjODliMDYtYzY0Yy00OTI5LTgyYzAtYWQxMzgzZTAxZjI4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkROTHRHMXFlUjZkZElzelVKUUx0dlBhcGNqcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmYTBQN0wrSUJTK3JFUllxVmN5eVorK0MvT1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFhBTjZCMUMiLCJtZSI6eyJpZCI6Ijk0Nzc4MDgwMDQ0OjUwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjczNjI4NTQzMTgzMTk6NTBAbGlkIiwibmFtZSI6IvCdl5TwnZef8J2Xo/Cdl5vwnZeUIPCdl6LwnZeZ8J2XliJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2JBeFpvR0VMblo4TUlHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRit5RWRocHdxbkgwemVNU1FwbHJFRGY4eXRiR04zbUYwK2QxbGdyRUNIWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOStHb05ielZBcDViREwyZ1NUL25acjNLaldmVyt1RHIxbkVidDZWOVFCQjd3NDl1WjhlRXNReGpIM2NwdW1wOWtJUEVTb1EvV2FwRDlXWENwcGVpQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZ1b3FrTExJaVloa29xek04Tk1vNVpHNFpvMVVrMHFpajFpRUVBZmhpSWtPdFI1Vkw4NlBOd0p6aDZQREN5WkEwSzYxaEV6R2pYQW16NWI2ZFgvWGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzgwODAwNDQ6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmZzaEhZYWNLcHg5TTNqRWtLWmF4QTMvTXJXeGpkNWhkUG5kWllLeEFoMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwODcxMjM5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlZbSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94778080044",
  PASSWORD: 
    process.env.PASSWORD || "Theekshana771",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
