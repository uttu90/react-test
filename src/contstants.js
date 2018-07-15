const LABELS = {
  first_name: {
    text: 'First name',
    type: 'text'
  },
  last_name: {
    text: 'Last name',
    type: 'text'
  },
  email: {
    text: 'Email',
    type: 'email'
  },
  password: {
    text: 'Password',
    type: 'password'
  }
}

const birthYears = [];
for (let i = 1970; i < 2016; i = i + 1) {
  birthYears.push(i.toString());
}

const timezones = [];
for (let i = -12; i < 14; i = i + 1) {
  const timezoneString = i < 0 ? i.toString() : `+${i}`;
  timezones.push(timezoneString);
}

const SELECTIONS = {
  language: {
    text: 'Language',
    values: ['Vietnames', 'English', 'French', 'Dutch']
  },
  country: {
    text: 'Home country',
    values: ['Vietnam', 'Laos', 'Campuchia', 'England', 'United States', 'Germany']
  },
  timezone: {
    text: 'Timezone',
    values: timezones
  },
  birth_year: {
    text: 'Birth year',
    values: birthYears
  }
}

export {
  LABELS,
  SELECTIONS
}