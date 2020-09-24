import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import PropTypes from "prop-types";

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
                AboutDesc: "I am Edith. A full-stack developer currently diving into React.js and Vue.js while exploring technical approaches for savvy features. I constantly seek new ways of attacking problems and love to talk about it. I like people, beers and discussions about code - especially all together! I currently speak JS, CSS & HTML. Curious for more? Check my work below.",
                Languages: "languages",
                DR: "Download Resume",
                titleP1: "Vue.js - VGG Garden - nkln",
                descriptionP1: "Supporting local communities motivated me to become a developer. As a result of this, you'll find the website of this green garden surrounded by concrete.",
                titleP2: "React.js - Vimetro portfolio",
                descriptionP2: "When people have a great vision, there is nothing better than being part of it.",
                titleP3: "React.js - Social network",
                descriptionP3: "Since Covid-19 has quarantined many women in violent households, I aimed to draw a secure platform for support and help.",
                bmp: "More projects",
                close: "Close",
                titleMP1: "Vue.js - UFO image upload",
                descriptionMP1: "It's thrilling to look at the sky and to think that we are not alone. This project is here to support the idea of another life.",
                titleMP2: "Handlebars.JS - Petition for greener cities",
                descriptionMP2: "Knock, knock! Who is there? Global warming b**ch! Let's focus on planting trees, not on bullshit.",
                titleMP3: "Connect four",
                descriptionMP3: "One of the first project realised at Spiced Academy! ",
                WTS: "What they say...",
                descriptionCD1: "Edith was a fantastic student and a great person to get to know over the 12 week bootcamp. She had an amazing attitude to learning, was extremely determined and really curious about how things work. I am sure she will go far!",
                descriptionCD2: "I worked with Edith before her programming days, when she an excellent account manager. A great problem solver; and whatever she was up to, she was always investing a load of effort and passion in it. She was incredibly fun to work with, always the life and soul of the office. She's picked up JavaScript incredibly quickly, and constantly coming up with new and interesting applications to build with her newly acquired skills. Any company would be lucky to have her - if I was looking for JS developers right now, I would take her immediately.",
                descriptionCD3: "She is a great team player, making sure communication is clear and everyone is on the same page at every step. In addition, she is constantly eager to experiment, learn and improve her skills, already showing a great level of efficiency and independence when necessary, qualities I find remarkable even in senior developers. If I were in a hiring position again, I would not hesitate to make her a part of my team.",
                descriptionCD4: "I have been working with Edith on a couple of projects on Vue.js and React.js. Her determination to constantly improve and her ability to learn quickly are remarkable. In addition, she has been able to communicate and to share information. Those traits will for sure make her of a great value in addition to the team.",
                titleV1: "Open TechSchool Berlin",
                descriptionV1: "I seecked for guidelines in how to become a developer. With OpenTechschool Berlin, I have found a community of mentors and newbies, a platform for learning, sharing, guiding and growing. When the opportunity to become a coordinator arose, I didn't doubt. This was a chance not only to share knowledge, but as well to practice vulnerability from technical to human spectrum: how to talk about code? How to ask the right questions to understand someone's issue? How to manage a group of people hungry for problemsolving?",
                titleV2: "VGG Garden - Nkln",
                descriptionV2: "Cities are directed by a fragile dance of trucks, dispatching questionable goods from nameless places. A community garden offers a concrete, local, inclusive place to be and to evolve. From growing plants to embracing diversity of gender, skills, religion, sexual orientation. It provides human space, away from the bubble of individualism. I believe we need to care more about our people.",
                titleV3: "Activism ",
                descriptionV3: "You are either part of the solution or part of the problem.” I'm all in for the solutions. As an environmentally aware cyclist, pedastrian and u-bahn rider (all my love goes to U8), I believe that cars in the cities are pretty useless. This is why I participate in Critical Mass and Purple Ride events!",
                descriptionC: "Don't be shy, get in touch! I'm happy to hear from you for any feedback or questions you might have. ",
                FirstName: "First Name",
                LastName: "Last Name",
                Send: "Send",
                titleTandC: "Terms and conditions",
                agree: "You must agree before submitting.",
                contentTandC: "Like most similar websites, this site uses cookies. On this page we explain more about cookies and how we use them.By using this website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.",
                terms: "Agree to terms and conditions",
                TandC: "TandC",
                ThankYou: "Thank you",
                forMsg: "for your message!",
                contentTY: "I will come back to you as soon as possible."
            }

        },
        fr: {
            translations: {
                About: "A propos",
                Projects: "Projets",
                Volunteering: "Volontariat",
                Contact: "Contact",
                Welcome: "Bienvenue",
                Hi: "Bonjour,",
                AboutDesc: "Je suis Edith. Développeur Full-Stack qui prend actuellement plaisir avec React.js et Vue.js tout en explorant de nouvelles approches techniques pour créer des fonctionnalités sympas. Je suis constamment à la recherche de nouvelles technologies et j'aime en parler. Dans l'ensemble, je maîtrise JS, CSS et HTML. J'aime les gens, les bières et discuter de code avec des gens autour d'une bière! Si vous voulez en savoir plus, consultez mon travail ci-dessous :",
                Languages: "langues",
                DR: "Télécharger CV",
                titleP1: "Vue.js - Jardin VGG - Berlin",
                descriptionP1: "Le soutien aux communautés locales m'a poussée à devenir développeur. J'ai donc réalisé le site web de ce poumon vert entouré de béton.",
                titleP2: "React.js - Vimetro portfolio",
                descriptionP2: "Lorsque les gens ont une grande vision, il n'y a rien de mieux que d'en faire partie.",
                titleP3: "React.js - Réseau social",
                descriptionP3: "Comme Covid-19 a mis en quarantaine de nombreuses femmes dans un foyer violent, j'ai voulu esquisser une plate-forme où elles pourraient chercher de l'aide en toute sécurité.",
                bmp: "Plus de projets",
                close: "Fermer",
                titleMP1: "Vue.js - OVNI téléchargement d'images",
                descriptionMP1: "Il est passionnant de regarder le ciel et de penser que nous ne sommes pas seuls. Ce projet est là pour soutenir l'idée d'une autre forme de vie.",
                titleMP2: "Handlebars.JS - Pétition pour des villes plus vertes",
                descriptionMP2: "Toc, toc ! Qui est là ? Le réchauffement climatique, b**ch! Concentrons-nous sur la plantation d'arbres, pas sur les conneries.",
                titleMP3: "Puissance 4",
                descriptionMP3: "Un des premiers projets réalisés à la Spiced Academy!",
                WTS: "Ce qu'ils disent...",
                descriptionCD1: "Edith a été une étudiante fantastique et une personne formidable à connaître pendant les 12 semaines du bootcamp. Elle avait une super attitude vis-à-vis de l'apprentissage, était extrêmement déterminée et vraiment curieuse de savoir comment les choses fonctionnent. Je suis sûr qu'elle ira loin !",
                descriptionCD2: "J'ai travaillé avec Edith avant ses jours de programmation, quand elle était une excellente gestionnaire de compte. C'était une excellente résolveuse de problèmes ; et quoi qu'elle fasse, elle y consacrait toujours beaucoup d'efforts et de passion. C'était incroyablement agréable de travailler avec elle, elle était toujours la vie et l'âme du bureau. Elle a appris le JavaScript incroyablement vite, et elle a constamment trouvé de nouvelles applications intéressantes à développer avec ses nouvelles compétences. Toute entreprise aurait de la chance de l'avoir - si je cherchais des développeurs JS en ce moment, je la prendrais immédiatement.",
                descriptionCD3: "Elle est une grande joueuse d'équipe, s'assurant que la communication est claire et que tout le monde est sur la même longueur d'onde à chaque étape. En outre, elle est constamment désireuse d'expérimenter, d'apprendre et d'améliorer ses compétences, faisant déjà preuve d'un grand niveau d'efficacité et d'indépendance lorsque cela est nécessaire, qualités que je trouve remarquables même chez les développeurs seniors. Si j'étais à nouveau en poste, je n'hésiterais pas à l'intégrer dans mon équipe.",
                descriptionCD4: "J'ai travaillé avec Edith sur quelques projets sur Vue.js et React.js. Sa détermination à s'améliorer constamment et sa capacité à apprendre rapidement sont remarquables. En outre, elle a su communiquer et partager des informations. Ces traits de caractère lui apporteront certainement une grande valeur en plus de l'équipe.",
                titleV1: "Open TechSchool Berlin",
                descriptionV1: "À une époque confuse, j'ai cherché des lignes directrices pour devenir développeur. Avec l'OpenTechschool Berlin, j'ai trouvé une communauté de mentors et de débutants, une plate-forme pour apprendre, partager, guider et s'occuper. Lorsque la possibilité de devenir coordinateur m'a été offerte, j'ai été très enthousiaste et j'ai senti que c'était une chance non seulement de partager des connaissances mais aussi de pratiquer la vulnérabilité : du spectre technique au spectre humain : comment parler de code ? Comment poser la bonne question pour comprendre le problème de quelqu'un ? Comment gérer le fait que plusieurs personnes souhaitent interagir en même temps?",
                titleV2: "Jardins partagés",
                descriptionV2: "Les villes sont dirigées par une fragile danse de camions, expédiant des marchandises douteuses depuis des lieux sans nom. Un jardin communautaire offre un lieu concret, local, inclusif, où l'on peut être et évoluer. De la culture des plantes à la diversité des genres, des compétences, des religions et des orientations sexuelles. Il offre un espace humain, loin de la bulle de l'individualisme. Je crois que nous devons nous soucier davantage de nos concitoyens.",
                titleV3: "Activisme ",
                descriptionV3: "Qui ne dit mot, consent ! Faire partie d'un ensemble implique d'être actif. Étant moi-même cycliste ou piéton, je pense que les voitures sont, la plupart du temps, extrêmement inutiles et peu pratiques dans les villes. C'est pourquoi je participe aux événements Critical Mass et Purple Ride. Pour montrer que ce qui a été accordé pendant si longtemps n'est plus!",
                FirstName: "Prénom",
                LastName: "Nom",
                Send: "Envoyer",
                titleTandC: "Termes et conditions",
                agree: "vous devez donner votre accord avant d'envoyer votre message.",
                contentTandC: "Comme la plupart des sites web similaires, ce site utilise des cookies. En utilisant ce site web et en acceptant cette politique, vous consentez à ce que nous utilisions des cookies conformément aux termes de cette politique.",
                terms: "Accepter les termes et conditions",
                TandC: "TetC",
                descriptionC: "Ne soyez pas timide, contactez-moi ! Je suis heureuse de recevoir vos commentaires et de répondre à toutes vos questions.",
                ThankYou: "Merci",
                forMsg: "pour votre message!",
                contentTY: "Je reviendrai vers vous dès que possible."
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
        formatSeparator: ","
    },
    react: {
        wait: true
    }

});

export default i18n;

i18n.propTypes = {
    i18n: PropTypes.object,
    changeLanguage: PropTypes.func
};