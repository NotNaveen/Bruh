const Discord = require("discord.js");
const Client = new Discord.Client();


const PREFIX = '!';


Client.on('ready', ()=>{
    console.log("BotOnline");
    Client.user.setActivity('Sharan.exe', { type : "STREAMING"})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);

})

Client.on('message', msg=>{
   
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.reply('pong!');
            break;
        case 'Hello':
            msg.reply('Hell-ye Bitch');
            break;
        case 'Maths':
            msg.reply('https://meet.google.com/cfn-opxd-qnc?authuser=0&hs=179');
            break; 
        case 'maths':
            msg.reply('https://meet.google.com/cfn-opxd-qnc?authuser=0&hs=179');
            break;
        case 'Tamil':
            msg.reply('Bruh ! Dont Attend Cause I Aint Got Current here');
            break;
        case 'tamil':
            msg.reply('Bruh ! Dont Attend Cause I Aint Got Current here');
            break;   
        case 'English':
            msg.reply('https://meet.google.com/ise-hpag-mji');
            break;  
        case 'english':
            msg.reply('https://meet.google.com/ise-hpag-mji');
            break;      
        case 'Social':
            msg.reply('https://meet.google.com/gwg-gbst-mvy');
            break; 
        case 'social':
            msg.reply('https://meet.google.com/gwg-gbst-mvy');
            break;     
        case 'Chem':
            msg.reply('https://meet.google.com/pyf-hfkm-oih');
            break; 
        case 'chem':
            msg.reply('https://meet.google.com/pyf-hfkm-oih');         
            break;
        case 'classroom':
            msg.reply('https://classroom.google.com/c/MTE0MTA0ODgyMTc4');
            break;
        case 'Classroom':
            msg.reply('https://classroom.google.com/c/MTE0MTA0ODgyMTc4');
            break;
        case 'Timetable':
            msg.reply('Here is Your Time Table',{files: ["https://cdn.discordapp.com/attachments/733623033486508112/745880520411578418/IMG-20200614-WA0000.jpg"]});
            break;
        case 'timetable':
            msg.reply('Here is Your Time Table',{files: ["https://cdn.discordapp.com/attachments/733623033486508112/745880520411578418/IMG-20200614-WA0000.jpg"]});
            break; 
        case 'lol':
            msg.reply('lol,my aSs');
            break;
        case 'Lol':
            msg.reply('Lol,my azz');
            break;
        case 'react':
            msg.react('🥱');
            break;
        case 'phy':
            msg.reply('https://us02web.zoom.us/j/83107081451?pwd=YWlyME5PUDhxZ0pQai9jOVBNNkNjdz09');
            break;  
        case 'L2':
            msg.reply('https://meet.google.com/nij-kwjk-qis');
            break;    
        case 'l2':
            msg.reply('https://meet.google.com/nij-kwjk-qis');
            break; 
        case 'tt':
            msg.reply('Here is Your Time Table',{files: ["https://cdn.discordapp.com/attachments/733623033486508112/745880520411578418/IMG-20200614-WA0000.jpg"]});
            break;
        case 'soc':
            msg.reply('https://meet.google.com/gwg-gbst-mvy');
            break;
        case 'class':
            msg.reply('https://classroom.google.com/c/MTE0MTA0ODgyMTc4');
            break;
}
    
    
    

    if(msg.content === "Check"){
        msg.delete();
        msg.author.send('Working');
    }

    if (msg.content === 'My avatar') {
        msg.reply(msg.author.displayAvatarURL());
      }

    if(msg.content === "Bio"){
        msg.reply('https://us04web.zoom.us/j/8207220221?pwd=dHgvWE5HY216dHlaMmZSMmhZNS94QT09');
    } 

    if(msg.content === "Ntse Timetable"){
        msg.reply("Here is Your Time Table",{files: ["https://cdn.discordapp.com/attachments/725198457869959259/731036471762616381/ntse_time.png"]})
    }

    if(msg.content === "Naveen Ig"){
        msg.reply('Here is Naveens Instagram ID - https://www.instagram.com/not_.naveen/');
    }

    if(msg.content === "Naveen Yt"){
        msg.reply('Here is Naveens Youtube Channel - https://www.youtube.com/channel/UCSFHGJcqcEeJZ1sKbF1WgrA?view_as=subscriber');
    }

    if(msg.content === "Naveen Valorant ID"){
        msg.reply('Naveenz Valorant ID: BlaZe#9036');
    }

    if(msg.content === "lol"){
        msg.reply('Lol,My ass');
    }
    
    if(msg.content === "Lol"){
        msg.reply('Lol,My azz');
    }
    if(msg.content === "Bruh"){
        msg.delete();
        msg.reply("Bruh",{files: ["https://tenor.com/view/doge-coin-gif-13861545.gif"]})
    } 
    if(msg.content === "cum"){
        msg.reply("COME",{files: ["https://cdn.discordapp.com/attachments/747432898684125186/748114248374157382/Screenshot_157.jpg"]})
    }
    
    
    

})
    
Client.login(process.env.BOT_TOKEN);
