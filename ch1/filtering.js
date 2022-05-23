const users = [
    {id: 1, name: 'leemr', age: 36},
    {id: 2, name: 'kim', age: 36},
    {id: 3, name: 'park', age: 36},
    {id: 4, name: 'park', age: 36},
    {id: 5, name: 'park', age: 36},
    {id: 6, name: 'park', age: 36},
    {id: 7, name: 'park', age: 36},
    {id: 8, name: 'park', age: 36},
    {id: 9, name: 'park', age: 36}
];

function filterNonFunctional(users){
    const tempUsers = [];
    for(const user of users) {
        if(user.id < 6) tempUsers.push(user);
    }

    const ages = [];
    for(const user of tempUsers) {
        ages.push(user.id);
    }

    console.log(ages);
}

function filterFunctional(users, predicate){
    const tempUsers = [];
    for(const user of users) {
        if(predicate(user)) tempUsers.push(user);
    }

    console.log(tempUsers);
}

filterNonFunctional(users);

// 함수형 프로그래밍에서는 항상 동일하게 동작하는 함수를 만들고, 보조 함수를 조합하는 방식으로 로직을 완성...
// 객체지향과 함수형의 차이는 기능 확장을 객체의 확장으로 할 지 vs 함수의 확장?으로 할지의 차이라고 함...(잘 이해 안 됨)/
filterFunctional(users,user=>user.id <7);





