let vowels = ['a', 'e', 'i', 'o', 'u'];
let specialPhonemes = ['ts', 'sh', 'gn', 'ch'];
let amharicPhoneticMap = {};

amharicPhoneticMap.__proto__.set = (key, value) => {
    amharicPhoneticMap[key] = value;
}
amharicPhoneticMap.__proto__.get = (key) => {
    return amharicPhoneticMap[key]
}

let setMapping = () => {
    amharicPhoneticMap.set('h', 'ህ');
    amharicPhoneticMap.set('ha', 'ሃ');
    amharicPhoneticMap.set('he', ['ሄ', 'ሀ']);
    amharicPhoneticMap.set('hi', 'ሂ');
    amharicPhoneticMap.set('ho', 'ሆ');
    amharicPhoneticMap.set('hu', 'ሁ');

    amharicPhoneticMap.set('l', 'ል');
    amharicPhoneticMap.set('la', 'ላ');
    amharicPhoneticMap.set('le', ['ሌ', 'ለ']);
    amharicPhoneticMap.set('li', 'ሊ');
    amharicPhoneticMap.set('lo', 'ሎ');
    amharicPhoneticMap.set('lu', 'ሉ');

    amharicPhoneticMap.set('m', 'ም');
    amharicPhoneticMap.set('ma', 'ማ');
    amharicPhoneticMap.set('me', ['ሜ', 'መ']);
    amharicPhoneticMap.set('mi', 'ሚ');
    amharicPhoneticMap.set('mo', 'ሞ');
    amharicPhoneticMap.set('mu', 'ሙ');

    amharicPhoneticMap.set('s', 'ስ');
    amharicPhoneticMap.set('sa', 'ሳ');
    amharicPhoneticMap.set('se', ['ሴ', 'ሰ']);
    amharicPhoneticMap.set('si', 'ሲ');
    amharicPhoneticMap.set('so', 'ሶ');
    amharicPhoneticMap.set('su', 'ሱ');

    amharicPhoneticMap.set('r', 'ር');
    amharicPhoneticMap.set('ra', 'ራ');
    amharicPhoneticMap.set('re', ['ሬ', 'ረ']);
    amharicPhoneticMap.set('ri', 'ሪ');
    amharicPhoneticMap.set('ro', 'ሮ');
    amharicPhoneticMap.set('ru', 'ሩ');

    amharicPhoneticMap.set('sh', 'ሽ');
    amharicPhoneticMap.set('sha', 'ሻ');
    amharicPhoneticMap.set('she', ['ሼ', 'ሸ']);
    amharicPhoneticMap.set('shi', 'ሺ');
    amharicPhoneticMap.set('sho', 'ሾ');
    amharicPhoneticMap.set('shu', 'ሹ');

    amharicPhoneticMap.set('q', 'ቅ');
    amharicPhoneticMap.set('qa', 'ቃ');
    amharicPhoneticMap.set('qe', ['ቄ', 'ቀ']);
    amharicPhoneticMap.set('qi', 'ቂ');
    amharicPhoneticMap.set('qo', 'ቆ');
    amharicPhoneticMap.set('qu', 'ቁ');

    amharicPhoneticMap.set('b', 'ብ');
    amharicPhoneticMap.set('ba', 'ባ');
    amharicPhoneticMap.set('be', ['ቤ', 'በ']);
    amharicPhoneticMap.set('bi', 'ቢ');
    amharicPhoneticMap.set('bo', 'ቦ');
    amharicPhoneticMap.set('bu', 'ቡ');

    amharicPhoneticMap.set('t', ['ት', 'ጥ']);
    amharicPhoneticMap.set('ta', ['ታ', 'ጣ']);
    amharicPhoneticMap.set('te', ['ቴ', 'ተ', 'ጤ', 'ጠ']);
    amharicPhoneticMap.set('ti', ['ቲ', 'ጢ']);
    amharicPhoneticMap.set('to', ['ቶ', 'ጦ']);
    amharicPhoneticMap.set('tu', ['ቱ', 'ጡ']);

    amharicPhoneticMap.set('ch', ['ች', 'ጭ']);
    amharicPhoneticMap.set('cha', ['ቻ', 'ጫ']);
    amharicPhoneticMap.set('che', ['ቼ', 'ቸ', 'ጬ', 'ጨ']);
    amharicPhoneticMap.set('chi', ['ቺ', 'ጪ']);
    amharicPhoneticMap.set('cho', ['ቾ', 'ጮ']);
    amharicPhoneticMap.set('chu', ['ቹ', 'ጩ']);

    amharicPhoneticMap.set('c', ['ች', 'ክ']);
    amharicPhoneticMap.set('ca', ['ቻ', 'ካ']);
    amharicPhoneticMap.set('ce', ['ቼ', 'ቸ', 'ኬ', 'ከ']);
    amharicPhoneticMap.set('ci', ['ቺ', 'ኪ']);
    amharicPhoneticMap.set('co', ['ቾ', 'ኮ']);
    amharicPhoneticMap.set('cu', ['ቹ', 'ኩ']);

    amharicPhoneticMap.set('n', 'ን');
    amharicPhoneticMap.set('na', 'ና');
    amharicPhoneticMap.set('ne', ['ኔ', 'ነ']);
    amharicPhoneticMap.set('ni', 'ኒ');
    amharicPhoneticMap.set('no', 'ኖ');
    amharicPhoneticMap.set('nu', 'ኑ');

    amharicPhoneticMap.set('gn', 'ኝ');
    amharicPhoneticMap.set('gna', 'ኛ');
    amharicPhoneticMap.set('gne', ['ኜ', 'ኘ']);
    amharicPhoneticMap.set('gni', 'ኚ');
    amharicPhoneticMap.set('gno', 'ኞ');
    amharicPhoneticMap.set('gnu', 'ኙ');

    amharicPhoneticMap.set('a', 'ኣ');
    amharicPhoneticMap.set('e', ['ኤ']);
    amharicPhoneticMap.set('i', 'ኢ');
    amharicPhoneticMap.set('o', 'ኦ');
    amharicPhoneticMap.set('u', 'ኡ');

    amharicPhoneticMap.set('k', 'ክ');
    amharicPhoneticMap.set('ka', 'ካ');
    amharicPhoneticMap.set('ke', ['ኬ', 'ከ']);
    amharicPhoneticMap.set('ki', 'ኪ');
    amharicPhoneticMap.set('ko', 'ኮ');
    amharicPhoneticMap.set('ku', 'ኩ');

    amharicPhoneticMap.set('w', 'ው');
    amharicPhoneticMap.set('wa', 'ዋ');
    amharicPhoneticMap.set('we', ['ዌ', 'ወ']);
    amharicPhoneticMap.set('wi', 'ዊ');
    amharicPhoneticMap.set('wo', 'ዎ');
    amharicPhoneticMap.set('wu', 'ዉ');

    amharicPhoneticMap.set('w', 'ው');
    amharicPhoneticMap.set('wa', 'ዋ');
    amharicPhoneticMap.set('we', ['ዌ', 'ወ']);
    amharicPhoneticMap.set('wi', 'ዊ');
    amharicPhoneticMap.set('wo', 'ዎ');
    amharicPhoneticMap.set('wu', 'ዉ');

    amharicPhoneticMap.set('z', 'ዝ');
    amharicPhoneticMap.set('za', 'ዛ');
    amharicPhoneticMap.set('ze', ['ዜ', 'ዘ']);
    amharicPhoneticMap.set('zi', 'ዚ');
    amharicPhoneticMap.set('zo', 'ዞ');
    amharicPhoneticMap.set('zu', 'ዙ');

    amharicPhoneticMap.set('x', 'ዝ');
    amharicPhoneticMap.set('xa', 'ዛ');
    amharicPhoneticMap.set('xe', ['ዜ', 'ዘ']);
    amharicPhoneticMap.set('xi', 'ዚ');
    amharicPhoneticMap.set('xo', 'ዞ');
    amharicPhoneticMap.set('xu', 'ዙ');

    amharicPhoneticMap.set('y', 'ይ');
    amharicPhoneticMap.set('ya', 'ያ');
    amharicPhoneticMap.set('ye', ['ዬ', 'የ']);
    amharicPhoneticMap.set('yi', 'ዪ');
    amharicPhoneticMap.set('yo', 'ዮ');
    amharicPhoneticMap.set('yu', 'ዩ');

    amharicPhoneticMap.set('d', 'ድ');
    amharicPhoneticMap.set('da', 'ዳ');
    amharicPhoneticMap.set('de', ['ዴ', 'ደ']);
    amharicPhoneticMap.set('di', 'ዲ');
    amharicPhoneticMap.set('do', 'ዶ');
    amharicPhoneticMap.set('du', 'ዱ');

    amharicPhoneticMap.set('j', 'ጅ');
    amharicPhoneticMap.set('ja', 'ጃ');
    amharicPhoneticMap.set('je', ['ጄ', 'ጀ']);
    amharicPhoneticMap.set('ji', 'ጂ');
    amharicPhoneticMap.set('jo', 'ጆ');
    amharicPhoneticMap.set('ju', 'ጁ');

    amharicPhoneticMap.set('g', 'ግ');
    amharicPhoneticMap.set('ga', 'ጋ');
    amharicPhoneticMap.set('ge', ['ጌ', 'ገ']);
    amharicPhoneticMap.set('gi', 'ጊ');
    amharicPhoneticMap.set('go', 'ጎ');
    amharicPhoneticMap.set('gu', 'ጉ');

    amharicPhoneticMap.set('ts', 'ጽ');
    amharicPhoneticMap.set('tsa', 'ጻ');
    amharicPhoneticMap.set('tse', ['ጼ', 'ጸ']);
    amharicPhoneticMap.set('tsi', 'ጺ');
    amharicPhoneticMap.set('tso', 'ጾ');
    amharicPhoneticMap.set('tsu', 'ጹ');

    amharicPhoneticMap.set('f', 'ፍ');
    amharicPhoneticMap.set('fa', 'ፋ');
    amharicPhoneticMap.set('fe', ['ፌ', 'ፈ']);
    amharicPhoneticMap.set('fi', 'ፊ');
    amharicPhoneticMap.set('fo', 'ፎ');
    amharicPhoneticMap.set('fu', 'ፉ');

    amharicPhoneticMap.set('p', 'ፕ');
    amharicPhoneticMap.set('pa', 'ፓ');
    amharicPhoneticMap.set('pe', ['ፔ', 'ፐ']);
    amharicPhoneticMap.set('pi', 'ፒ');
    amharicPhoneticMap.set('po', 'ፖ');
    amharicPhoneticMap.set('pu', 'ፑ');

    amharicPhoneticMap.set('v', 'ቭ');
    amharicPhoneticMap.set('va', 'ቫ');
    amharicPhoneticMap.set('ve', ['ቬ', 'ቨ']);
    amharicPhoneticMap.set('vi', 'ቪ');
    amharicPhoneticMap.set('vo', 'ቮ');
    amharicPhoneticMap.set('vu', 'ቩ');

    return amharicPhoneticMap;
}

let extractPhonemes = string => {
    let stringArray = string.trim().toLowerCase().split('');
    let phonemeArray = [];
    let phonemeSuccession = '';

    stringArray.forEach((element, index) => {
        if (vowels.includes(element) && phonemeSuccession === '') {
            phonemeArray.push(element);
        } else if (vowels.includes(element) && phonemeSuccession !== '') {
            phonemeSuccession = phonemeSuccession.concat(element);
            phonemeArray.push(phonemeSuccession);
            phonemeSuccession = '';
        } else if (!vowels.includes(element) && phonemeSuccession.length > 0) {
            let phoneme = phonemeSuccession.concat(element);

            if (specialPhonemes.includes(phoneme) &&
                index !== (stringArray.length - 1) &&
                vowels.includes(stringArray[index + 1])) {

                phonemeSuccession = phonemeSuccession.concat(element);
                return;

            } else if (specialPhonemes.includes(phoneme) &&
                index === (stringArray.length - 1)) {

                phonemeSuccession = phonemeSuccession.concat(element);
                phonemeArray.push(phonemeSuccession);
                phonemeSuccession = '';

            } else {
                phonemeArray.push(phonemeSuccession);
                phonemeSuccession = element;
            }

        } else if (!vowels.includes(element) && phonemeSuccession.length === 0) {
            phonemeSuccession = element;
        }


        if (index === (stringArray.length - 1) && phonemeSuccession.length !== 0) {
            phonemeArray.push(phonemeSuccession);
        }

    });

    return phonemeArray;
}

let matchToAmharicPhonems = array => {
    let translationArray = [];
    console.log(array);
    let translation = '';
    array.forEach(phoneme => {
        let val = amharicPhoneticMap.get(phoneme);
        if (!Array.isArray(val)) {
            val = val.split('');
        }

        if (translationArray.length === 0) {
            val.forEach(element => {
                translationArray.push(element);
            });
        } else {
            let temp = Array.from(translationArray);
            translationArray = [];
            temp.forEach(existing => {
                val.forEach(variation => {
                    translationArray.push(existing.concat(variation));
                });
            });
        }

        val = [];
    });

    return translationArray;
}


setMapping();
console.log(matchToAmharicPhonems(extractPhonemes('dani')));
