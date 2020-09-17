import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                About: "About",
                Projects: "Projects",
                Volunteering: "Volunteering",
                Contact: "Contact",
                Welcome: "Welcome",
                Hi: "Hi,",
                AboutDesc: "I’m Edith. A fullstack developer from my mother's vigina (she is an awesome lady). I speak Javascript, HTML, CSS, Vue.js, React.js (and a bunch of other stuff), english, french and some needed german (konnen Sie Bitte viederholen?). I love coding, I love debugging but I don't like brussels sprouts (tho I love Brussels). I am a communicative and a reliable person who believe in weirdness and practice. I changed career for the sake of brain stimuli, so you can be reasured, I am gonna be full on to your useless startup. #milienial#Idonthaveinstacauseihavealife",
                Languages: "languages",
                DR: "Download Resume",
                titleP1: "Vue.js - VGG Garden - nkln",
                descriptionP1: "Supporting local communities has driven me to become a developer. I therefore, realised the website of this green lung surrounded by concrete.",
                titleP2: "React.js - Vimetro portfolio",
                descriptionP2: "When people have a great vision, there is nothing better than being part of it.",
                titleP3: "React.js - Social network",
                descriptionP3: "As covid has quarantined many women in a violent household, I aimed to draw a platform where they could securely look for help.",
                bmp: "More projects",
                close: "Close",
                titleMP1: "Vue.js - UFO image upload",
                descriptionMP1: "It is thrilling to look at the sky and to think that we are not alone. This project is here to support the idea of another life.",
                titleMP2: "Handlebars JS - Petition for greener cities",
                descriptionMP2: "Knock, knock! Who is there? Global warming b**ch! Let's focus on planting trees, not on bullshit.",
                titleMP3: "...and here is all the rest",
                descriptionMP3: "If I win you hire me, if I lose you hire me as well <3. Let's meet and play connect four!",
                descriptionV1: "In a confusing time, I seeked for guidelines in how to become a developer. With OpenTechschool Berlin, I have found a community of mentors and newbies, a platform for learning, sharing, guiding and caring. When the opportunity, to be a coodinator, has been offered, I got really excited and felt that it was a chance not only to share knowledge but as well to practice vulnerability: from technical to human spectrum: how to talk about code? How to ask the right question to understand someone's issue? How to manage many poeple wanting to interact at once?",
                titleV2: "VGG Garden - Nkln",
                descriptionV2: "Cities are directed by a fragile dance of trucks, dispatching questionable goods from nameless places. A community garden offers you a concrete, local, inclusive place to be and to evolve. From growing plants to embracing diversity of gender, skills, religion, sexual orientation. It provides human space, away from the bubble of individualism. I believe we need to care more about our people.",
                titleV3: "Activism ",
                descriptionV3: "Who doesn't say a word, agree! Being part of a bigger picture implies being active. As a cyclist or pedestrian myself, I believe that cars are, most of the time, extremely useless and inconvenient in cities. This why I go to Critical Mass and Purple Ride events. To show that what has been granted for so long is not anymore! I as well openly shit on Jeff B. We don't need anything in 24h, and if you do, you are better than that. ",
                descriptionC: " I’m Edith. A fullstack developer based in Berlin, but available worldwide.",
                FirstName: "First Name",
                LastName: "Last Name",
                Send: "Send",
                titleTandC: "Terms and conditions",
                contentTandC: "Je m'appelle Edith. Un développeur de pile complète basé à Berlin, mais disponible dans le monde entier. Je parle Javascript, HTML, CSS, vue.js, React.js, anglais, français et suffisamment d'allemand(ein bier bitte).J'apprends rapidement et je suis impatiente de maîtriser l'enchevêtrement de Javascript dans un environnement CSS en soie.J'explore actuellement des cadres de travail approfondis comme vue.js et, comme j'ai un faible pour React.js, j'apprécie également de travailler avec bootstrap. Our place will never be peaceful if we don't dare paying attention to our neighboors",
                TandC: "TandC",
                ThankYou: "Thank you",
                forMsg: "for your message!",
                contentTY: "I will come back to you as soon as possible."
            },

        },
        fr: {
            translations: {
                About: "A propos",
                Projects: "Projets",
                Volunteering: "Volontariat",
                Contact: "Contact",
                Welcome: "Bienvenue",
                Hi: "Bonjour,",
                AboutDesc: "Je m'appelle Edith. Un développeur de pile complète basé à Berlin, mais disponible dans le monde entier. Je parle Javascript, HTML, CSS, vue.js, React.js, anglais, français et suffisamment d'allemand (ein bier bitte). J'apprends rapidement et je suis impatiente de maîtriser l'enchevêtrement de Javascript dans un environnement CSS en soie. J'explore actuellement des cadres de travail approfondis comme vue.js et, comme j'ai un faible pour React.js, j'apprécie également de travailler avec bootstrap.",
                Languages: "langues",
                DR: "Télécharger CV",
                titleP1: "Premier projet",
                descriptionP1: "fr un",
                titleP2: "Second projet",
                descriptionP2: "It's a bit shit but I still love it",
                titleP3: "troisieme projet",
                descriptionP3: "It's a bit shit but I still love it",
                bmp: "Plus de projets",
                close: "Fermer",
                titleMP1: "Premier projet pm1",
                descriptionMP1: "It's a bit shit but I still love it",
                titleMP2: "This is my 2 project in more",
                descriptionMP2: "It's a bit shit but I still love it",
                titleMP3: "This is my 3rdt project in more",
                descriptionMP3: "It's a bit shit but I still love it",
                descriptionV1: "description projet 1",
                titleV2: "Jardins partagés",
                descriptionV2: "description 2",
                titleV3: "Activisme ",
                descriptionV3: "activisme djdjdj description",
                descriptionC: "francais version",
                FirstName: "Prénom",
                LastName: "Nom",
                Send: "Envoyer",
                titleTandC: "Termes et conditions",
                contentTandC: "blablabla mais en francais",
                TandC: "TetC",
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },
    react: {
        wait: true
    }
});

export default i18n;

