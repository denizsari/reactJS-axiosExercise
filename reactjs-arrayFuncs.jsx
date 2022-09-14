// const users = [
//   {
//     name: 'Deniz Sarı',
//     gender: 'Erkek',
//     age: 23,
//   },
//   {
//     name: 'Canberk Olgun',
//     gender: 'Erkek',
//     age: 23,
//   },
//   {
//     name: 'Dilek Özsarı',
//     gender: 'Kadın',
//     age: 43,
//   },
// ];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// push
// push(); fonskiyonu ile varolan bir arraye obje veya direk array bir veri eklenebilir.
// users.push({ name: 'Yeliz Özsarı', gender: 'Kadın' });
// console.log(users);

// map
// map fonskiyonu jsde ki for-foreach gibi listenin içerisinde ki tüm verileri döner ve bu verileri size getirir.
// users.map((item) => {
//   console.log(item.name, item.gender);
// });

// find
// var olan array içerisinde aradığınız veriyi döner ve bulduğu bu veriyi size sunar eğer 2 veri talep ederseniz ilk veriyi bulduğu anda sizlere sunar ve işlem durur.
// const findIt = users.find((item) => item.name === 'Deniz Sarı' && item.gender === 'Erkek');
// console.log(findIt);

// filter
// filter fonskiyonu ile varolan bir arraye filtreleme yaparak aradığınız verinin var olup olmadını kontrol edebilirsiniz.
// const newArr = [
//   {
//     name: 'Deniz Sarı',
//     gender: 'Erkek',
//     city: 'Ankara',
//   },
//   {
//     name: 'Ahmet Kara',
//     gender: 'Erkek',
//     city: 'Ankara',
//   },
//   {
//     name: 'Fadime Hatun',
//     gender: 'Kadın',
//     city: 'İstanbul',
//   },
//   {
//     name: 'Faruk Özgenç',
//     gender: 'Erkek',
//     city: 'İstanbul',
//   },
//   {
//     name: 'Dilek Özsarı',
//     gender: 'Kadın',
//     city: 'Ankara',
//   },
//   {
//     name: 'Yeliz Özsarı',
//     gender: 'Kadın',
//     city: 'Ankara',
//   },
// ];

// const filtered = newArr.filter(({ city, gender }) => city === 'Ankara' && gender === 'Kadın');
// console.log(filtered);

// some
// some funksiyonu ile var olan diziniz ile aradığınız veriyi karşılaştırıp var olup olmamasına göre true ve false döner.
// const some = users.some((item) => item.age < 23);
// console.log(some);

// every
// const every = users.every((item) => item.age > 5);
// console.log(every);

// includes
// bir dizi içerisinde aradığınız verinin olup olmadını kontrol eder ve size true,false olarak döner.
// const meyveler = ['elma', 'armut', 'muz'];

// const isIncluded = meyveler.includes('muz');
// console.log(isIncluded);
