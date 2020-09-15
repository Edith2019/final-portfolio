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
                AboutDesc: "I’m Edith. A fullstack developer based in Berlin. I speak Javascript, HTML, CSS, Vue.js, React.js (and a bunch of other stuff), english, french and sufficient german (konnen Sie Bitte viederholen?). I love coding, I love debugging but I hate brussels sprouts (tho I love Brussels). I have master degree in economy and marketing. I always loved to travel and got the chance to spend one year in Atlanta in Oglethope University. All this data stuff was great for a while but my brain is asking for more. That's why I graduated from a full-stack bootcamp. I NOW develop side projects and I AM AS WELL LOOKING FOR A JOB.",
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
                descriptionV1: "description projet 1",
                titleV2: "VGG Garden - Nkln",
                descriptionV2: "description 2",
                titleV3: "Activism ",
                descriptionV3: " activism description",
                descriptionC: " I’m Edith. A fullstack developer based in Berlin, but available worldwide.",
                FirstName: "First Name",
                LastName: "Last Name",
                Send: "Send",
                titleTandC: "Terms and conditions",
                contentTandC: "blablabla",
                TandC: "TandC",
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
