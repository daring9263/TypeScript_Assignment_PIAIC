/* Cities: Write a function called describe_city() that accepts the 
name of a city and its country. The function should print a simple 
sentence, such as Karachi is in Pakistan. Give the parameter for 
the country a default value. Call your function for three different 
cities, at least one of which is not in the default country. */

function describe_city(cityName : string, CountryName = "Pakistan") {
    console.log(`${cityName} is in ${CountryName}.`);
}

describe_city("Islamabad");
describe_city("Rawalpindi");

describe_city("New York", "USA");