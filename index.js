

function userLocate() {

    const countries = require('./data/countries.json');
    const timezones = require('./data/timezones.json');

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (timezone === "" || !timezone) {
      return null;
    }

    const _country = timezones[timezone].c[0];
    const country = countries[_country];

    return {
      'timezone': timezone,
      'country': country,
      'code': _country 
    };
}

module.exports = userLocate