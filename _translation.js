import I18n from 'react-native-i18n';

I18n.fallbacks = true;

let languageCode = I18n.locale.substr(0,2);

I18n.translations = {
  en: require('./_en.json')
};

if (languageCode == 'af') {
  I18n.translations.af = require('./af.json');
}
if (languageCode == 'am') {
  I18n.translations.am = require('./am.json');
}
if (languageCode == 'ar') {
  I18n.translations.ar = require('./ar.json');
}
if (languageCode == 'bg') {
  I18n.translations.bg = require('./bg.json');
}
if (languageCode == 'ca') {
  I18n.translations.ca = require('./ca.json');
}
if (languageCode == 'cs') {
  I18n.translations.cs = require('./cs.json');
}
if (languageCode == 'da') {
  I18n.translations.da = require('./da.json');
}
if (languageCode == 'de') {
  I18n.translations.de = require('./de.json');
}
if (languageCode == 'el') {
  I18n.translations.el = require('./el.json');
}
if (languageCode == 'es') {
  I18n.translations.es = require('./es.json');
}
if (languageCode == 'et') {
  I18n.translations.et = require('./et.json');
}
if (languageCode == 'fi') {
  let addCode = I18n.locale.substr(0,3);
  if (addCode == 'fil'){
    I18n.translations.fil = require('./fil.json');
  } else {
    I18n.translations.fi = require('./fi.json');
  }
}
if (languageCode == 'fr') {
  I18n.translations.fr = require('./fr.json');
}
if (languageCode == 'he') {
  I18n.translations.he = require('./he.json');
}
if (languageCode == 'hi') {
  I18n.translations.hi = require('./hi.json');
}
if (languageCode == 'hr') {
  I18n.translations.hr = require('./hr.json');
}
if (languageCode == 'hu') {
  I18n.translations.hu = require('./hu.json');
}
if (languageCode == 'in') {
  I18n.translations.in = require('./id.json');
}
if (languageCode == 'id') {
  I18n.translations.id = require('./id.json');
}
if (languageCode == 'it') {
  I18n.translations.it = require('./it.json');
}
if (languageCode == 'ja') {
  I18n.translations.ja = require('./ja.json');
}
if (languageCode == 'ko') {
  I18n.translations.ko = require('./ko.json');
}
if (languageCode == 'lt') {
  I18n.translations.lt = require('./lt.json');
}
if (languageCode == 'lv') {
  I18n.translations.lv = require('./lv.json');
}
if (languageCode == 'ms') {
  I18n.translations.ms = require('./ms.json');
}
if (languageCode == 'nb') {
  I18n.translations.nb = require('./nb.json');
}
if (languageCode == 'nl') {
  I18n.translations.nl = require('./nl.json');
}
if (languageCode == 'no') {
  I18n.translations.no = require('./no.json');
}
if (languageCode == 'pl') {
  I18n.translations.pl = require('./pl.json');
}
if (languageCode == 'pt') {
  I18n.translations.pt = require('./pt.json');
}
if (languageCode == 'ro') {
  I18n.translations.ro = require('./ro.json');
}
if (languageCode == 'ru') {
  I18n.translations.ru = require('./ru.json');
}
if (languageCode == 'sl') {
  I18n.translations.sl = require('./sl.json');
}
if (languageCode == 'sk') {
  I18n.translations.sk = require('./sk.json');
}
if (languageCode == 'sr') {
  I18n.translations.sr = require('./sr.json');
}
if (languageCode == 'sv') {
  I18n.translations.sv = require('./sv.json');
}
if (languageCode == 'sw') {
  I18n.translations.sw = require('./sw.json');
}
if (languageCode == 'th') {
  I18n.translations.th = require('./th.json');
}
if (languageCode == 'tr') {
  I18n.translations.tr = require('./tr.json');
}
if (languageCode == 'uk') {
  I18n.translations.uk = require('./uk.json');
}
if (languageCode == 'vi') {
  I18n.translations.vi = require('./vi.json');
}
if (languageCode == 'zh') {
  I18n.translations.zh = require('./zh.json');
}
if (languageCode == 'zu') {
  I18n.translations.zu = require('./zu.json');
}
