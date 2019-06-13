export class DateClass 
{
    constructor(dateToFormatTimeMillis) 
    {
        try
        {
        var date = new Date(dateToFormatTimeMillis);
        
        this.day = date.getDate();
        this.month = date.getMonth()+1;
        this.year = date.getFullYear();
        } catch(error)
        {
                return "Error retrieving the date values: " + error;
        }
    }

    formatDate() 
    {
        if (isNaN(this.day) || isNaN(this.month) || isNaN(this.year)) 
        {
            return "Wrong input";
          }
        try
        {
        var formattedDate = this.day + "/" + this.month + "/" + this.year;
        return formattedDate;
        } catch(error)
        {
            return "Error formatting date: " + error;
        }
    }
}

