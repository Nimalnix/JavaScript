//how many days, between two dates
const date1 = new Date('May 27, 2021')

const date2 = new Date('June 5 , 2019')

/*const getDays=(date1,date2)=>
{
    const time2=date2.getTime();
    const time1=date1.getTime();
    console.log(time2);
    console.log(time1);
    let time=time2-time1;
    time=time/(1000*60*60*24);
    time=Math.round(Math.abs(time))
    return time
}

*/

const getDays = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 3600 * 24)))

console.log(getDays(date1, date2))