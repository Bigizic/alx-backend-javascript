const getSumOfHoods = (initialNumber, expansion1989, expansion2019) => (initialNumber) + (expansion1989 === undefined ? 89 : expansion1989) + (expansion2019 === undefined ? 19 : expansion2019);

export default getSumOfHoods;
