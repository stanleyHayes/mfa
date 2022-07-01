import africa from "./../assets/images/africa.png";
import america from "./../assets/images/americas.png";
import asia from "./../assets/images/asia.png";
import europe from "./../assets/images/europe.png";
import middleEast from "./../assets/images/middle-east.png";

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

export const DATA = {
    FUNCTIONAL_AREAS: functionalAreas,
    GLOBAL_AREAS: globalAreas,
    MISSIONS: missions
}
