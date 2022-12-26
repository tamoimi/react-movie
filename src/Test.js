const Test = () => {
  const introduction = ["my", "name", "is", "Tami", "Kim"];
  const copyArr = [...introduction];
  console.log(copyArr);
  console.log(...copyArr);
};
export default Test;

// map and filter
// const DATA = [
//     { id: 1, title: "first" },
//     { id: 2, title: "second" },
//     { id: 3, title: "third" },
//     { id: 4, title: "fourth" },
//   ];
//   const upperData = DATA.map((el) => el.title.toUpperCase());
//   console.table(upperData)

//   const moduleData = DATA.filter(el => el.id % 2 === 0)
//   console.table(moduleData)

//----------------------------------------------------------------

// slice and splice
// const charactersArr = [
//     'Witcher',
//     'Harry Potter',
//     'Luke Sykwalker',
//     'Tony Stark',
// ]
// const copyArr = [...charactersArr]
// 인덱스 0부터 요소 한 개를 제거
// copyArr.splice(0,1);
// console.log(copyArr);

//----------------------------------------------------------------

// concat
// const arr1 = [1, 2, 3, 4];
// const arr2 = [10, 20, 30, 40];
// const arr3 = [100, 200, 300, 400];

// const mergedArr = arr1.concat(arr2, arr3);
// console.log(mergedArr);

//----------------------------------------------------------------

//find and findIndex
//   const DATA = [
//     { id: 1, title: "first" },
//     { id: 2, title: "second" },
//     { id: 3, title: "third" },
//     { id: 4, title: "fourth" },
//   ];
//   const itemIdx = DATA.findIndex((el) => el.id === 2);
//   console.log(itemIdx);

//   const item = DATA.find((el) => el.id === 2);
//   console.log(item);

//----------------------------------------------------------------

//destructuring
// const name = ['Tami', 'Kim']
// const [firstName, lastName] = name
// console.log(firstName, lastName);

// const jedi = {
//     id: 1,
//     name: "Tami Kim",
//     lightsaber: true,
//     species: "Human"
// }
// const {name: jediName, species, ...rest} = jedi
// console.log(jediName);
// console.group(species)
