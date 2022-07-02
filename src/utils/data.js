import africa from "./../assets/images/africa.png";
import america from "./../assets/images/americas.png";
import asia from "./../assets/images/asia.png";
import europe from "./../assets/images/europe.png";
import middleEast from "./../assets/images/middle-east.png";

import un from "./../assets/images/un.png";
import au from "./../assets/images/au.png";
import ecowas from "./../assets/images/ecowas.png";
import commonwealth from "./../assets/images/commonwealth.png";
import worldBank from "./../assets/images/the-world-bank.png";
import imf from "./../assets/images/imf.png";
import undp from "./../assets/images/undp.png";

import algeria from "./../assets/images/algeria.jpg";
import angola from "./../assets/images/angola.jpg";
import benin from "./../assets/images/benin.jpg";
import bukinaFaso from "./../assets/images/bukina-faso.jpg";
import congo from "./../assets/images/congo.jpg";
import ivoryCoast from "./../assets/images/cote-divoire.jpg";
import egypt from "./../assets/images/egypt.jpg";
import equitorialGuinea from "./../assets/images/equitorial-guinea.jpg";
import ethiopia from "./../assets/images/ethiopia.jpg";
import mali from "./../assets/images/mali.jpg";
import liberia from "./../assets/images/liberia.jpg";
import namibia from "./../assets/images/namibia.jpg";
import nigeria from "./../assets/images/nigeria.jpg";
import senegal from "./../assets/images/senegal.jpg";
import sierraLeone from "./../assets/images/sierra-leone.jpg";
import southAfrica from "./../assets/images/south-africa.jpg";
import kenya from "./../assets/images/kenya.jpg";
import togo from "./../assets/images/togo.jpg";
import zambia from "./../assets/images/zambia.jpg";
import zimbabwe from "./../assets/images/zimbabwe.jpg";

import belgium from "./../assets/images/belgium.jpg";
import czeckRepublic from "./../assets/images/czech-republic.jpg";
import denmark from "./../assets/images/denmark.jpg";
import france from "./../assets/images/france.jpg";
import germany from "./../assets/images/germany.jpg";
import italy from "./../assets/images/italy.jpg";
import malta from "./../assets/images/malta.jpg";
import netherlands from "./../assets/images/netherlands.jpg";
import russia from "./../assets/images/russia.jpg";
import spain from "./../assets/images/spain.jpg";
import switzerland from "./../assets/images/switzerland.jpg";
import uk from "./../assets/images/uk.jpg";
import vaticanCity from "./../assets/images/vatican-city.jpg";

import israel from "./../assets/images/Israel.jpg";
import saudiArabia from "./../assets/images/saudi-arabia.jpg";
import uae from "./../assets/images/uae.jpg";

import australia from "./../assets/images/australia.jpg";
import china from "./../assets/images/china.jpg";
import india from "./../assets/images/india.jpg";
import japan from "./../assets/images/japan.jpg";
import malaysia from "./../assets/images/malaysia.jpg";
import southKorea from "./../assets/images/south-korea.jpg";
import brazil from "./../assets/images/brazil.jpg";
import canada from "./../assets/images/canada.jpg";
import cuba from "./../assets/images/cuba.jpg";
import usa from "./../assets/images/usa.jpg";


const functionalAreas = [
    "Policy Planning, Monitoring and Evaluation",
    "Administration",
    " Finance and Accounts",
    "Protocol",
    "Legal and Consular Affairs",
    "ECTIB (Economic Trade and Investment Bureau)",
    "Passport",
    "Information and Public Affairs",
    "Estates and General Services",
    "Africa and Regional Integration",
    "Americas",
    "Europe",
    "Middle East",
    "Asia and Pacific",
    "Multilateral Relations",
    "Accra International Conference Center",
    "ICT Unit",
    "Inspectorate and Internal Audit",
    "Diaspora Unit"
];

const globalAreas = [
    "Africa - 25",
    "Europe - 13",
    "Middle East and Asia - 11",
    "Americas - 6"
]

const missions = [
    {
        area: 'Africa',
        link: '/missions/africa',
        image: africa,
        countries: [
            {
                name: 'Algeria',
                image: algeria,
                link: ''
            },
            {
                name: 'Angola',
                image: angola,
                link: ''
            },
            {
                name: 'Benin',
                image: benin,
                link: ''
            },
            {
                name: 'Bukina Faso',
                image: bukinaFaso,
                link: ''
            },
            {
                name: 'Congo',
                image: congo,
                link: ''
            },
            {
                name: "Cote D'Ivoire",
                image: ivoryCoast,
                link: ''
            },
            {
                name: 'Egypt',
                image: egypt,
                link: ''
            },
            {
                name: "Equitorial Guinea",
                image: equitorialGuinea,
                link: ''
            },
            {
                name: 'Ethiopia',
                image: ethiopia,
                link: ''
            },
            {
                name: 'Kenya',
                image: kenya,
                link: ''
            },
            {
                name: 'Liberia',
                image: liberia,
                link: ''
            },
            {
                name: 'Mali',
                image: mali,
                link: ''
            },
            {
                name: 'Namibia',
                image: namibia,
                link: ''
            },
            {
                name: 'Nigeria',
                image: nigeria,
                link: ''
            },
            {
                name: "Senegal",
                image: senegal,
                link: ''
            },
            {
                name: 'Sierra Leone',
                image: sierraLeone,
                link: ''
            },
            {
                name: "South Africa",
                image: southAfrica,
                link: ''
            },
            {
                name: 'Togo',
                image: togo,
                link: ''
            },
            {
                name: "Zambia",
                image: zambia,
                link: ''
            },
            {
                name: "Zimbabwe",
                image: zimbabwe,
                link: ''
            }
        ]
    },
    {
        area: 'Europe',
        link: '/missions/europe',
        image: europe,
        countries: [
            {
                name: 'Belgium',
                image: belgium,
                link: ''
            },
            {
                name: 'Czech Republic',
                image: czeckRepublic,
                link: ''
            },
            {
                name: 'Denmark',
                image: denmark,
                link: ''
            },
            {
                name: 'France',
                image: france,
                link: ''
            },
            {
                name: 'Germany',
                image: germany,
                link: ''
            },
            {
                name: "Italy",
                image: italy,
                link: ''
            },
            {
                name: 'Malta',
                image: malta,
                link: ''
            },
            {
                name: "Netherlands",
                image: netherlands,
                link: ''
            },
            {
                name: 'Russia',
                image: russia,
                link: ''
            },
            {
                name: 'Spain',
                image: spain,
                link: ''
            },
            {
                name: 'Switzerland',
                image: switzerland,
                link: ''
            },
            {
                name: 'UK',
                image: uk,
                link: ''
            },
            {
                name: 'Vatican City',
                image: vaticanCity,
                link: ''
            },
        ]
    },
    {
        area: 'Middle East',
        link: '/missions/middle-east',
        image: middleEast,
        countries: [
            {
                name: 'Israel',
                image: israel,
                link: ''
            },
            {
                name: 'Saudi Arabia',
                image: saudiArabia,
                link: ''
            },
            {
                name: 'UAE',
                image: uae,
                link: ''
            },
        ]},
    {
        area: 'America',
        link: '/missions/america',
        image: america,
        countries: [
            {
                name: 'Brazil',
                image: brazil,
                link: ''
            },
            {
                name: 'Canada',
                image: canada,
                link: ''
            },
            {
                name: 'Cuba',
                image: cuba,
                link: ''
            },
            {
                name: 'USA',
                image: usa,
                link: ''
            },
        ]
    },
    {
        area: 'Asia',
        link: '/missions/asia',
        image: asia,
        countries: [
            {
                name: 'Australia',
                image: australia,
                link: ''
            },
            {
                name: 'China',
                image: china,
                link: ''
            },
            {
                name: 'India',
                image: india,
                link: ''
            },
            {
                name: 'Japan',
                image: japan,
                link: ''
            },
            {
                name: 'Malaysia',
                image: malaysia,
                link: ''
            },
            {
                name: 'South Korea',
                image: southKorea,
                link: ''
            },
        ]
    },
];

const vacancies = [
    {
        name: 'United Nations Vacancies',
        image: un,
        link: 'https://careers.un.org/lbw/home.aspx?viewtype=SJ&vacancy=All'
    },
    {
        name: 'African Union Vacancies',
        image: au,
        link: 'https://careers.au.int/en'
    },
    {
        name: 'Economic Community of West African States',
        image: ecowas,
        link: 'https://ecowas.int/?page_id=6077'
    },
    {
        name: 'Commonwealth',
        image: commonwealth,
        link: 'https://thecommonwealth.org/jobs'
    },
    {
        name: 'WorldBank',
        image: worldBank,
        link: 'https://www.worldbank.org/en/about/careers'
    },
    {
        name: 'International Monetary Funds',
        image: imf,
        link: 'https://imf.wd5.myworkdayjobs.com/IMF'
    },
    {
        name: 'United Nations Development Programme',
        image: undp,
        link: 'https://jobs.undp.org/cj_view_jobs.cfm'
    }
];


export const DATA = {
    FUNCTIONAL_AREAS: functionalAreas,
    GLOBAL_AREAS: globalAreas,
    MISSIONS: missions,
    VACANCIES: vacancies
}
