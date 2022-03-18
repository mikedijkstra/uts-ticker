// Set to change symbol that intervenes between headlines
const delimiter = "  //  ";

const headlinesText = `Asteroid mining company denies it is running sweatshop on the moon
Scientists discover new way to make a black hole: just don't pay your rent for 10 years
Luxury employment vs permanent retirement
Gorilla sighted after 27 years, now living in SimCity
Slam poetry goes AI: first AIs to compete in tournament
Study finds that over half of people who say "I can't believe this is real life" are just pretending to be surprised
AIs don’t have gender, or do they?
Studies now revealing the decaying neural system and increasingly corrupt consciousness
Copyrights dissolved? New controversial laws repealed
Synthetic water replacement actually found to be sentient?
New Hypnoreal Bodysuits set to save thousands of on-site militia
Dolphins all dead: Marine biologist fails to save species from extinction
How to be an intergalactic diplomat
Neuroscientists believe that the ability to predict the future is not an innate skill but can be learned
First Gen Inc. launches their new, innovative, cyber-organic modification for optimistic Sci-heads!
The Microchip Spikers: how to protect your identity from thieves
Space Capitalism sends stock market into volatile freefall`;

// The second 2 replace all's get some wierd utf-8 misnomers that fuck up how single quotes are displayed
export default headlinesText.replaceAll("\n", delimiter).replaceAll("&#8216;", "'").replaceAll("&#8217;", "'");