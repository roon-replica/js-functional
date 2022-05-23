// refactoring: 중복을 제거하고 의도를 드러내는 것이 핵심이라고 함..

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

function map(users, mapping){
    const ret = [];
    for(const user of users){
        ret.push(mapping(user));
    }

    console.log(ret);
    return ret;
}

function filterFunctional(users, predicate){
    const tempUsers = [];
    for(const user of users) {
        if(predicate(user)) tempUsers.push(user);
    }

    console.log(tempUsers);
    return tempUsers;
}


// 단순해진 코드
map(users,user=> user.name);

const res = map(
    filterFunctional(users,user=> user.id < 5),
    user=>user.name
);

console.log(res);

