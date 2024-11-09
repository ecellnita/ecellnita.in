// import { MongoClient } from "mongodb";
// import nodemailer from 'nodemailer';

// const MONGODB_URI = 'mongodb+srv://shawkrish418:Ai15X1Hh51taEGFT@cluster2.1lzdl.mongodb.net/';
// const EMAIL = "ecell.csh2024@gmail.com";
// const PASSWORD = "utvg yjof vmnh ovnq";

// const client = new MongoClient(MONGODB_URI);

// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth: {
//       user: EMAIL,
//       pass: PASSWORD
//     }
// });

// export const RegisterTeam = async(formData) => {
//     const {teamName, leader, members, password} = formData;

//     if(!teamName || !leader || !leader.name || !leader.email|| !leader.contact){
//         return res.status(401).json({message:"Please fill the required fields!"});
//     }

//     const leaderEmail = await Team.findOne({"leader.email": leader.email});
//     const TeamName = await Team.findOne({teamName});

//     if(TeamName){
//         return res.status(400).json({message:"Team name already exist! Please use a different name."})
//     }
//     if(leaderEmail){
//         return res.status(400).json({message:"Team Already Exist!"});
//     }

//     if(!validator.isEmail(leader.email)){
//         res.status(400).json({message:"Enter a valid Email Adress!"});
//         return;
//     }
//     if (!Array.isArray(members) || members.length < 2 || members.length > 4) {
//         return res.status(400).json({ error: 'You must add between 2 and 4 members.' });
//       }

//     for (const member of members) {
//         if (!member.name || !member.email || !member.contact) {
//           return res.status(400).json({ error: 'Each member must have a name, email, and contact.' });
//         }
//       }

//     try{
//         const saltRounds = 10; // Number of hashing rounds
//         const passwordHash = await bcrypt.hash(password, saltRounds);
//         const teamId = uuidv4();
//         const team = new Team({
//             teamId: teamId,
//             teamName,
//             leader: { ...leader, passwordHash },
//             members,
//           });
//         await team.save();

//         const domain = leader.email.split('@')[1];

//         dns.resolveMx(domain,(err,address)=>{
//             if(err || address.length === 0){
//                 res.status(400).json({message:"Email Address not found!"});
//                 return;
//             }

//             const mailOptions = {
//                 from: EMAIL,
//                 to:leader.email,
//                 subject: 'Team Id',
//                 html:`
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Registration Successful</title>
//                 <style>
//                     body {
//                         font-family: Arial, sans-serif;
//                         color: #333333;
//                         background-color: #f8f9fa;
//                         margin: 0;
//                         padding: 20px;
//                     }
//                     .container {
//                         background-color: #ffffff;
//                         padding: 20px;
//                         border-radius: 8px;
//                         max-width: 600px;
//                         margin: 0 auto;
//                         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//                     }
//                     h1 {
//                         color: #4CAF50;
//                     }
//                     p {
//                         font-size: 16px;
//                         line-height: 1.5;
//                     }
//                     .team-id {
//                         font-weight: bold;
//                         color: #4CAF50;
//                     }
//                 </style>
//             </head>
//             <body>
//                 <div class="container">
//                     <h1>Congratulations!</h1>
//                     <p>Your registration was successful. Thank you for joining our hackathon event!</p>
//                     <p><strong>Here is your Team Unique ID:</strong> <span class="team-id">${teamId}</span></p>
//                     <p>Please save this ID for future logins.</p>
//                     <p>We look forward to seeing your innovative solutions!</p>
//                     <br>
//                     <p>Best regards,</p>
//                     <p>Team E-cell, NIT Agartala</p>
//                 </div>
//             </body>
//             </html>
//             `
//             }

//             transporter.sendMail(mailOptions,(err,info)=>{
//                 if(err){
//                     return res.status(500).json({message:"Error in sending mail."});
//                 }
//                 return res.status(200).json({message:"Email validated and confirmation sent"});
//             });
//         })

//         res.status(201).json({ message: 'Team registered successfully!',teamId: team.teamId});
//     }
//     catch(error){
//         console.error('Error saving team:', error);
//         res.status(500).json({ error: 'Failed to register team. Please try again.' })
//     }
// }
