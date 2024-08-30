// hàm kiểm tra số nguyên dương
const isNumber = (n) => {
    if (n > 0) {
        return 1;
    }
    return 0;
}
// hàm kiểm tra có phải ước chung số n ko 
const isDivisor = (n, i) => {
    return n % i === 0;
}
// Viết hàm nhận vào số nguyên dương n và return lại một mảng các ước số của nó
// yêu cầu người dùng nhập vào số nguyên

const handle1 = (n) => {
    if (isNumber(n)) {
        let array = [];
        for (let i = 1; i <= n; i++) {
            if (isDivisor(n, i)) {
                array.push(i);
            }
        }
        return array;
    }
}
console.log(handle1(10));

// Viết hàm nhận vào số nguyên dương n và return lại tổng tất cả ước số nguyên dương của nó
const handle2 = (n) => {
    if (isNumber(n)) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            if (isDivisor(n, i)) {
                sum += i;
            }
        }
        return sum;
    }
}
console.log(handle2(10));
// 3. Viết hàm kiểm tra số nguyên dương n có phải số nguyên tố hay không
const isPrime = (n) => {
    for (let i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            return 0;
        }
    }
    return n >= 2;
}
console.log(isPrime(7));
// Câu 4 : Viết hàm tính tổng các chữ số của số nguyên dương n
const sumNumElement = (n) => {
    let sum = 0;
    while (n != 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
        // làm tròn
    }
    return sum;
}
console.log(sumNumElement(1234));
// Câu 5 :Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày.
// Biết rằng năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100.

const checkMonthYear = (m,y) => {
    let day = 0 ;
    switch (m) {
        case 1:
            return day = 31 ;
            break;
        case 2:
            if(y  % 400 == 0 || y % 4 == 0 && y % 100 != 0 ){
                return day = 29;
            }
            return 28 ;
            break;
        case 3:
            return day = 31 ;
            break;
        case 4:
            return day = 30 ;
            break;
        case 5:
            return day = 31 ;
            break;
        case 6:
            return day = 30 ;
            break; 
        case 7:
            return day = 31 ;
            break;
        case 8:
            return day = 31 ;
            break;
        case 9:
            return day = 30 ;
            break; 
        case 10:
            return day = 31 ;
            break;
        case 11:
            return day = 30 ;
            break;
        case 12:
            return day = 31 ;
            break;
        default:
            console.log("Nhập đúng đi tk ngu");
            break;
    }
    return day ;
}
console.log(checkMonthYear(2024,2));
console.log(checkMonthYear(2,2024));
console.log(checkMonthYear(7,2004));
// Viết hàm in bảng cửu chương ra màn hình
const elementBoard = () =>{
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log( i + "x" + j +"=" + i*j);
        }
    }
}
console.log(elementBoard());
// Tìm số fibonacci thứ n. Cụ thể, các số đầu tiên của dãy Fibonacci là 1, 1, 2, 3, 5, 8, 13...
const fibonacci = (n) =>{
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2 );
}
console.log(fibonacci(6));
// Tính tổng n số fibonacci đầu tiên
const sumFibonacci = (n) =>{
    let sum = 0 ; 
    for (let i = 1; i <= n - 1; i++) {
        sum += fibonacci(i);
    }
    return sum ;
}
console.log(sumFibonacci(6));



