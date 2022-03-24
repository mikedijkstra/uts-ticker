// Set to change symbol that intervenes between headlines
const delimiter = "  //  ";

const headlinesText = `Facebook admits that most people are bots
#Luxury #Technology #Billionaires #Retirement #Diversity
NFTs the new refrigerated coke
Military AI drone network hacked by 15 year old
"I can't believe this is real life”
Australian government invests in deepfake AI research lab
An end to war? AI researcher says "war is obsolete"  as country pledges its allegiance to technology 
Transhumanism: The movement that will save the world
3 grams of ART selling on the low (no tax included)
3D Stem Cell New Vegan Pork Meat
WhY HumAn intervEntion in EleCtions is a ~TeRrible IdeA~ and should absolutely be banned 100 percent
My dealer dropped off a few bags of Picasso Originals
How to be Techlingual: The Javascript Revolution
#1st! #f1rst #first #phirst
AI protest for sentient recognition in unions
GOD AI creates the digital cult, offers NFTs to followers, human and robot alike
“Brilliant…” High school prodigy produces metaverse underground music festival`;

// The second 2 replace all's get some wierd utf-8 misnomers that fuck up how single quotes are displayed
export default headlinesText.replaceAll("\n", delimiter).replaceAll("&#8216;", "'").replaceAll("&#8217;", "'");