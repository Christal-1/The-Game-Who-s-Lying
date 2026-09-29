/* =========================================================
   WHO'S LYING?
   Detective Case Files — Game Engine
========================================================= */

const STORAGE_KEY = "whosLyingDetectiveV3";


/* =========================================================
   CASE DATABASE
========================================================= */

const CASES = [

    {
        id: 1,
        number: "01",
        title: "The Missing Laptop",
        location: "Marketing Office",
        icon: "💻",
        difficulty: "EASY",
        time: 150,

        description:
            "A company laptop disappeared from a locked marketing office shortly before a client presentation. Four employees had reasons to be near the room, but only one story conflicts with the evidence.",

        objective:
            "Identify the person whose story cannot be true.",

        tags: ["OFFICE", "THEFT", "ACCESS LOG"],

        suspects: [
            {
                id: "sarah",
                name: "Sarah",
                role: "Marketing Manager",
                avatar: "👩🏽",
                access: "Office access",
                alibi: "Mostly consistent",
                motive: "Low",
                statement: "I left the office at around 8:10 PM. I didn't return after that."
            },
            {
                id: "mike",
                name: "Mike",
                role: "IT Support",
                avatar: "👨🏽",
                access: "IT master access",
                alibi: "Unverified",
                motive: "Possible",
                statement: "I was helping another employee with a computer problem downstairs."
            },
            {
                id: "jessica",
                name: "Jessica",
                role: "Sales Executive",
                avatar: "👩🏾",
                access: "Personal access card",
                alibi: "Contradiction",
                motive: "Possible",
                statement: "I only stopped by the office earlier. I wasn't there after 8 PM."
            },
            {
                id: "daniel",
                name: "Daniel",
                role: "Office Assistant",
                avatar: "👨🏾",
                access: "Limited access",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I passed the office around 8:21 PM while taking documents upstairs."
            }
        ],

        clues: [
            {
                id: "computer",
                icon: "🖥️",
                title: "Computer Activity",
                text: "The office computer shows the laptop was unplugged at exactly 8:17 PM. The login screen was still active.",
                note: "Someone was still working near the desk shortly before the laptop disappeared.",
                category: "TIMELINE"
            },
            {
                id: "cctv",
                icon: "📹",
                title: "Hallway CCTV",
                text: "Sarah is seen walking past at 8:12 PM. Daniel passes at 8:21 PM. No other person is captured entering from the hallway during this period.",
                note: "The camera does not cover the electronic access door itself.",
                category: "CAMERA"
            },
            {
                id: "door",
                icon: "🚪",
                title: "Access Log",
                text: "The electronic lock records an entry at 8:16 PM using Jessica's access card. The door opens from inside again at 8:19 PM.",
                note: "The access system records the card used, not necessarily who physically carried it.",
                category: "ACCESS"
            },
            {
                id: "desk",
                icon: "📝",
                title: "Desk Note",
                text: "A handwritten note reads: \"Laptop packed for client demo — 8:18.\" The handwriting matches Jessica's meeting notes.",
                note: "The time on the note is only two minutes after Jessica's access card was used.",
                category: "DOCUMENT"
            },
            {
                id: "coffee",
                icon: "☕",
                title: "Coffee Cup",
                text: "A half-finished coffee sits beside the desk. It is still warm, with a receipt showing a purchase at 8:13 PM.",
                note: "This is useful for the timeline but does not identify the person by itself.",
                category: "RED HERRING"
            },
            {
                id: "drawer",
                icon: "🗄️",
                title: "Desk Drawer",
                text: "The drawer contains a printed client presentation and a sticky note reminding Jessica to prepare the laptop.",
                note: "The document establishes a reason for Jessica to handle the laptop, but motive alone is not proof.",
                category: "DOCUMENT"
            }
        ],

        correct: "jessica",

        hints: [
            "Start with the timeline. Look for evidence that places someone in the office between 8:15 PM and 8:20 PM.",
            "The access log records a specific card being used at 8:16 PM. Compare that with the suspect statements.",
            "Jessica's card opened the office at 8:16 PM and her handwriting appears on a note saying the laptop was packed at 8:18 PM."
        ],

        solution:
            "<strong>Jessica was responsible.</strong><br><br>" +
            "Her statement says she was not in the office after 8 PM, but her access card opened the office at 8:16 PM. Two minutes later, a note in her handwriting records that the laptop was packed for the client demonstration.<br><br>" +
            "The coffee and CCTV details help establish the timeline, but the strongest connection is the access record combined with the desk note."
    },


    {
        id: 2,
        number: "02",
        title: "The Vanishing Necklace",
        location: "Riverside Hotel",
        icon: "💎",
        difficulty: "EASY",
        time: 165,

        description:
            "A valuable necklace disappears from a hotel display shortly before a private event. Everyone nearby claims they never touched the display.",

        objective:
            "Determine who moved the necklace and why.",

        tags: ["HOTEL", "JEWELLERY", "TIMELINE"],

        suspects: [
            {
                id: "maya",
                name: "Maya",
                role: "Event Coordinator",
                avatar: "👩🏽",
                access: "Display area",
                alibi: "Contradiction",
                motive: "Possible",
                statement: "I was arranging flowers in the ballroom. I never went near the display."
            },
            {
                id: "leo",
                name: "Leo",
                role: "Photographer",
                avatar: "👨🏻",
                access: "Guest areas",
                alibi: "Mostly consistent",
                motive: "Low",
                statement: "I photographed the necklace earlier, then went outside for air."
            },
            {
                id: "nina",
                name: "Nina",
                role: "Guest Services",
                avatar: "👩🏻",
                access: "Reception area",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I was at reception checking guest registrations."
            },
            {
                id: "omar",
                name: "Omar",
                role: "Security Officer",
                avatar: "👨🏾",
                access: "Full building",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I was monitoring the entrance cameras."
            }
        ],

        clues: [
            {
                id: "display",
                icon: "💎",
                title: "Display Case",
                text: "The necklace is missing, but the case itself shows no sign of forced entry.",
                note: "Someone likely had legitimate access or was able to open the case without damaging it.",
                category: "SCENE"
            },
            {
                id: "photo",
                icon: "📸",
                title: "Guest Photograph",
                text: "Leo's camera contains a photograph taken at 7:42 PM showing the necklace still inside the display.",
                note: "Leo was near the display earlier, but the photograph proves the necklace had not disappeared yet.",
                category: "CAMERA"
            },
            {
                id: "envelope",
                icon: "✉️",
                title: "Key Envelope",
                text: "A spare display key was found inside an envelope behind the reception desk. The envelope has a small blue paint mark.",
                note: "The paint mark matches the decorative paint used on the event coordinator's flower arrangement stand.",
                category: "OBJECT"
            },
            {
                id: "paint",
                icon: "🎨",
                title: "Blue Paint",
                text: "A tiny blue paint mark is visible on Maya's glove.",
                note: "This connects Maya to the same area where the spare key envelope was found.",
                category: "TRACE"
            },
            {
                id: "register",
                icon: "📋",
                title: "Reception Register",
                text: "Nina's register shows continuous guest check-ins between 7:45 PM and 8:05 PM.",
                note: "Her timeline makes it unlikely she left reception during the key movement.",
                category: "DOCUMENT"
            }
        ],

        correct: "maya",

        hints: [
            "Don't assume the photographer is responsible simply because he was near the necklace.",
            "Look at the key rather than the display itself. Something links the key to a particular person.",
            "The blue paint connects Maya to the spare display key, while her statement says she never went near the display."
        ],

        solution:
            "<strong>Maya moved the necklace.</strong><br><br>" +
            "Leo looks suspicious because he photographed the necklace, but his photograph proves it was still there at 7:42 PM. The important evidence is the spare key envelope and the matching blue paint on Maya's glove.<br><br>" +
            "Maya claimed she never went near the display, but the physical evidence places her near the key."
    },


    {
        id: 3,
        number: "03",
        title: "The Party Switch",
        location: "Rooftop Party",
        icon: "🎁",
        difficulty: "MEDIUM",
        time: 180,

        description:
            "A birthday gift containing an expensive watch disappears during a crowded rooftop party. Someone switched the gift bag, leaving behind a convincing decoy.",

        objective:
            "Find the person who switched the gift.",

        tags: ["PARTY", "SWITCH", "RED HERRING"],

        suspects: [
            {
                id: "noah",
                name: "Noah",
                role: "Event Helper",
                avatar: "👨🏻",
                access: "Gift table",
                alibi: "Contradiction",
                motive: "Possible",
                statement: "I was taking photos near the balcony when the gift disappeared."
            },
            {
                id: "aisha",
                name: "Aisha",
                role: "Friend",
                avatar: "👩🏾",
                access: "Guest",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I stayed beside the cake table for most of the evening."
            },
            {
                id: "ben",
                name: "Ben",
                role: "Cousin",
                avatar: "👨🏽",
                access: "Guest",
                alibi: "Unclear",
                motive: "Possible",
                statement: "I only went to the gift table once to put my card down."
            },
            {
                id: "chloe",
                name: "Chloe",
                role: "Photographer",
                avatar: "👩🏻",
                access: "Entire party",
                alibi: "Mostly consistent",
                motive: "Low",
                statement: "I was taking pictures all evening and didn't touch any gifts."
            }
        ],

        clues: [
            {
                id: "bags",
                icon: "🎁",
                title: "Gift Bags",
                text: "Two black gift bags look almost identical. One contains the expected birthday card but the watch box is missing.",
                note: "The switch was designed to be difficult to notice.",
                category: "SCENE"
            },
            {
                id: "photo",
                icon: "📸",
                title: "Party Photograph",
                text: "A photo taken at 9:18 PM shows Noah standing directly beside the gift table.",
                note: "This conflicts with Noah's claim that he was near the balcony at that time.",
                category: "PHOTO"
            },
            {
                id: "sticker",
                icon: "🏷️",
                title: "Silver Sticker",
                text: "A silver decorative sticker is stuck to the inside handle of the swapped bag.",
                note: "The same stickers were being used on the event photo booth.",
                category: "TRACE"
            },
            {
                id: "message",
                icon: "📱",
                title: "Phone Message",
                text: "Noah sent a message at 9:21 PM saying, \"Heading downstairs now.\"",
                note: "The message suggests he was still on the rooftop shortly before then.",
                category: "TIMELINE"
            },
            {
                id: "floor",
                icon: "🔍",
                title: "Floor Fragment",
                text: "A torn piece of silver sticker is found beside the gift table.",
                note: "It appears to have come from the same decorative sheet.",
                category: "TRACE"
            },
            {
                id: "camera",
                icon: "📷",
                title: "Camera Strap",
                text: "Chloe's camera strap was found near the gift table.",
                note: "This looks suspicious, but Chloe had been moving around taking photographs.",
                category: "RED HERRING"
            }
        ],

        correct: "noah",

        hints: [
            "Focus on where each person says they were when the gift was switched.",
            "Compare Noah's statement with the timestamped photograph.",
            "The photograph places Noah at the gift table at 9:18 PM, contradicting his claim that he was at the balcony."
        ],

        solution:
            "<strong>Noah switched the gift.</strong><br><br>" +
            "The camera strap is a red herring because Chloe was working as the photographer. The decisive evidence is the 9:18 PM photograph showing Noah at the gift table, directly contradicting his statement that he was at the balcony.<br><br>" +
            "The silver sticker fragment supports the idea that the bag was deliberately switched."
    },


    {
        id: 4,
        number: "04",
        title: "Room 307",
        location: "Moonlight Hotel",
        icon: "🚪",
        difficulty: "MEDIUM",
        time: 190,

        description:
            "A sealed envelope disappears from Room 307 while the guest insists nobody entered. The electronic door record appears to support the claim — but another route into the room exists.",

        objective:
            "Discover how the room was accessed.",

        tags: ["HOTEL", "LOCKED ROOM", "BYPASS"],

        suspects: [
            {
                id: "ethan",
                name: "Ethan",
                role: "Maintenance Technician",
                avatar: "👨🏻",
                access: "Service access",
                alibi: "Contradiction",
                motive: "Possible",
                statement: "I never entered Room 307 that evening."
            },
            {
                id: "ruby",
                name: "Ruby",
                role: "Guest",
                avatar: "👩🏽",
                access: "Room key",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I stayed in the room until dinner."
            },
            {
                id: "sam",
                name: "Sam",
                role: "Concierge",
                avatar: "👨🏽",
                access: "Master key",
                alibi: "Mostly consistent",
                motive: "Low",
                statement: "I never left the lobby during the relevant period."
            },
            {
                id: "lina",
                name: "Lina",
                role: "Housekeeper",
                avatar: "👩🏾",
                access: "Service access",
                alibi: "Confirmed",
                motive: "Low",
                statement: "My shift ended before the envelope disappeared."
            }
        ],

        clues: [
            {
                id: "door",
                icon: "🔐",
                title: "Electronic Door Log",
                text: "The door shows no normal key-card entry between 6:00 PM and 7:00 PM.",
                note: "That does not prove nobody entered.",
                category: "ACCESS"
            },
            {
                id: "panel",
                icon: "🛠️",
                title: "Service Panel",
                text: "A maintenance panel beside the room can bypass the electronic lock when activated with a service tool.",
                note: "The panel was left slightly open.",
                category: "SCENE"
            },
            {
                id: "tool",
                icon: "🔧",
                title: "Maintenance Tool",
                text: "A specialised lock tool is found in a service trolley. Fine dust on the tool matches the dust inside the service panel.",
                note: "The tool was recently used.",
                category: "TRACE"
            },
            {
                id: "sheet",
                icon: "📋",
                title: "Maintenance Sheet",
                text: "Ethan's name appears beside a note reading \"Room 307 — panel inspection\" at 6:35 PM.",
                note: "The sheet provides a reason for Ethan to be near the panel.",
                category: "DOCUMENT"
            },
            {
                id: "camera",
                icon: "📹",
                title: "Corridor Camera",
                text: "Ethan is seen pushing a maintenance trolley toward the third-floor service corridor at 6:31 PM.",
                note: "The camera does not show what happened inside the room.",
                category: "CAMERA"
            },
            {
                id: "envelope",
                icon: "✉️",
                title: "Envelope Seal",
                text: "The missing envelope is later found with a small grease mark on the seal.",
                note: "The same type of grease is used on the hotel's maintenance tools.",
                category: "TRACE"
            }
        ],

        correct: "ethan",

        hints: [
            "The door log tells you about normal access. Ask whether there is another way inside.",
            "The service panel and maintenance tool are more important than the electronic lock.",
            "Ethan's maintenance sheet, trolley footage and recently used service tool place him at the alternative entry point."
        ],

        solution:
            "<strong>Ethan used the maintenance access panel.</strong><br><br>" +
            "The electronic lock showed no normal key-card entry, but that did not mean the room was never entered. A maintenance panel beside the room can bypass the electronic lock.<br><br>" +
            "Ethan's maintenance sheet, corridor footage and the recently used service tool connect him to that alternative entrance."
    },


    {
        id: 5,
        number: "05",
        title: "The Midnight Traveller",
        location: "Night Train",
        icon: "🚆",
        difficulty: "HARD",
        time: 210,

        description:
            "A sealed envelope disappears during a night train journey. One passenger insists they slept through the entire stop, but the travel records tell another story.",

        objective:
            "Find the passenger whose timeline doesn't add up.",

        tags: ["TRAIN", "TIMELINE", "HARD"],

        suspects: [
            {
                id: "clara",
                name: "Clara",
                role: "Passenger",
                avatar: "👩🏻",
                access: "Carriage access",
                alibi: "Contradiction",
                motive: "Possible",
                statement: "I stayed asleep in my seat throughout the station stop."
            },
            {
                id: "james",
                name: "James",
                role: "Passenger",
                avatar: "👨🏽",
                access: "Carriage access",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I was in the dining carriage."
            },
            {
                id: "zuri",
                name: "Zuri",
                role: "Passenger",
                avatar: "👩🏾",
                access: "Carriage access",
                alibi: "Mostly consistent",
                motive: "Low",
                statement: "I was speaking with the conductor."
            },
            {
                id: "felix",
                name: "Felix",
                role: "Conductor",
                avatar: "👨🏻",
                access: "Full train",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I was checking tickets in the front carriage."
            }
        ],

        clues: [
            {
                id: "ticket",
                icon: "🎫",
                title: "Ticket Scan",
                text: "Clara's ticket is scanned at the station café during the exact stop when she claims she was asleep.",
                note: "The scan proves her ticket was physically presented outside the carriage.",
                category: "TIMELINE"
            },
            {
                id: "announcement",
                icon: "📢",
                title: "Station Announcement",
                text: "The conductor's log records a seven-minute station stop at 00:18.",
                note: "The stop was long enough for a passenger to leave the carriage.",
                category: "DOCUMENT"
            },
            {
                id: "luggage",
                icon: "🏷️",
                title: "Luggage Tag",
                text: "A luggage tag belonging to Clara is found beside the dining carriage door.",
                note: "The tag appears to have been torn from a bag during movement.",
                category: "TRACE"
            },
            {
                id: "witness",
                icon: "👀",
                title: "Witness Note",
                text: "A passenger remembers seeing someone in a dark coat returning to the sleeping carriage shortly after the station announcement.",
                note: "The witness could not identify the person's face.",
                category: "WITNESS"
            },
            {
                id: "seal",
                icon: "✉️",
                title: "Envelope Seal",
                text: "The envelope was opened and resealed with adhesive commonly used in the station café.",
                note: "This connects the missing envelope to the station stop.",
                category: "TRACE"
            },
            {
                id: "reflection",
                icon: "🪟",
                title: "Window Reflection",
                text: "A reflection in a passenger's photograph shows Clara's distinctive coat near the station platform.",
                note: "The image was taken shortly after the train stopped.",
                category: "PHOTO"
            }
        ],

        correct: "clara",

        hints: [
            "Build a timeline around the station stop rather than relying on everyone's statements.",
            "One passenger claims to have stayed on the train, but their travel record says otherwise.",
            "Clara's ticket was scanned at the station café and her coat appears in a platform reflection."
        ],

        solution:
            "<strong>Clara's timeline is false.</strong><br><br>" +
            "Clara says she slept through the station stop, but her ticket was scanned at the station café. Her luggage tag was also found near the dining carriage, and a photograph captures her distinctive coat on the platform.<br><br>" +
            "The evidence places her outside the carriage during the exact period when the envelope disappeared."
    },


    {
        id: 6,
        number: "06",
        title: "The Mysterious Message",
        location: "Community Tech Club",
        icon: "💬",
        difficulty: "HARD",
        time: 220,

        description:
            "A mysterious message appears on the club's shared computer, causing confusion before an important presentation. Four members had access to the room.",

        objective:
            "Determine who created the mysterious message.",

        tags: ["DIGITAL", "COMPUTER", "HARD"],

        suspects: [
            {
                id: "tariq",
                name: "Tariq",
                role: "Tech Volunteer",
                avatar: "👨🏾",
                access: "Admin access",
                alibi: "Contradiction",
                motive: "Possible",
                statement: "I was only testing the Wi-Fi. I never used the shared computer."
            },
            {
                id: "mia",
                name: "Mia",
                role: "Club Member",
                avatar: "👩🏻",
                access: "Standard access",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I was preparing presentation slides."
            },
            {
                id: "owen",
                name: "Owen",
                role: "Club Member",
                avatar: "👨🏻",
                access: "Standard access",
                alibi: "Mostly consistent",
                motive: "Low",
                statement: "I was playing the puzzle game in the back room."
            },
            {
                id: "grace",
                name: "Grace",
                role: "Club Coordinator",
                avatar: "👩🏽",
                access: "Admin access",
                alibi: "Confirmed",
                motive: "Low",
                statement: "I was helping Mia with the presentation."
            }
        ],

        clues: [
            {
                id: "message",
                icon: "💬",
                title: "Mysterious Message",
                text: "The shared computer displays a message that was created at 18:42.",
                note: "The message was created shortly after the Wi-Fi test began.",
                category: "DIGITAL"
            },
            {
                id: "history",
                icon: "🧾",
                title: "Account History",
                text: "The admin account was switched into the active session at 18:41.",
                note: "Only two people had permission to perform that action.",
                category: "DIGITAL"
            },
            {
                id: "wifi",
                icon: "📡",
                title: "Wi-Fi Test",
                text: "A network diagnostic was started from Tariq's laptop at 18:40.",
                note: "The test itself is normal and could have been legitimate.",
                category: "RED HERRING"
            },
            {
                id: "shortcut",
                icon: "⌨️",
                title: "Keyboard Shortcut",
                text: "The message was created using an admin-only keyboard shortcut.",
                note: "Standard club accounts cannot trigger the shortcut.",
                category: "DIGITAL"
            },
            {
                id: "poster",
                icon: "📄",
                title: "Poster File",
                text: "A recently edited event poster was found open behind the message window.",
                note: "The file was edited by the admin account.",
                category: "DOCUMENT"
            },
            {
                id: "device",
                icon: "💻",
                title: "Device Log",
                text: "Tariq's laptop connected to the shared computer through the club's local network at 18:41.",
                note: "The connection occurred one minute before the admin session changed.",
                category: "DIGITAL"
            },
            {
                id: "game",
                icon: "🎮",
                title: "Puzzle Game",
                text: "Owen's puzzle game was open in the back room.",
                note: "It provides a plausible distraction, but no evidence connects Owen to the shared computer.",
                category: "RED HERRING"
            }
        ],

        correct: "tariq",

        hints: [
            "Separate the normal Wi-Fi activity from the actions that require admin access.",
            "The keyboard shortcut and account history reveal what type of access was used.",
            "Tariq's device connected to the shared computer one minute before the admin session changed."
        ],

        solution:
            "<strong>Tariq created the message.</strong><br><br>" +
            "The Wi-Fi test initially looks suspicious, but the stronger evidence is digital. The admin account changed at 18:41, the message was created at 18:42, and an admin-only shortcut was used.<br><br>" +
            "Tariq's laptop connected to the shared computer at exactly the relevant time, contradicting his claim that he never used it."
    }

];


/* =========================================================
   GAME STATE
========================================================= */

let state = {
    currentCase: null,

    time: 0,
    score: 1000,
    attempts: 3,

    found: [],
    selected: null,

    hintsUsed: 0,
    hintLevelsUsed: [],

    over: false,
    timer: null,

    startTime: 0
};


/* =========================================================
   PLAYER SAVE
========================================================= */

const DEFAULT_SAVE = {
    completed: {},
    unlocked: [1],
    achievements: [],
    totalXP: 0,
    totalStars: 0
};

let save = loadSave();


function loadSave() {

    try {

        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return structuredClone(DEFAULT_SAVE);
        }

        const parsed = JSON.parse(raw);

        return {
            ...structuredClone(DEFAULT_SAVE),
            ...parsed,
            completed: parsed.completed || {},
            unlocked: parsed.unlocked || [1],
            achievements: parsed.achievements || []
        };

    } catch (error) {

        console.warn("Could not load save:", error);

        return structuredClone(DEFAULT_SAVE);
    }
}


function saveGame() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(save)
    );
}


/* =========================================================
   HELPERS
========================================================= */

const $ = selector =>
    document.querySelector(selector);


function screen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(s => s.classList.remove("active"));

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function formatTime(seconds) {

    seconds = Math.max(0, seconds);

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}


function currentCase() {
    return CASES.find(c => c.id === state.currentCase);
}


function difficultyColor(difficulty) {

    if (difficulty === "HARD") return "HARD";

    if (difficulty === "MEDIUM") return "MEDIUM";

    return "EASY";
}


function showToast(message) {

    const toast = $("#toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================================================
   RANK
========================================================= */

function getRank() {

    const solved = Object.keys(save.completed).length;
    const stars = save.totalStars;

    if (solved >= 6 && stars >= 15) {
        return "MASTER DETECTIVE";
    }

    if (solved >= 5 && stars >= 11) {
        return "DETECTIVE";
    }

    if (solved >= 3 && stars >= 7) {
        return "INVESTIGATOR";
    }

    if (solved >= 1) {
        return "JUNIOR SLEUTH";
    }

    return "ROOKIE";
}


/* =========================================================
   HOME
========================================================= */

function updateHome() {

    const completed = Object.keys(save.completed).length;

    $("#homeCases").textContent =
        `${completed} / ${CASES.length}`;

    $("#homeStars").textContent =
        save.totalStars;

    $("#homeAchievements").textContent =
        save.achievements.length;

    $("#topRank").textContent =
        getRank();

    $("#topXP").textContent =
        save.totalXP;

    $("#caseRank").textContent =
        getRank();

    $("#caseXP").textContent =
        `${save.totalXP} XP`;
}


/* =========================================================
   CASE FILES
========================================================= */

function renderCases() {

    const grid = $("#caseGrid");

    grid.innerHTML = "";

    CASES.forEach((caseData, index) => {

        const unlocked =
            save.unlocked.includes(caseData.id);

        const completed =
            save.completed[caseData.id];

        const stars =
            completed?.stars || 0;

        const card =
            document.createElement("article");

        card.className =
            `case-card ${!unlocked ? "locked" : ""} ${completed ? "completed" : ""}`;

        if (unlocked) {

            card.addEventListener("click", () => {
                openBriefing(caseData.id);
            });

        }

        const starsDisplay =
            "★".repeat(stars) +
            "☆".repeat(3 - stars);

        card.innerHTML = `

            <div class="case-card-top">

                <span class="case-file-number">
                    CASE #${caseData.number}
                </span>

                <div class="case-card-icon">
                    ${unlocked ? caseData.icon : "🔒"}
                </div>

            </div>

            <h3>
                ${unlocked ? caseData.title : "CLASSIFIED CASE"}
            </h3>

            <p>
                ${
                    unlocked
                        ? caseData.description
                        : "Complete the previous investigation to unlock this case file."
                }
            </p>

            ${
                unlocked
                    ? `
                        <div class="case-meta">
                            <span>📍 ${caseData.location}</span>
                            <span>🔎 ${caseData.clues.length} clues</span>
                            <span>⏱ ${formatTime(caseData.time)}</span>
                        </div>
                    `
                    : ""
            }

            <div class="case-card-bottom">

                ${
                    unlocked
                        ? `
                            <span class="difficulty">
                                ${difficultyColor(caseData.difficulty)}
                            </span>

                            <span class="card-stars">
                                ${starsDisplay}
                            </span>
                        `
                        : `
                            <span class="locked-label">
                                🔒 LOCKED
                            </span>
                        `
                }

            </div>
        `;

        grid.appendChild(card);
    });

    updateHome();
}


/* =========================================================
   BRIEFING
========================================================= */

function openBriefing(caseId) {

    const caseData =
        CASES.find(c => c.id === caseId);

    if (!caseData) return;

    state.currentCase = caseId;

    $("#briefingNumber").textContent =
        `CASE #${caseData.number}`;

    $("#briefingIcon").textContent =
        caseData.icon;

    $("#briefingDifficulty").textContent =
        `${caseData.difficulty} INVESTIGATION`;

    $("#briefingTitle").textContent =
        caseData.title;

    $("#briefingDescription").textContent =
        caseData.description;

    $("#briefingObjective").textContent =
        caseData.objective;

    $("#briefingLocation").textContent =
        caseData.location;

    $("#briefingSuspects").textContent =
        caseData.suspects.length;

    $("#briefingEvidence").textContent =
        caseData.clues.length;

    $("#briefingTime").textContent =
        formatTime(caseData.time);

    $("#briefingTags").innerHTML =
        caseData.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

    const completed =
        save.completed[caseId];

    $("#briefingStatus").textContent =
        completed
            ? `COMPLETED • ${completed.stars}★`
            : "ACTIVE";

    screen("briefing");
}


/* =========================================================
   START CASE
========================================================= */

function startCase() {

    const caseData = currentCase();

    if (!caseData) return;

    stopTimer();

    state.time = caseData.time;
    state.score = 1000;
    state.attempts = 3;

    state.found = [];
    state.selected = null;

    state.hintsUsed = 0;
    state.hintLevelsUsed = [];

    state.over = false;
    state.startTime = Date.now();

    $("#hintDisplay").classList.add("hidden");

    document
        .querySelectorAll(".hint-btn")
        .forEach(button => {
            button.disabled = false;
        });

    $("#accuseBtn").disabled = true;

    renderGame();

    screen("game");

    startTimer();
}


/* =========================================================
   GAME RENDER
========================================================= */

function renderGame() {

    const caseData = currentCase();

    $("#gameCaseNumber").textContent =
        `CASE #${caseData.number}`;

    $("#gameCaseTitle").textContent =
        caseData.title;

    $("#sceneTitle").textContent =
        caseData.location;

    $("#sceneTime").textContent =
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    $("#suspectCount").textContent =
        caseData.suspects.length;

    renderSuspects();
    renderSceneEvidence();
    renderEvidence();

    updateGameUI();
}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    state.timer =
        setInterval(() => {

            if (state.over) return;

            state.time--;

            updateGameUI();

            if (state.time <= 0) {

                state.time = 0;

                finishCase(false, "Time ran out before you could close the investigation.");
            }

        }, 1000);
}


function stopTimer() {

    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
}


/* =========================================================
   GAME UI
========================================================= */

function updateGameUI() {

    const caseData = currentCase();

    $("#timer").textContent =
        formatTime(state.time);

    $("#score").textContent =
        Math.max(0, state.score);

    $("#attempts").textContent =
        "♥ ".repeat(state.attempts) +
        "♡ ".repeat(3 - state.attempts);

    $("#progressText").textContent =
        `${state.found.length} / ${caseData.clues.length} evidence collected`;

    $("#evidenceCount").textContent =
        `${state.found.length} / ${caseData.clues.length}`;

    const percentage =
        (state.found.length / caseData.clues.length) * 100;

    $("#progressBar").style.width =
        `${percentage}%`;

    if (state.found.length === 0) {

        $("#progressMessage").textContent =
            "Start by examining the highlighted evidence.";

    } else if (state.found.length < caseData.clues.length) {

        $("#progressMessage").textContent =
            "Keep investigating. The timeline is beginning to take shape.";

    } else {

        $("#progressMessage").textContent =
            "All evidence collected. Connect the dots and make your accusation.";
    }

    const timerStat =
        document.querySelector(".timer-stat");

    timerStat.classList.toggle(
        "warning",
        state.time <= 30
    );
}


/* =========================================================
   SUSPECTS
========================================================= */

function renderSuspects() {

    const caseData = currentCase();

    const box = $("#suspects");

    box.innerHTML = "";

    caseData.suspects.forEach(suspect => {

        const button =
            document.createElement("button");

        button.className =
            "suspect";

        if (state.selected === suspect.id) {
            button.classList.add("selected");
        }

        button.innerHTML = `

            <span class="avatar">
                ${suspect.avatar}
            </span>

            <span>
                <strong>${suspect.name}</strong>
                <small>${suspect.role}</small>
            </span>

            <span class="check">
                ✓
            </span>
        `;

        button.addEventListener("click", () => {
            openSuspect(suspect.id);
        });

        box.appendChild(button);
    });
}


function openSuspect(id) {

    const caseData = currentCase();

    const suspect =
        caseData.suspects.find(s => s.id === id);

    if (!suspect) return;

    state.selected = id;

    $("#suspectAvatar").textContent =
        suspect.avatar;

    $("#suspectName").textContent =
        suspect.name;

    $("#suspectRole").textContent =
        suspect.role;

    $("#suspectAccess").textContent =
        suspect.access;

    $("#suspectAlibi").textContent =
        suspect.alibi;

    $("#suspectMotive").textContent =
        suspect.motive;

    $("#suspectStatement").textContent =
        `"${suspect.statement}"`;

    $("#selectSuspectBtn").onclick =
        () => {

            $("#suspectModal").classList.add("hidden");

            renderSuspects();

            $("#accuseBtn").disabled = false;

            showToast(
                `${suspect.name} selected. Check the evidence before accusing.`
            );
        };

    $("#suspectModal").classList.remove("hidden");
}


/* =========================================================
   SCENE EVIDENCE
========================================================= */

function renderSceneEvidence() {

    const caseData = currentCase();

    const container =
        $("#sceneEvidence");

    container.innerHTML = "";

    const positions = [
        { top: "43%", left: "35%" },
        { top: "32%", left: "70%" },
        { top: "52%", left: "79%" },
        { top: "61%", left: "35%" },
        { top: "64%", left: "68%" },
        { top: "48%", left: "53%" },
        { top: "70%", left: "53%" }
    ];

    caseData.clues.forEach((clue,index) => {

        const position =
            positions[index % positions.length];

        const button =
            document.createElement("button");

        button.className =
            "scene-hotspot";

        if (state.found.includes(clue.id)) {
            button.classList.add("collected");
        }

        button.style.top =
            position.top;

        button.style.left =
            position.left;

        button.innerHTML = `

            <span class="hotspot-icon">
                ${clue.icon}
            </span>

            <small>
                ${
                    state.found.includes(clue.id)
                        ? "REVIEW"
                        : "INVESTIGATE"
                }
            </small>
        `;

        button.addEventListener("click", () => {
            investigate(clue.id);
        });

        container.appendChild(button);
    });
}


/* =========================================================
   INVESTIGATE CLUE
========================================================= */

function investigate(clueId) {

    if (state.over) return;

    const caseData = currentCase();

    const clue =
        caseData.clues.find(c => c.id === clueId);

    if (!clue) return;

    $("#modalIcon").textContent =
        clue.icon;

    $("#modalLabel").textContent =
        state.found.includes(clue.id)
            ? "EVIDENCE REVIEW"
            : "NEW EVIDENCE";

    $("#modalTitle").textContent =
        clue.title;

    $("#modalText").textContent =
        clue.text;

    $("#modalNote").textContent =
        clue.note;

    $("#modalAction").textContent =
        state.found.includes(clue.id)
            ? "CLOSE FILE"
            : "ADD TO EVIDENCE BOARD";

    state.modalClue = clueId;

    $("#modal").classList.remove("hidden");
}


/* =========================================================
   COLLECT CLUE
========================================================= */

function collectCurrentClue() {

    const clueId =
        state.modalClue;

    if (!clueId) return;

    const caseData = currentCase();

    const clue =
        caseData.clues.find(c => c.id === clueId);

    if (!clue) return;

    if (state.found.includes(clueId)) {

        closeModal();

        return;
    }

    state.found.push(clueId);

    state.score += 100;

    closeModal();

    renderEvidence();
    renderSceneEvidence();
    updateGameUI();

    if (state.found.length === caseData.clues.length) {

        showToast(
            "All evidence collected. You have everything you need."
        );

    } else {

        showToast(
            `Evidence added: ${clue.title}`
        );
    }
}


/* =========================================================
   EVIDENCE BOARD
========================================================= */

function renderEvidence() {

    const caseData = currentCase();

    const box =
        $("#clues");

    box.innerHTML = "";

    if (!state.found.length) {

        box.innerHTML = `
            <div class="evidence-empty">

                <span>📌</span>

                <strong>
                    Your evidence board is empty.
                </strong>

                <small>
                    Investigate the highlighted objects around the office.
                </small>

            </div>
        `;

        return;
    }

    state.found.forEach(clueId => {

        const clue =
            caseData.clues.find(c => c.id === clueId);

        if (!clue) return;

        const card =
            document.createElement("article");

        card.className =
            "evidence-card";

        card.innerHTML = `

            <div class="evidence-card-head">

                <div class="evidence-card-icon">
                    ${clue.icon}
                </div>

                <strong>
                    ${clue.title}
                </strong>

            </div>

            <p>
                ${clue.text}
            </p>

            <small>
                ${clue.category}
            </small>
        `;

        card.addEventListener("click", () => {
            investigate(clue.id);
        });

        box.appendChild(card);
    });
}


/* =========================================================
   HINT SYSTEM
========================================================= */

function useHint(level) {

    if (state.over) return;

    if (state.hintLevelsUsed.includes(level)) {

        showToast("You already used this hint.");

        return;
    }

    const caseData = currentCase();

    const costs = {
        1: 75,
        2: 125,
        3: 200
    };

    state.score =
        Math.max(
            0,
            state.score - costs[level]
        );

    state.hintsUsed++;

    state.hintLevelsUsed.push(level);

    const hint =
        caseData.hints[level - 1];

    $("#hintDisplay").textContent =
        `💡 ${hint}`;

    $("#hintDisplay").classList.remove("hidden");

    const button =
        document.querySelector(
            `.hint-btn[data-hint="${level}"]`
        );

    if (button) {
        button.disabled = true;
    }

    updateGameUI();

    showToast(
        `Hint used. ${costs[level]} points deducted.`
    );
}


/* =========================================================
   ACCUSATION
========================================================= */

function openAccusation() {

    if (!state.selected || state.over) return;

    const caseData = currentCase();

    const suspect =
        caseData.suspects.find(
            s => s.id === state.selected
        );

    if (!suspect) return;

    $("#accusedName").textContent =
        suspect.name;

    $("#accusationModal").classList.remove("hidden");
}


function confirmAccusation() {

    if (!state.selected || state.over) return;

    const caseData = currentCase();

    const correct =
        state.selected === caseData.correct;

    closeAccusation();

    if (correct) {

        finishCase(true);

    } else {

        state.attempts--;

        state.score =
            Math.max(
                0,
                state.score - 200
            );

        updateGameUI();

        const suspect =
            caseData.suspects.find(
                s => s.id === state.selected
            );

        if (state.attempts <= 0) {

            finishCase(
                false,
                `You used all three accusations. ${suspect.name} was not responsible.`
            );

        } else {

            showToast(
                `${suspect.name} wasn't responsible. Keep investigating — you still have ${state.attempts} attempt${state.attempts === 1 ? "" : "s"}.`
            );

            state.selected = null;

            renderSuspects();

            $("#accuseBtn").disabled = true;
        }
    }
}


/* =========================================================
   FINISH CASE
========================================================= */

function finishCase(win, customMessage = "") {

    if (state.over) return;

    state.over = true;

    stopTimer();

    const caseData = currentCase();

    const timeBonus =
        win
            ? Math.floor(state.time * 4)
            : 0;

    const evidenceBonus =
        win && state.found.length === caseData.clues.length
            ? 200
            : 0;

    const cleanBonus =
        win && state.attempts === 3
            ? 250
            : 0;

    const noHintBonus =
        win && state.hintsUsed === 0
            ? 200
            : 0;

    const finalScore =
        Math.max(
            0,
            state.score +
            timeBonus +
            evidenceBonus +
            cleanBonus +
            noHintBonus
        );

    let stars = 0;

    if (win) {

        stars = 1;

        if (
            state.attempts === 3 ||
            state.hintsUsed === 0
        ) {
            stars = 2;
        }

        if (
            state.attempts === 3 &&
            state.hintsUsed === 0 &&
            state.found.length === caseData.clues.length &&
            state.time >= 60
        ) {
            stars = 3;
        }
    }

    $("#finalScore").textContent =
        finalScore;

    $("#finalClues").textContent =
        `${state.found.length} / ${caseData.clues.length}`;

    $("#timeBonus").textContent =
        `+${timeBonus}`;

    $("#cleanBonus").textContent =
        `+${cleanBonus + evidenceBonus + noHintBonus}`;

    $("#hintPenalty").textContent =
        state.hintsUsed
            ? `-${state.hintLevelsUsed.reduce(
                (total, level) => {
                    return total + ({
                        1: 75,
                        2: 125,
                        3: 200
                    }[level] || 0);
                },
                0
            )}`
            : "0";

    $("#resultStars").textContent =
        "★".repeat(stars) +
        "☆".repeat(3 - stars);

    $("#resultIcon").textContent =
        win ? "🎉" : "🕵🏽";

    $("#resultStamp").textContent =
        win ? "CASE CLOSED" : "CASE UNSOLVED";

    $("#resultStamp").classList.toggle(
        "failed",
        !win
    );

    $("#resultEyebrow").textContent =
        win
            ? "INVESTIGATION COMPLETE"
            : "INVESTIGATION ENDED";

    $("#resultTitle").textContent =
        win
            ? getResultTitle(stars)
            : "The Case Got Away";

    $("#resultMessage").textContent =
        win
            ? getResultMessage(stars)
            : customMessage ||
              "The evidence was not enough to close the case.";

    $("#solution").innerHTML =
        caseData.solution;

    const achievement =
        processAchievements(
            win,
            stars,
            finalScore
        );

    if (achievement) {

        $("#achievementBox").classList.remove("hidden");

        $("#achievementTitle").textContent =
            achievement.title;

        $("#achievementText").textContent =
            achievement.text;

    } else {

        $("#achievementBox").classList.add("hidden");
    }

    if (win) {

        const previous =
            save.completed[caseData.id];

        if (!previous || finalScore > previous.score) {

            save.completed[caseData.id] = {
                stars: Math.max(
                    stars,
                    previous?.stars || 0
                ),
                score: finalScore,
                bestTime: Math.min(
                    previous?.bestTime || Infinity,
                    caseData.time - state.time
                )
            };

        }

        if (
            !save.unlocked.includes(caseData.id + 1) &&
            caseData.id < CASES.length
        ) {

            save.unlocked.push(
                caseData.id + 1
            );
        }

        save.totalStars =
            Object.values(save.completed)
                .reduce(
                    (sum, c) => sum + (c.stars || 0),
                    0
                );

        save.totalXP =
            Object.values(save.completed)
                .reduce(
                    (sum, c) => sum + ((c.stars || 0) * 250),
                    0
                );

        saveGame();
    }

    const nextCase =
        CASES.find(c => c.id === caseData.id + 1);

    $("#nextCaseBtn").style.display =
        win && nextCase && save.unlocked.includes(nextCase.id)
            ? "inline-flex"
            : "none";

    $("#nextCaseBtn").onclick =
        () => openBriefing(caseData.id + 1);

    screen("result");

    updateHome();
}


function getResultTitle(stars) {

    if (stars === 3) {
        return "Perfect Detective Work";
    }

    if (stars === 2) {
        return "Excellent Investigation";
    }

    return "Case Solved";
}


function getResultMessage(stars) {

    if (stars === 3) {
        return "Every clue connected, you avoided unnecessary accusations, and you solved the case with time to spare.";
    }

    if (stars === 2) {
        return "You connected the important evidence and closed the case successfully.";
    }

    return "You found the person responsible. There is always room to improve your investigation score.";
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

const ACHIEVEMENTS = {

    firstCase: {
        title: "First Case",
        text: "Solve your first investigation."
    },

    cleanRecord: {
        title: "Clean Record",
        text: "Solve a case without making a wrong accusation."
    },

    sharpEye: {
        title: "Sharp Eye",
        text: "Collect every piece of evidence in a case."
    },

    noHints: {
        title: "Trust Your Instincts",
        text: "Solve a case without using any hints."
    },

    speedDetective: {
        title: "Speed Detective",
        text: "Solve a case with at least one minute remaining."
    },

    masterDetective: {
        title: "Master Detective",
        text: "Solve all six investigations."
    }
};


function unlockAchievement(id) {

    if (save.achievements.includes(id)) {
        return null;
    }

    save.achievements.push(id);

    saveGame();

    return ACHIEVEMENTS[id];
}


function processAchievements(
    win,
    stars,
    finalScore
) {

    if (!win) {
        return null;
    }

    const caseData = currentCase();

    let achievement = null;

    if (
        Object.keys(save.completed).length === 0
    ) {
        achievement =
            unlockAchievement("firstCase");
    }

    if (!achievement && state.attempts === 3) {
        achievement =
            unlockAchievement("cleanRecord");
    }

    if (
        !achievement &&
        state.found.length === caseData.clues.length
    ) {
        achievement =
            unlockAchievement("sharpEye");
    }

    if (!achievement && state.hintsUsed === 0) {
        achievement =
            unlockAchievement("noHints");
    }

    if (!achievement && state.time >= 60) {
        achievement =
            unlockAchievement("speedDetective");
    }

    if (
        !achievement &&
        Object.keys(save.completed).length === CASES.length
    ) {
        achievement =
            unlockAchievement("masterDetective");
    }

    return achievement;
}


/* =========================================================
   MODALS
========================================================= */

function closeModal() {

    $("#modal").classList.add("hidden");
}


function closeSuspectModal() {

    $("#suspectModal").classList.add("hidden");
}


function closeAccusation() {

    $("#accusationModal").classList.add("hidden");
}


function closeHelp() {

    $("#helpModal").classList.add("hidden");
}


/* =========================================================
   NAVIGATION
========================================================= */

function goToCases() {

    stopTimer();

    renderCases();

    screen("cases");
}


function goHome() {

    stopTimer();

    updateHome();

    screen("home");
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

$("#playBtn").addEventListener("click", () => {

    const next =
        CASES.find(
            c => save.unlocked.includes(c.id) &&
                 !save.completed[c.id]
        );

    openBriefing(
        next ? next.id : CASES[0].id
    );
});


$("#casesBtn").addEventListener(
    "click",
    goToCases
);


$("#brandHome").addEventListener(
    "click",
    goHome
);


document
    .querySelectorAll("[data-screen]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const destination =
                button.dataset.screen;

            if (destination === "home") {
                goHome();
            }

            if (destination === "cases") {
                goToCases();
            }
        });
    });


$("#beginCaseBtn").addEventListener(
    "click",
    startCase
);


$("#leaveCaseBtn").addEventListener(
    "click",
    () => {

        const leave =
            confirm(
                "Leave this investigation? Your current progress will be lost."
            );

        if (leave) {
            goToCases();
        }
    }
);


$("#accuseBtn").addEventListener(
    "click",
    openAccusation
);


$("#confirmAccusation").addEventListener(
    "click",
    confirmAccusation
);


$("#cancelAccusation").addEventListener(
    "click",
    closeAccusation
);


$("#closeAccusationModal").addEventListener(
    "click",
    closeAccusation
);


$("#closeSuspectModal").addEventListener(
    "click",
    closeSuspectModal
);


$("#closeModal").addEventListener(
    "click",
    closeModal
);


$("#modalAction").addEventListener(
    "click",
    collectCurrentClue
);


document
    .querySelectorAll(".hint-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {
                useHint(
                    Number(button.dataset.hint)
                );
            }
        );
    });


$("#againBtn").addEventListener(
    "click",
    startCase
);


$("#resultCasesBtn").addEventListener(
    "click",
    goToCases
);


$("#resultHomeBtn").addEventListener(
    "click",
    goHome
);


$("#helpBtn").addEventListener(
    "click",
    () => {
        $("#helpModal").classList.remove("hidden");
    }
);


$("#closeHelp").addEventListener(
    "click",
    closeHelp
);


$("#helpCloseBtn").addEventListener(
    "click",
    closeHelp
);


/* Close modal by clicking backdrop */

document
    .querySelectorAll(".modal-backdrop")
    .forEach(backdrop => {

        backdrop.addEventListener(
            "click",
            () => {

                backdrop.parentElement
                    .classList.add("hidden");

            }
        );
    });


/* Escape closes open modal */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        document
            .querySelectorAll(".modal")
            .forEach(modal => {
                modal.classList.add("hidden");
            });
    }
);


/* =========================================================
   INITIALISE
========================================================= */

updateHome();
renderCases();