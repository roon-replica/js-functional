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

function findFirst(users,predicate){
    for(const user of users){
        if(predicate(user)) return user;
    }
    return null;
}

console.log(findFirst(users,user=>user.id<5));


// ================================================================= //

// function findById(users, id){...}
// function findByName(users,name){...}
// function findByAge(users,age){...}

// 리팩토링 #1 : 위 3개의 메서드를 하나로 합침!
function find(users,key,value){
    for(const user of users){
        if(user[key] == value) return user;
    }
    return null;
}

// 리팩토링 #2
// 값을 넘겨주는 것이 아닌 동작을 넘겨주도록..
// 들어온 데이터가 무엇이든 자기의 할 일을 하는 거라고 함..
// 람다식으로 넘겨진 보조함수에 처리를 위임하는..
function findFunctional(users, predicate){
    for(const user of users){
        if(predicate(user)) return user;
    }
    return null;
}

// console.log(findFunctional(users,user=>user.name =='park'));
// console.log(findFunctional(users,user=>user.id<5));

// ================================================================= //

// 리팩토링 #3
function match(key, value){
    return function(object){
        return object[key] == value;
    }
}

// console.log(findFunctional(users,match('name','park')));
// console.log(findFunctional(users,match('id',6)));


// 리팩토링 #4