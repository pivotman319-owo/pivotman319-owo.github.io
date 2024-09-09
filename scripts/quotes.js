var quoteStrings = [
    "\"It's a paradox, there <i>is</i> no answer!\"",
    "\"marketing ran out of ideas to pick and just <a href=\"https://pivotman319-owo.github.io/garbage/whs-writeup-win7rtm-ultimateE.png\">used the OS codename</a>\" --pivot",
    "\"When a mommy and a daddy love each other very much, the daddy wants to give the mommy a special gift. So he buys a \"stay-at-home\" server.\"",
    "\"miku is hiding in my wifi singing skibidi toilet send help\" --Wheatley",
    "\"Our offerings even include rack-mountable products for your pets.\"",
    "\"it was a fatal, undeserved mistake for me to publicly release this<br/>unleaking it now /j\" --pivot",
    "<h3>STOP RUNNING WINDOWS BETAS</h3><ul><li>PRE-RELEASE SOFTWARE WAS NOT MEANT TO BE MAINED</li><li>YEARS OF COLLECTING yet NO REAL-WORLD USE FOUND for daily driving AN ECOSYSTEM ENGINEERING BUILD</li><li>Wanted to use an operating system for a laugh? We had a thing for that: It was called a \"STABLE CONSUMER RELEASE\"</li><li>\"Yes please run the last x86 build of Windows on my PC. Please run an unsupported RS2_RELEASE ARM build on my Surface\" - Statements dreamed up by the Utterly Deranged</li></ul>LOOK at what Software Developers have been demanding your Respect for all this time, with all the bugs we suffered from for them:<h4>(This is REAL NTDEV, done by real Developers)</h4><table style=\"width:100%;\"><tr><td><img id=\"STOP1\" src=\"./images/quotes/stop1.png\" height=65/><td><img id=\"STOP2\" src=\"./images/quotes/stop2.png\" height=65/><td><img id=\"STOP3\" src=\"./images/quotes/stop3.png\" height=65/></tr><tr><td><b>?????<b></td><td><b>???????<b></td><td><b>?????????????????</b></td></table>\"Hello I would like <img src=\"images/quotes/STOP_RED.png\" width=\"24\" height=\"24\" style=\"transform: translate(0, 25%);\"/> redpill please\"<br/><h4>They have played us for absolute fools</h4>",
    "\"i threw a wooden stick for my dog to catch, then it violently exploded into a flurry of giblets for no reason and my build bugchecked because of this\" --pivot",
	"<img id=\"mind-explode\" src=\"./images/quotes/mind-explode.gif\" alt=\"cat chewing on tail being held by person. caption reads 'me trying to explode you with my mind'\" width=\"200\"/>",
	"<img id=\"termite\" src=\"./images/quotes/termite.gif\" alt=\"cat looking dumbfoundedly into camera for several seconds. caption reads 'my FBI agent watching me look up ‘can you buy termites’, ‘what termite consumes the most wood’, ‘formosan termite queen live’, ‘formosan termite workers’, ‘Orlando City Hall blueprint’, and ‘Orlando City Hall visitor hours’.\" width=\"250\"/>",
	"<img id=\"ALARM\" src=\"./images/quotes/ALARM.gif\" alt=\"brown and white cat staring at viewer while a small alarm light is placed on its head, strobing a red flash repeatedly.\" width=\"150\"/>",
	"<img id=\"gayer\" src=\"./images/quotes/i have to get gayer.png\" alt=\"anthropomorphic cartoon cat typing away at laptop with the term ‘i have to get gayer’\" width=\"175\"/>",
	"<img id=\"soda\" src=\"./images/quotes/soder.gif\" alt=\"Darth Vader crushing a child's Pepsi drink in a cinema. the following conversation in the caption ensues - Kid: ‘Mmmm!! This oder smo good!’; Darth Vader: ‘no fuck you soder lol’\" width=\"175\"/>",
	"<img id=\"HomeBasic\" src=\"./images/quotes/vistahomebasic.gif\" alt=\"edited clip of the Fortnite Season 9 trailer with Jonesy and Peely opening a fridge to discover nothing but a Windows Vista Home Basic product box\" width=\"175\"/><br/> --Scamdisk",
	"\"i can't wait to have my fursuit produced by Samsung\" --pivot",
	"\"the other end of the ridiculous dish meal names spectrum includes violent threats as the dish name\" --pivot",
	"\"<a href=\"http://iowa.gotthefacts.org/011607/5000/PX05651.pdf\">Is this just propaganda mail???</a>\" --Mike Appe, in a Windows 95 development email dated 7th April 1994",
	"\"<a href=\"./images/quotes/Fx.png\">Fx</a>\" --pivot",
	"\"Please rate your overall satisfaction with the I did not order a side item or dessert.\" --a Burger King survey",
	"\"Star Battlestar Galactica Gate: Gandalf\"",
	"\"what the fuck is the Window 7 Mega Ultra Edition and where can i find it\" --pivot",
	"<a href=\"https://store.steampowered.com/app/515900\">Steam AppId 515900</a>",
	"Queer cats? In <i>my</i> website? It's more likely than you think.",
	"\"One crossed wire, one wayward pinch of potassium cholrate, one errant twitch... and kablooey!\"",
	"> \"First look at Netflix’s new Korean series ‘CHICKEN NUGGET.’\"<br/>\"i thought <a href=\"https://en.wikipedia.org/wiki/Reborn_as_a_Vending_Machine,_I_Now_Wander_the_Dungeon\">dying in a horrible accident and being resurrected into a vending machine that somehow plays a major part in a role-playing video game</a> was already ridiculous enough\" --pivot",
	"\"<a href=\"https://wetdry.world/@winload_exe/112524276793197756\">guy that hoards approximately 275-400 GB worth of Windows builds on their hard drive to diff each other against (they might never get to actually run all of them)</a>\" --pivot",
	"\"i just rediscovered traumatic screenshots of myself fucking <a href=\"./images/quotes/acor.png\">bolting on portions of client NT onto 19551 serverdatacenteracor</a>\" --pivot",
	"\"Balls\" --chfour",
	"\"DO NOT OPEN CALCULATOR IN 7792\" --Mainnn",
	"\"It's Arbiterrific!\"",
	"\"you're either a smart fella, or a fart smella\" --dusty",
	"\"public service announcement: do not google famous wrestler bryan danielson's opinions on fruits\" --wipeout",
	"\"Back in 2007, you could go to Burger King and get a Coke and Fries Halo. This was to market Halo 3, which was set to release later that year. In this promotion, they put Halo on Coca-Cola and fries, featuring Master Chief and the release date of Halo 3. Because of this we have Coke and Fries Halo. The cool thing about Coke and Fries Halo is the design, it looks like Halo.\"",
];

function getQuoteTag() {
    var quote = '<p style=\"margin-top: -25px\"><h3>The Random Quote Extravaganza:</h3>';
    var randomIndex = Math.floor(Math.random() * quoteStrings.length);
    quote += quoteStrings[randomIndex];
    quote += '</p>';
    return quote;
}