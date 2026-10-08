/* =====================================================
   SOPHIA PORTFOLIO
   Main JavaScript
===================================================== */


/* =====================================================
   1. TRANSLATIONS
===================================================== */

const translations = {

    /* =================================================
       ENGLISH
    ================================================= */

    en: {

        navHome: "Home",
        navAbout: "About",
        navWork: "Work",
        navJourney: "Journey",
        navImpact: "Impact",
        navContact: "Contact",

        floatingData: "Data",
        floatingTechnology: "Technology",
        floatingBusiness: "Business",

        heroEyebrow:
            "ACCOUNTING × DATA × TECHNOLOGY",

        heroTitle:
            "Building at the intersection of business, data and technology.",

        heroDescription:
            "I am Enemuwe Sophia Odineka, an Accounting graduate exploring how data and technology can turn everyday business information into better decisions and practical solutions.",

        heroWorkButton:
            "Explore My Work",

        heroStoryButton:
            "Discover My Story",

        aboutEyebrow:
            "ABOUT ME",

        aboutTitle:
            "From accounting records to data-driven solutions.",

        aboutParagraphOne:
            "My journey began with Accounting, where I learned to understand financial information, examine records and pay attention to details.",

        aboutParagraphTwo:
            "Through experiences in collection, human resources and internal audit, I became increasingly interested in what happens to the information behind everyday business operations. I began using spreadsheets to organize records, identify discrepancies and make information easier to use.",

        aboutParagraphThree:
            "That curiosity led me into data analytics and technology. Today, I am building practical skills across data, cloud technologies and information systems, with a long-term interest in creating digital solutions that solve real business problems.",

        aboutHighlightTitle:
            "Curious by nature.",

        aboutHighlightText:
            "I enjoy asking why a process works the way it does, finding what is missing and exploring how technology can make it better.",

        workEyebrow:
            "SELECTED WORK",

        workTitle:
            "Projects built from curiosity and practice.",

        workIntro:
            "A selection of projects where I have applied data cleaning, analysis, visualization and business intelligence skills.",

        projectOneCategory:
            "BUSINESS INTELLIGENCE",

        projectOneTitle:
            "Sales Business Intelligence Dashboard",

        projectOneDescription:
            "An interactive sales performance dashboard developed using Amazon QuickSight. I analysed 25,000 retail transactions to explore sales trends, products, categories, payment methods and key performance indicators.",

        projectTagQuickSight:
            "Amazon QuickSight",

        projectTagDataAnalysis:
            "Data Analysis",

        projectTagVisualization:
            "Data Visualization",

        projectTwoCategory:
            "DATA ANALYTICS",

        projectTwoTitle:
            "Employee Leave Management Dashboard",

        projectTwoDescription:
            "An interactive employee leave management dashboard developed using Microsoft Power BI to monitor leave requests, departments, approval status and leave types.",

        projectTagPowerBI:
            "Power BI",

        projectTagDataCleaning:
            "Data Cleaning",

        projectTagVisualizationTwo:
            "Data Visualization",

        projectThreeCategory:
            "DATA ANALYSIS",

        projectThreeTitle:
            "Retail Sales Dashboard",

        projectThreeDescription:
            "A sales analytics dashboard developed using OnlyOffice Spreadsheet. I cleaned and prepared the dataset, created pivot tables and charts, analysed sales performance and presented the findings visually.",

        projectTagOnlyOffice:
            "OnlyOffice",

        projectTagPivotTables:
            "Pivot Tables",

        projectTagDataAnalysisTwo:
            "Data Analysis",

        viewProject:
            "Explore Project →",

        journeyEyebrow:
            "MY JOURNEY",

        journeyTitle:
            "A path that keeps evolving.",

        journeyAccounting:
            "Accounting",

        journeyOne:
            "Began my academic journey in Accounting.",

        journeyBSc:
            "B.Sc. Accounting",

        journeyTwo:
            "Completed my Bachelor's degree and strengthened my foundation in business and financial analysis.",

        journeyAudit:
            "Audit & Operations",

        journeyThree:
            "Gained practical experience working with business records, reconciliations, people and operational data.",

        journeyData:
            "Data & Technology",

        journeyFour:
            "Began building practical skills in data analytics, cloud technologies and digital solutions.",

        projectShevoraName:
            "PROJECT SHEVORA",

        projectShevoraTitle:
            "Creating spaces where women can choose themselves.",

        projectShevoraParagraphOne:
            "Project Shevora is a women-focused initiative I founded to promote equal opportunity, digital inclusion, and the confidence to pursue opportunities without being limited by gender.",

        projectShevoraParagraphTwo:
            "Through conversations, learning opportunities, digital activities, and community engagement, Project Shevora creates spaces where women and girls can learn, connect, and see technology as something they can participate in and use to create opportunities for themselves.",

        visitProjectShevora:
            "Visit Project Shevora →",

        contactProjectShevora:
            "Contact Project Shevora →",

        skillsEyebrow:
            "WHAT I WORK WITH",

        skillsTitle:
            "Tools, skills and foundations.",

        skillDataTitle:
            "Data & Analytics",

        skillDataDescription:
            "Excel · WPS Spreadsheet · OnlyOffice · Power BI · Amazon QuickSight",

        skillCloudTitle:
            "Cloud & Technology",

        skillCloudDescription:
            "Amazon S3 · Amazon EC2 · Amazon VPC · AWS Lambda · Amazon SNS",

        skillBusinessTitle:
            "Business",

        skillBusinessDescription:
            "Accounting · Internal Audit · Financial Records · Business Analysis",

        educationEyebrow:
            "EDUCATION & CERTIFICATIONS",

        educationTitle:
            "Foundations I have built along the way.",

        educationCompleted:
            "COMPLETED",

        educationND:
            "National Diploma in Accounting",

        educationNDInstitution:
            "Auchi Polytechnic",

        educationBSc:
            "B.Sc. Accounting",

        educationBScInstitution:
            "Nnamdi Azikiwe University, Awka",

        educationGoogle:
            "Google Data Analytics Professional Certificate",

        educationGoogleInstitution:
            "Google via Coursera",

        educationGender:
            "Gender Equality",

        educationGenderInstitution:
            "UN Women Training Centre",

        educationSDSN:
            "UN SDSN SDG Advocacy Programme",

        educationSDSNInstitution:
            "Cohort 8",

        educationCloud:
            "Cloud Foundations Virtual Bootcamp",

        educationCloudInstitution:
            "Cloud Computing Foundations",

        contactEyebrow:
            "LET'S CONNECT",

        contactTitle:
            "Have an idea, opportunity or project in mind?",

        contactText:
            "I am always open to meaningful conversations, collaborations and opportunities to learn and contribute.",

        contactEmail:
            "Email Me",

        contactLinkedIn:
            "LinkedIn",

        contactGitHub:
            "GitHub",

        footerText:
            "Building with curiosity, data and purpose."

    },


    /* =================================================
       FRENCH
    ================================================= */

    fr: {

        navHome: "Accueil",
        navAbout: "À propos",
        navWork: "Projets",
        navJourney: "Parcours",
        navImpact: "Impact",
        navContact: "Contact",

        floatingData: "Données",
        floatingTechnology: "Technologie",
        floatingBusiness: "Entreprise",

        heroEyebrow:
            "COMPTABILITÉ × DONNÉES × TECHNOLOGIE",

        heroTitle:
            "À l'intersection de l'entreprise, des données et de la technologie.",

        heroDescription:
            "Je suis Enemuwe Sophia Odineka, diplômée en comptabilité et passionnée par la manière dont les données et la technologie peuvent transformer les informations quotidiennes des entreprises en meilleures décisions et en solutions pratiques.",

        heroWorkButton:
            "Découvrir mes projets",

        heroStoryButton:
            "Découvrir mon parcours",

        aboutEyebrow:
            "À PROPOS DE MOI",

        aboutTitle:
            "Des documents comptables aux solutions basées sur les données.",

        aboutParagraphOne:
            "Mon parcours a commencé par la comptabilité, où j'ai appris à comprendre les informations financières, à examiner les documents et à porter attention aux détails.",

        aboutParagraphTwo:
            "Grâce à mes expériences dans le recouvrement, les ressources humaines et l'audit interne, je me suis de plus en plus intéressée à ce qui se passe derrière les informations utilisées dans les opérations quotidiennes des entreprises. J'ai commencé à utiliser des feuilles de calcul pour organiser les données, identifier les écarts et rendre les informations plus faciles à utiliser.",

        aboutParagraphThree:
            "Cette curiosité m'a menée vers l'analyse de données et la technologie. Aujourd'hui, je développe des compétences pratiques en données, technologies cloud et systèmes d'information, avec un intérêt à long terme pour la création de solutions numériques répondant à de vrais problèmes commerciaux.",

        aboutHighlightTitle:
            "Curieuse par nature.",

        aboutHighlightText:
            "J'aime comprendre pourquoi un processus fonctionne d'une certaine manière, identifier ce qui manque et explorer comment la technologie peut l'améliorer.",

        workEyebrow:
            "PROJETS SÉLECTIONNÉS",

        workTitle:
            "Des projets construits par curiosité et par la pratique.",

        workIntro:
            "Une sélection de projets dans lesquels j'ai appliqué des compétences en nettoyage, analyse et visualisation des données ainsi qu'en intelligence d'affaires.",

        projectOneCategory:
            "INTELLIGENCE D'AFFAIRES",

        projectOneTitle:
            "Tableau de bord d'intelligence d'affaires des ventes",

        projectOneDescription:
            "Un tableau de bord interactif développé avec Amazon QuickSight. J'ai analysé 25 000 transactions de détail afin d'examiner les tendances des ventes, les produits, les catégories, les modes de paiement et les principaux indicateurs de performance.",

        projectTagQuickSight:
            "Amazon QuickSight",

        projectTagDataAnalysis:
            "Analyse de données",

        projectTagVisualization:
            "Visualisation des données",

        projectTwoCategory:
            "ANALYSE DE DONNÉES",

        projectTwoTitle:
            "Tableau de bord de gestion des congés",

        projectTwoDescription:
            "Un tableau de bord interactif développé avec Microsoft Power BI pour suivre les demandes de congés, les services, les statuts d'approbation et les types de congés.",

        projectTagPowerBI:
            "Power BI",

        projectTagDataCleaning:
            "Nettoyage des données",

        projectTagVisualizationTwo:
            "Visualisation des données",

        projectThreeCategory:
            "ANALYSE DE DONNÉES",

        projectThreeTitle:
            "Tableau de bord des ventes au détail",

        projectThreeDescription:
            "Un tableau de bord d'analyse des ventes développé avec OnlyOffice Spreadsheet. J'ai nettoyé et préparé les données, créé des tableaux croisés et des graphiques, analysé les performances des ventes et présenté les résultats visuellement.",

        projectTagOnlyOffice:
            "OnlyOffice",

        projectTagPivotTables:
            "Tableaux croisés dynamiques",

        projectTagDataAnalysisTwo:
            "Analyse de données",

        viewProject:
            "Voir le projet →",

        journeyEyebrow:
            "MON PARCOURS",

        journeyTitle:
            "Un parcours qui continue d'évoluer.",

        journeyAccounting:
            "Comptabilité",

        journeyOne:
            "Début de mon parcours universitaire en comptabilité.",

        journeyBSc:
            "Licence en comptabilité",

        journeyTwo:
            "Obtention de ma licence et renforcement de mes bases en analyse financière et commerciale.",

        journeyAudit:
            "Audit & opérations",

        journeyThree:
            "Acquisition d'une expérience pratique dans les documents commerciaux, les rapprochements, les ressources humaines et les données opérationnelles.",

        journeyData:
            "Données & technologie",

        journeyFour:
            "Développement de compétences pratiques en analyse de données, technologies cloud et solutions numériques.",

        projectShevoraName:
            "PROJECT SHEVORA",

        projectShevoraTitle:
            "Créer des espaces où les femmes peuvent se choisir.",

        projectShevoraParagraphOne:
            "Project Shevora est une initiative axée sur les femmes que j'ai fondée pour promouvoir l'égalité des chances, l'inclusion numérique et la confiance nécessaire pour saisir des opportunités sans être limitée par son genre.",

        projectShevoraParagraphTwo:
            "À travers des conversations, des possibilités d'apprentissage, des activités numériques et l'engagement communautaire, Project Shevora crée des espaces où les femmes et les filles peuvent apprendre, se connecter et voir la technologie comme un domaine auquel elles peuvent participer et qu'elles peuvent utiliser pour créer leurs propres opportunités.",

        visitProjectShevora:
            "Visiter Project Shevora →",

        contactProjectShevora:
            "Contacter Project Shevora →",

        skillsEyebrow:
            "MES COMPÉTENCES",

        skillsTitle:
            "Outils, compétences et bases techniques.",

        skillDataTitle:
            "Données & analyse",

        skillDataDescription:
            "Excel · WPS Spreadsheet · OnlyOffice · Power BI · Amazon QuickSight",

        skillCloudTitle:
            "Cloud & technologie",

        skillCloudDescription:
            "Amazon S3 · Amazon EC2 · Amazon VPC · AWS Lambda · Amazon SNS",

        skillBusinessTitle:
            "Entreprise",

        skillBusinessDescription:
            "Comptabilité · Audit interne · Informations financières · Analyse commerciale",

        educationEyebrow:
            "FORMATION & CERTIFICATIONS",

        educationTitle:
            "Les bases que j'ai construites au fil du temps.",

        educationCompleted:
            "TERMINÉ",

        educationND:
            "Diplôme national en comptabilité",

        educationNDInstitution:
            "Auchi Polytechnic",

        educationBSc:
            "Licence en comptabilité",

        educationBScInstitution:
            "Nnamdi Azikiwe University, Awka",

        educationGoogle:
            "Certificat professionnel Google Data Analytics",

        educationGoogleInstitution:
            "Google via Coursera",

        educationGender:
            "Égalité des genres",

        educationGenderInstitution:
            "Centre de formation d'ONU Femmes",

        educationSDSN:
            "Programme de plaidoyer pour les ODD de l'UN SDSN",

        educationSDSNInstitution:
            "Cohorte 8",

        educationCloud:
            "Bootcamp virtuel Cloud Foundations",

        educationCloudInstitution:
            "Fondamentaux du cloud computing",

        contactEyebrow:
            "RESTONS EN CONTACT",

        contactTitle:
            "Une idée, une opportunité ou un projet en tête ?",

        contactText:
            "Je suis toujours ouverte aux conversations pertinentes, aux collaborations et aux opportunités d'apprendre et de contribuer.",

        contactEmail:
            "M'envoyer un e-mail",

        contactLinkedIn:
            "LinkedIn",

        contactGitHub:
            "GitHub",

        footerText:
            "Construire avec curiosité, les données et un objectif."

    },


    /* =================================================
       SPANISH
    ================================================= */

    es: {

        navHome: "Inicio",
        navAbout: "Sobre mí",
        navWork: "Proyectos",
        navJourney: "Trayectoria",
        navImpact: "Impacto",
        navContact: "Contacto",

        floatingData: "Datos",
        floatingTechnology: "Tecnología",
        floatingBusiness: "Negocios",

        heroEyebrow:
            "CONTABILIDAD × DATOS × TECNOLOGÍA",

        heroTitle:
            "Construyendo en la intersección de los negocios, los datos y la tecnología.",

        heroDescription:
            "Soy Enemuwe Sophia Odineka, graduada en Contabilidad y explorando cómo los datos y la tecnología pueden convertir la información empresarial cotidiana en mejores decisiones y soluciones prácticas.",

        heroWorkButton:
            "Explorar mi trabajo",

        heroStoryButton:
            "Conocer mi historia",

        aboutEyebrow:
            "SOBRE MÍ",

        aboutTitle:
            "De los registros contables a las soluciones basadas en datos.",

        aboutParagraphOne:
            "Mi trayectoria comenzó con la Contabilidad, donde aprendí a comprender la información financiera, revisar registros y prestar atención a los detalles.",

        aboutParagraphTwo:
            "A través de mis experiencias en cobros, recursos humanos y auditoría interna, me interesé cada vez más por lo que ocurre detrás de la información utilizada en las operaciones diarias de las empresas. Comencé a utilizar hojas de cálculo para organizar registros, identificar discrepancias y facilitar el uso de la información.",

        aboutParagraphThree:
            "Esa curiosidad me llevó al análisis de datos y la tecnología. Actualmente estoy desarrollando habilidades prácticas en datos, tecnologías de nube y sistemas de información, con un interés a largo plazo en crear soluciones digitales que resuelvan problemas empresariales reales.",

        aboutHighlightTitle:
            "Curiosa por naturaleza.",

        aboutHighlightText:
            "Me gusta preguntarme por qué un proceso funciona de determinada manera, encontrar lo que falta y explorar cómo la tecnología puede mejorarlo.",

        workEyebrow:
            "PROYECTOS SELECCIONADOS",

        workTitle:
            "Proyectos construidos con curiosidad y práctica.",

        workIntro:
            "Una selección de proyectos en los que he aplicado habilidades de limpieza, análisis y visualización de datos e inteligencia empresarial.",

        projectOneCategory:
            "INTELIGENCIA EMPRESARIAL",

        projectOneTitle:
            "Panel de inteligencia empresarial de ventas",

        projectOneDescription:
            "Un panel interactivo de rendimiento de ventas desarrollado con Amazon QuickSight. Analicé 25.000 transacciones minoristas para explorar tendencias de ventas, productos, categorías, métodos de pago e indicadores clave de rendimiento.",

        projectTagQuickSight:
            "Amazon QuickSight",

        projectTagDataAnalysis:
            "Análisis de datos",

        projectTagVisualization:
            "Visualización de datos",

        projectTwoCategory:
            "ANÁLISIS DE DATOS",

        projectTwoTitle:
            "Panel de gestión de permisos de empleados",

        projectTwoDescription:
            "Un panel interactivo desarrollado con Microsoft Power BI para supervisar solicitudes de permisos, departamentos, estados de aprobación y tipos de permisos.",

        projectTagPowerBI:
            "Power BI",

        projectTagDataCleaning:
            "Limpieza de datos",

        projectTagVisualizationTwo:
            "Visualización de datos",

        projectThreeCategory:
            "ANÁLISIS DE DATOS",

        projectThreeTitle:
            "Panel de ventas minoristas",

        projectThreeDescription:
            "Un panel de análisis de ventas desarrollado con OnlyOffice Spreadsheet. Limpié y preparé los datos, creé tablas dinámicas y gráficos, analicé el rendimiento de las ventas y presenté los resultados visualmente.",

        projectTagOnlyOffice:
            "OnlyOffice",

        projectTagPivotTables:
            "Tablas dinámicas",

        projectTagDataAnalysisTwo:
            "Análisis de datos",

        viewProject:
            "Explorar proyecto →",

        journeyEyebrow:
            "MI TRAYECTORIA",

        journeyTitle:
            "Un camino que sigue evolucionando.",

        journeyAccounting:
            "Contabilidad",

        journeyOne:
            "Comencé mi trayectoria académica en Contabilidad.",

        journeyBSc:
            "Licenciatura en Contabilidad",

        journeyTwo:
            "Completé mi licenciatura y fortalecí mis bases en análisis empresarial y financiero.",

        journeyAudit:
            "Auditoría y operaciones",

        journeyThree:
            "Adquirí experiencia práctica trabajando con registros empresariales, conciliaciones, personas y datos operativos.",

        journeyData:
            "Datos y tecnología",

        journeyFour:
            "Comencé a desarrollar habilidades prácticas en análisis de datos, tecnologías de nube y soluciones digitales.",

        projectShevoraName:
            "PROJECT SHEVORA",

        projectShevoraTitle:
            "Creando espacios donde las mujeres puedan elegirse a sí mismas.",

        projectShevoraParagraphOne:
            "Project Shevora es una iniciativa centrada en las mujeres que fundé para promover la igualdad de oportunidades, la inclusión digital y la confianza para aprovechar oportunidades sin estar limitadas por el género.",

        projectShevoraParagraphTwo:
            "A través de conversaciones, oportunidades de aprendizaje, actividades digitales y participación comunitaria, Project Shevora crea espacios donde las mujeres y las niñas pueden aprender, conectar y ver la tecnología como algo en lo que pueden participar y utilizar para crear oportunidades para sí mismas.",

        visitProjectShevora:
            "Visitar Project Shevora →",

        contactProjectShevora:
            "Contactar Project Shevora →",

        skillsEyebrow:
            "LO QUE UTILIZO",

        skillsTitle:
            "Herramientas, habilidades y bases.",

        skillDataTitle:
            "Datos y análisis",

        skillDataDescription:
            "Excel · WPS Spreadsheet · OnlyOffice · Power BI · Amazon QuickSight",

        skillCloudTitle:
            "Nube y tecnología",

        skillCloudDescription:
            "Amazon S3 · Amazon EC2 · Amazon VPC · AWS Lambda · Amazon SNS",

        skillBusinessTitle:
            "Negocios",

        skillBusinessDescription:
            "Contabilidad · Auditoría interna · Registros financieros · Análisis empresarial",

        educationEyebrow:
            "FORMACIÓN Y CERTIFICACIONES",

        educationTitle:
            "Bases que he construido a lo largo del camino.",

        educationCompleted:
            "COMPLETADO",

        educationND:
            "Diploma Nacional en Contabilidad",

        educationNDInstitution:
            "Auchi Polytechnic",

        educationBSc:
            "Licenciatura en Contabilidad",

        educationBScInstitution:
            "Nnamdi Azikiwe University, Awka",

        educationGoogle:
            "Certificado Profesional de Análisis de Datos de Google",

        educationGoogleInstitution:
            "Google a través de Coursera",

        educationGender:
            "Igualdad de género",

        educationGenderInstitution:
            "Centro de Capacitación de ONU Mujeres",

        educationSDSN:
            "Programa de Promoción de los ODS de UN SDSN",

        educationSDSNInstitution:
            "Cohorte 8",

        educationCloud:
            "Bootcamp Virtual de Fundamentos de la Nube",

        educationCloudInstitution:
            "Fundamentos de Computación en la Nube",

        contactEyebrow:
            "CONECTEMOS",

        contactTitle:
            "¿Tienes una idea, oportunidad o proyecto en mente?",

        contactText:
            "Siempre estoy abierta a conversaciones significativas, colaboraciones y oportunidades para aprender y contribuir.",

        contactEmail:
            "Enviarme un correo",

        contactLinkedIn:
            "LinkedIn",

        contactGitHub:
            "GitHub",

        footerText:
            "Construyendo con curiosidad, datos y propósito."

    },


    /* =================================================
       GERMAN
    ================================================= */

    de: {

        navHome: "Startseite",
        navAbout: "Über mich",
        navWork: "Projekte",
        navJourney: "Mein Weg",
        navImpact: "Wirkung",
        navContact: "Kontakt",

        floatingData: "Daten",
        floatingTechnology: "Technologie",
        floatingBusiness: "Wirtschaft",

        heroEyebrow:
            "BUCHHALTUNG × DATEN × TECHNOLOGIE",

        heroTitle:
            "An der Schnittstelle von Wirtschaft, Daten und Technologie.",

        heroDescription:
            "Ich bin Enemuwe Sophia Odineka, Absolventin des Rechnungswesens, und erkunde, wie Daten und Technologie alltägliche Geschäftsinformationen in bessere Entscheidungen und praktische Lösungen verwandeln können.",

        heroWorkButton:
            "Meine Projekte entdecken",

        heroStoryButton:
            "Meine Geschichte entdecken",

        aboutEyebrow:
            "ÜBER MICH",

        aboutTitle:
            "Von Buchhaltungsdaten zu datenbasierten Lösungen.",

        aboutParagraphOne:
            "Mein Weg begann mit dem Rechnungswesen, wo ich gelernt habe, Finanzinformationen zu verstehen, Unterlagen zu prüfen und auf Details zu achten.",

        aboutParagraphTwo:
            "Durch meine Erfahrungen im Forderungseinzug, im Personalwesen und in der internen Revision interessierte ich mich zunehmend dafür, was hinter den Informationen alltäglicher Geschäftsprozesse steckt. Ich begann, Tabellenkalkulationen zu verwenden, um Daten zu organisieren, Abweichungen zu erkennen und Informationen leichter nutzbar zu machen.",

        aboutParagraphThree:
            "Diese Neugier führte mich zur Datenanalyse und Technologie. Heute entwickle ich praktische Fähigkeiten in den Bereichen Daten, Cloud-Technologien und Informationssysteme, mit einem langfristigen Interesse an digitalen Lösungen für reale Geschäftsprobleme.",

        aboutHighlightTitle:
            "Von Natur aus neugierig.",

        aboutHighlightText:
            "Ich hinterfrage gerne, warum ein Prozess so funktioniert, finde heraus, was fehlt, und erkunde, wie Technologie ihn verbessern kann.",

        workEyebrow:
            "AUSGEWÄHLTE PROJEKTE",

        workTitle:
            "Projekte, die aus Neugier und Praxis entstanden sind.",

        workIntro:
            "Eine Auswahl von Projekten, bei denen ich Fähigkeiten in Datenbereinigung, Analyse, Visualisierung und Business Intelligence angewendet habe.",

        projectOneCategory:
            "BUSINESS INTELLIGENCE",

        projectOneTitle:
            "Business-Intelligence-Dashboard für Verkäufe",

        projectOneDescription:
            "Ein interaktives Verkaufsdashboard, das mit Amazon QuickSight entwickelt wurde. Ich habe 25.000 Einzelhandelstransaktionen analysiert, um Verkaufstrends, Produkte, Kategorien, Zahlungsmethoden und wichtige Leistungskennzahlen zu untersuchen.",

        projectTagQuickSight:
            "Amazon QuickSight",

        projectTagDataAnalysis:
            "Datenanalyse",

        projectTagVisualization:
            "Datenvisualisierung",

        projectTwoCategory:
            "DATENANALYSE",

        projectTwoTitle:
            "Dashboard für die Urlaubsverwaltung",

        projectTwoDescription:
            "Ein interaktives Dashboard mit Microsoft Power BI zur Überwachung von Urlaubsanträgen, Abteilungen, Genehmigungsstatus und Urlaubsarten.",

        projectTagPowerBI:
            "Power BI",

        projectTagDataCleaning:
            "Datenbereinigung",

        projectTagVisualizationTwo:
            "Datenvisualisierung",

        projectThreeCategory:
            "DATENANALYSE",

        projectThreeTitle:
            "Dashboard für Einzelhandelsverkäufe",

        projectThreeDescription:
            "Ein Verkaufsanalyse-Dashboard, das mit OnlyOffice Spreadsheet entwickelt wurde. Ich habe die Daten bereinigt und vorbereitet, Pivot-Tabellen und Diagramme erstellt, Verkaufsleistungen analysiert und die Ergebnisse visuell dargestellt.",

        projectTagOnlyOffice:
            "OnlyOffice",

        projectTagPivotTables:
            "Pivot-Tabellen",

        projectTagDataAnalysisTwo:
            "Datenanalyse",

        viewProject:
            "Projekt ansehen →",

        journeyEyebrow:
            "MEIN WEG",

        journeyTitle:
            "Ein Weg, der sich weiterentwickelt.",

        journeyAccounting:
            "Rechnungswesen",

        journeyOne:
            "Beginn meines akademischen Weges im Rechnungswesen.",

        journeyBSc:
            "B.Sc. Rechnungswesen",

        journeyTwo:
            "Abschluss meines Bachelorstudiums und Stärkung meiner Grundlagen in Geschäfts- und Finanzanalyse.",

        journeyAudit:
            "Audit & Betrieb",

        journeyThree:
            "Praktische Erfahrungen mit Geschäftsunterlagen, Abstimmungen, Personal und operativen Daten gesammelt.",

        journeyData:
            "Daten & Technologie",

        journeyFour:
            "Beginn des Aufbaus praktischer Fähigkeiten in Datenanalyse, Cloud-Technologien und digitalen Lösungen.",

        projectShevoraName:
            "PROJECT SHEVORA",

        projectShevoraTitle:
            "Räume schaffen, in denen Frauen sich selbst wählen können.",

        projectShevoraParagraphOne:
            "Project Shevora ist eine auf Frauen ausgerichtete Initiative, die ich gegründet habe, um Chancengleichheit, digitale Inklusion und das Selbstvertrauen zu fördern, Chancen wahrzunehmen, ohne durch das Geschlecht eingeschränkt zu werden.",

        projectShevoraParagraphTwo:
            "Durch Gespräche, Lernmöglichkeiten, digitale Aktivitäten und gemeinschaftliches Engagement schafft Project Shevora Räume, in denen Frauen und Mädchen lernen, sich vernetzen und Technologie als etwas sehen können, an dem sie teilnehmen und das sie nutzen können, um eigene Chancen zu schaffen.",

        visitProjectShevora:
            "Project Shevora besuchen →",

        contactProjectShevora:
            "Project Shevora kontaktieren →",

        skillsEyebrow:
            "WOMIT ICH ARBEITE",

        skillsTitle:
            "Werkzeuge, Fähigkeiten und Grundlagen.",

        skillDataTitle:
            "Daten & Analyse",

        skillDataDescription:
            "Excel · WPS Spreadsheet · OnlyOffice · Power BI · Amazon QuickSight",

        skillCloudTitle:
            "Cloud & Technologie",

        skillCloudDescription:
            "Amazon S3 · Amazon EC2 · Amazon VPC · AWS Lambda · Amazon SNS",

        skillBusinessTitle:
            "Wirtschaft",

        skillBusinessDescription:
            "Rechnungswesen · Interne Revision · Finanzunterlagen · Geschäftsanalyse",

        educationEyebrow:
            "AUSBILDUNG & ZERTIFIZIERUNGEN",

        educationTitle:
            "Grundlagen, die ich auf meinem Weg aufgebaut habe.",

        educationCompleted:
            "ABGESCHLOSSEN",

        educationND:
            "Nationales Diplom in Rechnungswesen",

        educationNDInstitution:
            "Auchi Polytechnic",

        educationBSc:
            "B.Sc. Rechnungswesen",

        educationBScInstitution:
            "Nnamdi Azikiwe University, Awka",

        educationGoogle:
            "Google Professional Certificate für Datenanalyse",

        educationGoogleInstitution:
            "Google über Coursera",

        educationGender:
            "Geschlechtergleichstellung",

        educationGenderInstitution:
            "Ausbildungszentrum von UN Women",

        educationSDSN:
            "UN SDSN SDG Advocacy Programme",

        educationSDSNInstitution:
            "Kohorte 8",

        educationCloud:
            "Virtuelles Cloud-Foundations-Bootcamp",

        educationCloudInstitution:
            "Grundlagen des Cloud Computing",

        contactEyebrow:
            "KONTAKT",

        contactTitle:
            "Hast du eine Idee, eine Gelegenheit oder ein Projekt im Kopf?",

        contactText:
            "Ich bin offen für interessante Gespräche, Kooperationen und Möglichkeiten, zu lernen und einen Beitrag zu leisten.",

        contactEmail:
            "E-Mail senden",

        contactLinkedIn:
            "LinkedIn",

        contactGitHub:
            "GitHub",

        footerText:
            "Mit Neugier, Daten und Zielstrebigkeit gestalten."

    }

};


/* =====================================================
   2. LANGUAGE SWITCHING
===================================================== */

const languageButtons = document.querySelectorAll("[data-lang]");
const currentLanguage = document.getElementById("current-language");

function changeLanguage(language) {

    const selectedLanguage = translations[language];

    if (!selectedLanguage) {
        return;
    }

    document.querySelectorAll("[data-key]").forEach(element => {

        const key = element.getAttribute("data-key");

        if (selectedLanguage[key]) {
            element.textContent = selectedLanguage[key];
        }

    });

    currentLanguage.textContent = language.toUpperCase();

    document.documentElement.lang = language;

    localStorage.setItem("selectedLanguage", language);
}


languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language = button.getAttribute("data-lang");

        changeLanguage(language);

    });

});


/* =====================================================
   3. REMEMBER SELECTED LANGUAGE
===================================================== */

const savedLanguage = localStorage.getItem("selectedLanguage");

if (savedLanguage && translations[savedLanguage]) {
    changeLanguage(savedLanguage);
}


/* =====================================================
   4. MOBILE MENU
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


/* Close mobile menu when a link is clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});


/* =====================================================
   5. SCROLL REVEAL
===================================================== */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


sections.forEach(section => {

    observer.observe(section);

});