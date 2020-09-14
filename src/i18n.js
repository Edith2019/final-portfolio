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
                AboutDesc: "I’m Edith. A fullstack developer based in Berlin, but available worldwide. I speak Javascript, HTML, CSS, vue.js,React.js, english, french and sufficient german(ein bier bitte).I’m a quick learner eager to master the tangle of Javascript in a silk CSS wrap.Currently exploring in-depth frameworks like vue.js and with a huge crush on React.js, I as well appreciate working with bootstrap.",
                Languages: "languages",
                DR: "Download Resume",
                titleP1: "This is my first project",
                descriptionP1: "It's a bit shit but I still love it",
                titleP2: "This is my 2 project",
                descriptionP2: "It's a bit shit but I still love it",
                titleP3: "This is my 3rdt project",
                descriptionP3: "It's a bit shit but I still love it",
                bmp: "More projects",
                close: "Close",
                titleMP1: "This is my first project in more",
                descriptionMP1: "It's a bit shit but I still love it",
                titleMP2: "This is my 2 project in more",
                descriptionMP2: "It's a bit shit but I still love it",
                titleMP3: "This is my 3rdt project in more",
                descriptionMP3: "It's a bit shit but I still love it",
                descriptionV1: "description projet 1",
                titleV2: "VGG Garden - Nkln",
                descriptionV2: "description 2",
                titleV3: "Activism ",
                descriptionV3: " activism description",
                descriptionC: " I’m Edith. A fullstack developer based in Berlin, but available worldwide.",
                FirstName: "First Name",
                LastName: "Last Name",
                Send: "Send"
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

