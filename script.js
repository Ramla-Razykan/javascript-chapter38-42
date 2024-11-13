// ======================Question1: Write a custom function power ( a, b ), to calculate the value of a raised to b.
// function power(a, b) {
//     let result = 1;
//     switch (true) {
//         case b === 0:
//             result = 1;
//             break;
        
//         case b > 0:
//             let count = 0;
//             while (count < b) {
//                 result *= a;
//                 count++;
//             }
//             break;

//         case b < 0:
//             let absCount = 0;
//             while (absCount < Math.abs(b)) {
//                 result *= a;
//                 absCount++;
//             }
//             result = 1 / result;
//             break;
//     }return result;
// }
// console.log(power(2, 3)); // 8

// ======================Question2: Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.  
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(1900)); // false

// ======================Question3:  If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2.  //.. Calculate area of triangle using 2 functions 
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     const S = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// const a = 5, b = 6, c = 7;
// console.log("Area of triangle:", calculateArea(a, b, c));

// ======================Question4:  Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 
// function calculateAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3;
// }
// function calculatePercentage(mark1, mark2, mark3) {
//     const totalMarks = mark1 + mark2 + mark3;
//     const maxMarks = 300;
//     return (totalMarks / maxMarks) * 100;
// }
// function mainFunction(mark1, mark2, mark3) {
//     const average = calculateAverage(mark1, mark2, mark3);
//     const percentage = calculatePercentage(mark1, mark2, mark3);
    
//     console.log("Average Marks:", average);
//     console.log("Percentage:", percentage + "%");
// }
// mainFunction(85, 90, 80);

// ======================Question5: You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now. 
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(customIndexOf("hello", "e")); // Output: 1

// ======================Question6: Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long
// function removeVowels(sentence) {
//     let result = '';
//     const vowels = "aeiouAEIOU";
    
//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }return result;
// }
// console.log(removeVowels("Hello World"));      // Output: "Hll Wrld"

// ======================Question7: Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence 
// function countSuccessiveVowels(text) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";

//     for (let i = 0; i < text.length - 1; i++) {
//         const currentChar = text[i];
//         const nextChar = text[i + 1];
        
//         switch (true) {
//             case vowels.includes(currentChar) && vowels.includes(nextChar):
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }return count;
// }
// console.log(countSuccessiveVowels("I see you soon"));       // Output: 3

// ======================Question8: The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
// function convertToMeters(distanceKm) {
//     return distanceKm * 1000;
// }
// function convertToFeet(distanceKm) {
//     return distanceKm * 3280.84;
// }
// function convertToInches(distanceKm) {
//     return distanceKm * 39370.1;
// }
// function convertToCentimeters(distanceKm) {
//     return distanceKm * 100000;
// }
// function printConversions(distanceKm) {
//     console.log("Distance in kilometers:", distanceKm);
//     console.log("Distance in meters:", convertToMeters(distanceKm));
//     console.log("Distance in feet:", convertToFeet(distanceKm));
//     console.log("Distance in inches:", convertToInches(distanceKm));
//     console.log("Distance in centimeters:", convertToCentimeters(distanceKm));
// }
// const distanceKm = 5;
// printConversions(distanceKm);

// ======================Question9: Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;
//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
//     }
// }
// function mainFunction(hoursWorked) {
//     const overtimePay = calculateOvertimePay(hoursWorked);
//     console.log("Total hours worked:", hoursWorked);
//     console.log("Overtime pay:", overtimePay > 0 ? `Rs. ${overtimePay}` : "No overtime pay");
// }
// const hoursWorked = 45;
// mainFunction(hoursWorked);

// ======================Question10: A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer
// function calculateCurrencyNotes(amount) {
//     const totalAmount = amount * 100;

//     let count100 = 0, count50 = 0, count10 = 0;

//     count100 = Math.floor(totalAmount / 100);
//     totalAmount -= count100 * 100;

//     count50 = Math.floor(totalAmount / 50);
//     totalAmount -= count50 * 50;

//     count10 = Math.floor(totalAmount / 10);

//     console.log("Number of 100 denomination notes:", count100);
//     console.log("Number of 50 denomination notes:", count50);
//     console.log("Number of 10 denomination notes:", count10);
// }
// function mainFunction(amount) {
//     calculateCurrencyNotes(amount);
// }
// const amount = 17;
// mainFunction(amount);