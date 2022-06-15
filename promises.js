// //example 1
// let users = [];
// async function fetchData() {
//     return new Promise((res, rej) => {
//         const error = false;
        
        
//         setTimeout(() => {
//             if (error) {
//                 rej("something want wrong");
//             } else {
//                 res
//                 ([
//                     {
//                         name: 'name1',
//                         age: 19,
//                     },
//                     {
//                         name: 'name2',
//                         age: 20,
//                     }
//                 ])
//             }
//     }, 2000);
//     });
// }


// function print(users) {
//     for (const user of users) {
//         console.log(user.name);
//         //console.log(user.age);

//     }
// }


// console.log('before fetchData')

// fetchData().then((response) =>{
//     users = response;
//     print();
// }).catch((error) =>{
//     console.log(error);
// })


// async function bootstrap(){
//     try{
//     const users = await fetchData();
//     console.log(users);
//     }catch(e){
//         console.log('error');
//     }
// }
// bootstrap();


// console.log('after fetchData')

//elzero//
// const mypromise =new Promise((resolve ,reject)=>{
//         let connect = true;
//         if(connect){
//             resolve('done'); 
//         }else{
//             reject('fail');
//         }

// });
// mypromise.then(
//     resolve =>console.log(resolve),
//     reject =>console.log(reject)
// )

//example 2
// ///////////////me????????????????/////////////////////
// function fetchData(){
//     return new Promise ( (res ,rej) =>{

//         setTimeout(() => {
//         [ 
//             {
//                 id : 1 ,
//                 name :'nimah',
//                 userName : 'Ni99'

//             },
//             {
//                 id : 2 ,
//                 name :'aya',
//                 userName : 'A123'

//             }
//         ]
        

//     },2000)
// }
//     )
// }

// function fetchPosts(){
//     return new Promise ( (respost ,rejpost) =>{

//         setTimeout(() =>{
//          [ 
//             {
//                 id: 1,
//                 title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                 body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//             },
//             {
//                 id: 2,
//                 title: "qui est esse",
//                 body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//             }
//         ]
        

//     },2000)
// }
//     )
// }

// fetchData().then((userResponse) => {
//     const users = userResponse;
//     fetchPosts().then((postsResponse) => {
//         const posts = postsResponse;
//         for (const user of users) {
//             let i  = 1;
//             for (const post of posts) {
//                 if (post.id === user.id) {
//                     console.log(`${i} : ${post.title}`);
//                     i++;
//                 }
//             }
//             console.log('==================================');
//         }
//     });
// })
///////////////////he???????????????/////////////////////

// function print(){
//     for (const user of users) {
//         let i = 1;
//         for (const post of posts) {
//             if (post.userId === user.id) {
//                 console.log(`${postNumber} : ${post.title}`);
//                 postNumber++;
//             }
//         }
//         console.log('==================================');
//     }
// }
// fetchData().then((userResponse) => {
//     let users = userResponse;
//     fetchPosts().then((postsResponse) =>{
//         let posts = postsResponse;
//         print();
//     }
//     )

// })




////////////////

function fetchUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    id: 1,
                    name: 'ali'
                },
                {
                    id: 2,
                    name: 'nismah',
                }
            ])
        }, 2000);
    });
}

function fetchPosts() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    userId: 1,
                    title: 'ali post'
                },
                {
                    userId: 1,
                    title: 'qui est esse'
                },
                {
                    userId: 2,
                    title: 'nismah  post 1'
                },
                {
                    userId: 2,
                    title: 'nismah post 2'
                }
            ])
        }, 2000);
    });
}

fetchUsers().then((userResponse) => {
    const users = userResponse;
    fetchPosts().then((postsResponse) => {
        const posts = postsResponse;
        for (const user of users) {
            let postNumber = 1;
            for (const post of posts) {
                if (post.userId === user.id) {
                    console.log(`${postNumber} :${post.title}`);
                    postNumber++;
                }
            }
            console.log('==================================');
        }
    });
})

