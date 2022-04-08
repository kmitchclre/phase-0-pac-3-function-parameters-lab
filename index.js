function introduction(name) {
    return `Hi, my name is ${name}.`
};
const descMe = introduction('Kenny');



function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
const introduction2 = introductionWithLanguage('Kenny', 'Javascript');



function introductionWithLanguageOptional(name, language = "Javascript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

const introduction1 = introductionWithLanguageOptional('Kenny', 'Javascript');



