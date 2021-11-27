export default PickFlag = (phoneNumber) => {
  let len = 4;
  while (len > 0) {
    let country_code = phoneNumber.substring(0, len);
    CountryInfo.forEach((element) => {
      if (element.dial_code === country_code) {
        return element.flag;
      }
    });
  }
};
