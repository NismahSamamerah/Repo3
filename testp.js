// let studetns  =[];

// function fetchData(){
//     return new Promise((res , rej) =>{
//         let error = false ;
//         setTimeout(() =>{
//             if (error){
//                 rej('smth error')
//             }else{
//                 res([
//                     {
//                         name: 'name1',
//                         age: 19,
//                         },
//                         {
//                         name: 'name2',
//                         age: 20,
//                         }
//                 ])
//             }
//         } ,2000)
//     })}

    // function print(){
    //     for(const student of studetns){
    //         console.log(student.name);
    //         console.log(student.age);

    //     }
    // }

    //     fetchData().then((response) =>{
//     studetns = response;
//     print();
// }).catch((error) =>{
//     console.log(error);
// })


//     async function bootstrap(){
//         try{
//         let students = await fetchData();
//         for (const student of students){
//             console.log(student.name);
//             console.log(student.age);
//         }
//     }catch(err){
// console.log('error');
//     }
        
//     }
   // bootstrap();

    let users = [];
    let posts = [];

    function fetchUser(){
        return new Promise((resUser ,rejUser) =>{
            setTimeout(() =>{
                resUser ([
                    {
                                        id : 1 ,
                                        name :'nimah',
                                        userName : 'Ni99'
                        
                                    },
                                    {
                                        id : 2 ,
                                        name :'aya',
                                        userName : 'A123'
                        
                                    }
                ])
            },2000)
        })
    }


    function fetchPost(){
        return new Promise ((resPost , rejPoset) =>{
            resPost([
                {
                                    id: 1,
                                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                                },
                                {
                                    id: 2,
                                    title: "qui est esse",
                                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                                }
            ])

        })
    }

    // fetchUser().then((responsUser) =>{
    //     responsUser = users;
    //     fetchPost().then((responsePost) =>{
    //         responsePost = posts;
    //         for(const user of users){
    //             let postNumber = 1;
    //             for(const post of posts){
    //                 if(user.id === post.id){
    //                     console.log(`${postNumber} :${post.title}`);
    //                     postNumber++;                       
    //                 }
    //             }


    //         }
    //     });
    // })


    ///by async await
    async function bootstrap(){
        try{
      let users =   await fetchUser();
      let posts = await fetchPost();
      for(const user of users){
          let postNumber = 1;
          for(const post of posts ){
              if(post.id === user.id){
                  console.log(`${postNumber} :${post.title}`);
                  postNumber++;
              }
          }
      }
    
    }catch(err){
        console.log('error');

    }}
    bootstrap();