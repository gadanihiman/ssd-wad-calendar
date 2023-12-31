export function getMonthGrid(month: any) {
    const currentDate = new Date();
    const dayIndex = currentDate.getDay() - 1;
    const yearIndex = currentDate.getFullYear();
    let currentMonthCount = 0 - dayIndex;
  
    function convertJsDate(year: any, month: any, day: any) {
        const daysJsDate = new Date(year, month, day);
        return new Date(daysJsDate);
    }

    const days = new Array(5).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
        currentMonthCount++;
        return {
          d: convertJsDate(yearIndex, month, currentMonthCount),
          a: Date.parse(String(convertJsDate(yearIndex, month, currentMonthCount))),
          m: getMonthIndex(Date.parse(String(convertJsDate(yearIndex, month, currentMonthCount)))),
        };
      });
    });
  
    return days;
  }
  
  export function getRandomColor() {
    const randomShades = ['1', '2', '3', '4', '5', '6', '7', '8'];
  
    const color: {
      [key: string]: string;
    } = {
      1: 'indigo',
      2: 'gray',
      3: 'green',
      4: 'blue',
      5: 'red',
      6: 'purple',
      7: 'pink',
      8: 'orange',
    };
  
    const randomShade = randomShades[Math.floor(Math.random() * randomShades.length)];
  
    return `bg-${color[randomShade]}-500`;
  }
  
  export function getmonth(monthIndex: number | null = 1): string {
    // const date = new Date();
    // const monthindex = date.getMonth();
    const months: {
      [key: number]: string;
    } = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'Mei',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'Desember',
    };
    const month = monthIndex ? months[monthIndex] : months[1];
    return month
  }
  
  export function convertTimeStamp(timestamp: any) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
  
    const formatedDate = `${day}-${month}-${year}`;
  
    return formatedDate;
  }
  
  export function getDay(timeStamp: any) {
    const date = new Date(timeStamp);
    const day = date.getDate().toString().padStart(2, '0');
  
    return day;
  }
  
  export function getMonthIndex(timestamp: any) {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString();
  
    return month;
  }
  
  export function getHours(timestamp: any) {
    const timeStamp = timestamp * 1000;
    const hours = new Date(timeStamp).toLocaleTimeString();
    return hours;
  }
