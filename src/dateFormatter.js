import {DateClass} from '../src/dateClass';

export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {

  const date = new DateClass(dateToFormatTimeMillis);
  const dateSystem = new DateClass(systemDateTimeMillis);

     if(date.formatDate() == dateSystem.formatDate())
   {
     return 'TODAY';
   } else
   {
     return date.formatDate();
   }

};
