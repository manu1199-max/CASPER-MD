const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'CASPER-MD=elQmmTSA#xyHGAJJgAlmR98i041v0guhH1Kj01A9CQ-TmNL0ZXi4',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
OWNER_NUMBER: process.env.OWNER_NUMBER || '94764582504', 
PREFIX:  process.env.PREFIX || ['.'] ,
JID: process.env.JID || "120363389486431984@newsletter",
FOOTER: 'ලස්සන සිංදු✨☘️'
LOGO: process.env.LOGO || `https://i.ibb.co/RMxmMc5/4568.jpg`,
OWNER_REACT: process.env.OWNER_REACT || 'true',
AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || "true",
ANTI_CALL: process.env.ANTI_CALL || "true"
};
