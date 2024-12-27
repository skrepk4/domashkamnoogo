document.addEventListener("DOMContentLoaded", () => {
    const nums = [1, 2, 3];
    nums[1] = 10;
    console.log("Масив після зміни другого елемента:", nums);

    const strings = ["перший", "другий", "третій"];
    strings.push("четвертий");
    console.log("Масив після додавання рядка:", strings);

    const numbersToSum = [1, 2, 3, 4, 5];
    const sum = numbersToSum.reduce((acc, num) => acc + num, 0);
    console.log("Сума всіх чисел в масиві:", sum);

    const numbers = [10, 20, 30, 40, 50];
    console.log("Елементи масиву:");
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    const stringArray = ["1234", "12345", "1234561", "12345671", "123"];
    console.log("Рядки довші за 5 символів:");
    for (const str of stringArray) {
        if (str.length > 5) {
            console.log(str);
        }
    }

    const largeNumbers = [21, 3, 22, 5, 58, 4, 95, 13, 1, 9];
    const maxNumber = Math.max(...largeNumbers);
    console.log("Максимальне значення в масиві:", maxNumber);

    const evenNumbers = largeNumbers.filter(num => num % 2 === 0);
    console.log("Парні числа в масиві:", evenNumbers);
});