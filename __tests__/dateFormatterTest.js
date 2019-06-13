import {format} from '../src/dateFormatter';

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});

it('when the system date and the date to format are not the same day ', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2019, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time

  console.log(format(dateTimeToFormat, systemDateTime));
});
