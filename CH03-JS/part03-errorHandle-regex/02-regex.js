console.log("02-regex");

// regex là gì ?
//      Regex hay regular expression | pattern | Biểu thức chính quy
//      mẫu định dạng cho các chuỗi
//      hơi giống like trong SQL
//  Regex là một object
//  mình dùng method .test() | thay vì matches() trong java

let regex1 = /name/;
console.log(regex1.test("N is my name"));
// i : ignore case : trong java thì là ? ở đâu
 regex1 = /name/i;
console.log(regex1.test("N is my Name"));
// một vài method xài cùng regex
console.log(regex1.exec("N is my Name"));//['Name', index: 8, input: 'T is my Name', groups: undefined]
console.log("N is my Name".match(regex1));//['Name', index: 8, input: 'T is my Name', groups: undefined]
console.log("N is my Name".search(regex1));//8
// replace
``
// II- Regex metcharacter symbols : những kí hiệu thay thế
// nên test ở trang regex.com


//  $ ==> tìm ở cuối : ví dụ : xin chào hello
// regex : /hello$/

// tóm lại : bắt đầu chuỗi ^ChóTân
//           kêt thúc chuỗi ChóTân$
// trong chuối chỉ có chuỗi : ^ChóTân$

// . : một ký tự bất kỳ ngoài trừ enter
// nhưng nó phải có chứ ko đc rỗng

// dấu * lặp lại từ 0 --> n
// dấu + từ 1 --> n
// dấu ? lặp lại từ 0 --> 1
// {start,end} : từ start đên end lần
// [] hoặc \ để thoát chuỗi (escape character)

// Ví dụ
// mey
// meey
// meeeeey
// meeeeeeeeeeeeeeeeeeeeeeeeey


// III. Regex Character sets và Quantifiers
// character set [....]
// expect character set[^...]
// set digit [0-9]
// set alpha [A-Z] [a-z] [a-zA-z]
// gom nhóm () và hoăc |

// short Hand
// muốn chữ và số \w          \W
// muốn số        \d          \D
// muốn space     \s          \S

//  lấy chữ a kế bên chữ n
// ==> a(?=n)
// xin chao moi nguoi , ban da an banh cua ban an chua

// a(?=n) tìm a mà kế bên là n
// a(?!n) tìm a mà kế bên không là n


// ký tự biên \b
// ký tự biên là gì ? và nằm ở đâu trong câu
// ký tự biên nằm giữa cấu trúc
//              ký tự từ  + ký tự biên + không phải ký tự từ
//              không phải ký tự từ + ký tự biên + không phải ký tự từ 



// new word
// words in my letter
// sword in my hand
// the 'word' is shiet
// \bword\b
// tìm từ word và mỗi từ word

// ôn boostrap : coi kĩ phấn form

// HOF : callback currying : closureư

