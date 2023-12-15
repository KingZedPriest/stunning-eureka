const generateRandomNumber = (): string => {
    const prefix = "UT-";
    const randomNumber = Math.floor(100000 + Math.random() * 900000).toString();
    const formattedNumber = `${prefix}${randomNumber}`;
    return formattedNumber;
  };
  
  export default generateRandomNumber;
  