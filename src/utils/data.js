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
    {area: 'Africa', link: '', image: africa},
    {area: 'Europe', link: '', image: europe},
    {area: 'Middle East', link: '', image: middleEast},
    {area: 'America', link: '', image: america},
    {area: 'Asia', link: '', image: asia},
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
