/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function (address) {
    const streetF = address.street;
    const houseF = address.house;
    const apartmentF = address.apartment;
    const cityF = address.city;
    const postalCodeF = address.postalCode;
    const countryF = address.country;

    return `${streetF}, ${houseF}, ${apartmentF}, ${cityF}, ${postalCodeF}, ${countryF}`;
  };
};
