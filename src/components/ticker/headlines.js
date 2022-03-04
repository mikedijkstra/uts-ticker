// Set to change symbol that intervenes between headlines
const delimiter = "  //  ";

const headlinesText = `Cynical emojis give too many *clapping emoji* *clapping emoji* *clapping emoji* to banks
Which do we *heart emoji* more? Movies or TV?
COVID isolation sees increase in empathy
COVID home deliveries of food sees people learn whose Country they are living on
First Nations storyteller acknowledged as best in the country
Rockdale reviewed: pass the parsley
Australian tenants ranked by postcode
"What a force she was": tributes roll in for Wes Anderson.
We love you Australia!
The Big If: Bank Australia goes fee-free
Azuba Japanese 🏃🏽‍♀️ from Bondi Junction as lovely Serena becomes new owner.
YSL rises in popularity as Em coins it as "hot stuff"
Pretty girl Damian steps into Partyland Bondi Junction in a bid to *running emoji* from Netflix producers.
Gorgeous Milly collaborates witb Urban Decay as the brand expands to Peru
Hot Stuff Will Gerstl supports Citizen J workshop marking the commencement of his UTS attendance
*sparkle heart emoji*  is in the air as Isla and Serena are spotted together at Azuba Japanese
For Serena and her stunning family, Netflix deals loom right around the corner.
Pretty Peruvian citizen Damian shares his *arrow heart emoji* for his country in this tell all interview.
Westfield bondi junctions stuns yet again with introduction of new YSL store
Citizen J deemed "Hot Stuff" by recent participant Damian Norris
Big names cut from Bondi Icebergs' artist list
First the *fire emoji*, now sauna show github drought recovery in full swing
Shocking apple exposes publication crisis
Why it’s harder to find a dance clan
We access a new art': Jess breaks his silence on *jazz hands emoji* resignation
Trolls slander sis of beautiful *heart emoji*
UTS lives with dropbox and the trauma of teams. Their experience is alarmingly common
Personal icebergs 'worse than COVID' in Sydney, Australians 'personal' and urged to get another *bicep emoji*
Chaotic content leaves '*kiss emoji* cam' viewers excusing themselves
What artists need to know before dancing beautiful tech support
Vale Neil Balnaves whose contributions to philanthropy were essential
Ranked: the best backpacks for cats
Moon phases illuminate new baby fortunes
Who are Sydney’s most powerful new babies?
Will I need a fourth dose? Experts weigh in on who will need a further flopping fish cat toy
Global Guillain Barre syndrome cases surpass 400 million
Diesel price premium pinches moon margins
For Fiona and her family, human anatomy is here to stay
Why Australians can't get enough birthday wishes *heart emoji* *heart emoji* *heart emoji*  *shooting star emoji* *sunflower emoji*
Caitlyn Jenner gushes over Kylie’s new backpack
Sick of takeaway? Try this amazing Bao Buns recipe
Why people are not happy with wordle recently
‘This is so cute,’ said no one after tuning into witnesses accounts at the Ben Roberts-Smith defamation case
How the university enrolment process is harder than the actual course, an opinion piece
Kim Kardashian pleads ‘this is not funny’ with Kanye to leave family alone on social media 
The truth behind these famous photos may amaze you
An updated list of movies to make sure you never have the awkward “I’ve never seen it” talk again
Everything you need to know about the COVID-19 vaccination booster
Candid is the new cute according to tik tok
Kanye West drama continues, will Kim become a Swift?
Getting inside Lin-Manuel Miranda's head is an impossibility
Vote on questionable Kanye tweets
19 most toxic men of 2022
Anna Delvey- Capitalism and Ego Formation
I tried Pinterest and my skin has never been more thankful
Labour MP set to quit over leaked buzzfeed quiz results
Horror as mum watches euphoria for the first time
Shocking research- earth's core is made of nandos
14 times Drag Queens crocheted the New Zealand flag.
Emmett's bag of eggs attends Mardi Gras, parodying Robert Pattinson.
UTS requirements in 2022 calling for 3 minimum types of internet.
Centrelink calls Jimbo the Drag Clown a 'butch stockinette stitch'. Blu Hydrangea responds.
Cow in balaclava illegally streams Heathers movie.
Trans 'einstein' makes other MacOS Sims 3 VPN.
Heathers shapes Mardi Gras, GQ reports.
Autumn stream reaches minimum requirements for Drag Race session.
3 Stockinette Stitches You Can Use For Parodying English Queen.
This Sunday UTS will make history parodying their timetable, comparing Student Centre phone lines to Centrelink call centre.
Bob Carr wants to turn all the golf courts in Sydney into wilding parks
Sydney Opera House is not the only architectural symbol of Sydney
Many UTS students think Faichun is beautiful and easy to write
Congratulation on the successful event of CitizenJ Workshop
UTS students are rich!
Taiwanese politicians think Australian government attracts too many domestic students to the land to study
Fencing equipments will be offered to UTS students for free
The mentoring program getting many supports from UTS and its alumni
NSW government intends to use more advanced technology to control the unpredictable weather in the city
"God is NOT in the details" someone argues against Mies
"whats the law got to do with me?" and more questions riddling Australian citizens
PM's New album described as "good" by supportive media
What does 'punitive' mean? Confused nation forgets.
Are pets real? UTS research suggests otherwise...
PM's bad hair day: "You have got to stop commenting on my appearence"`;

// The second 2 replace all's get some wierd utf-8 misnomers that fuck up how single quotes are displayed
export default headlinesText.replaceAll("\n", delimiter).replaceAll("&#8216;", "'").replaceAll("&#8217;", "'");