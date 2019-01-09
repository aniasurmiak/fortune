let tellFortune = (jobTitle, geoLocation, partnerName, numberOfChildren, houseSize) => `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${(numberOfChildren !== 0 ? numberOfChildren : 'no')} kids living in a ${houseSize} square meter house.`;
//console.log(tellFortune('webmaster', 'Milan', 'Maria', 1, 300));

// 1) we want the console log with info provided by the user

let jobTitle = prompt('what is your job?', 'webmaster');
let geoLocation = prompt('where do you live?', 'Milan');
let partnerName = prompt('partner name?', 'Maria');
let numberOfChildren = prompt('Children', 1);
let houseSize = prompt('house size?', 300);

//console.log(tellFortune(jobTitle, geoLocation, partnerName, numberOfChildren, houseSize))
// 2) we create some funny fortunes using random values

// I need arrays! ok, how many?
// 1 job 1 location 1 partner random number(0-10) house (10,300)

const jobs = ['webmaster', 'CEO', 'drug dealer', 'pizzaman', 'bar tender', 'rock star', 'clown']
const locations = ['berlin', 'london', 'hong-kong', 'pekin', 'bruge', 'amsterdam', 'circus']
const partner = ['mike', 'john', 'maria', 'teresa', 'kim', 'madonna']
const jobId = Math.floor(Math.random() * jobs.length);
const locationId = Math.floor(Math.random() * locations.length);
const partnerId = Math.floor(Math.random() * partner.length);
const kids = Math.floor(Math.random() * 10);
const mq = Math.floor(Math.random() * (300 - 30) + 30);

//console.log(tellFortune(jobs[jobId], locations[locationId], partner[partnerId], kids, mq));

document.getElementById('fortune').innerHTML = tellFortune(jobs[jobId], locations[locationId], partner[partnerId], kids, mq)