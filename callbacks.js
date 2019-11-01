// Callbacks, Promises, Async and Await work


//Here we have an array of objects. 
const myPosts = [
    // key value pair 1. //key value pair 2
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post Two', body: 'This is post two body'}
    ];

// console.log (myPosts[1].body) // this console.log will return the body of the second object in the array

//this will only run after 1 second as we have a setTimeout
function getPosts(){
    setTimeout(()=> {    myPosts.forEach((post) => {
        console.log (post.title);
            });
    }, 1000);
}
/*// this creates a new post and pushes it into the myPosts array. It will only run after 5 seconds. therefore it will not show in this createPost call before
function createPost(post){
    setTimeout(() => { 
        myPosts.push(post);
    }, 5000);

}

createPost({title: 'Post Three', body: 'This is post three body'});
getPosts();


// to get it to show this 5 second later create post you need to add a callback or higher level function. 
function createPost(post, callback){
    setTimeout(() => { 
        myPosts.push(post);
        //runs getPosts
        callback()
    }, 5000);

}
createPost({title: 'Post Three', body: 'This is post three body'}, getPosts);
getPosts();
*/
// Promises

function createPost(post){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => { 
            myPosts.push(post);
    // fictional - imagine we are connecting to a database and simulating an error 
            const error = false ;
            // ! = opposite. So this is saying if there are no errors 
            if(!error) {
                resolve()
            } else {
                reject ("Something went wrong");
            }
        }, 5000);
    });
    

}
createPost({title: 'Post Three', body: 'This is post three body'})
//.then is always for resolve
.then(getPosts)
// .catch is always for an error
.catch((error)=>{
 console.log (error);
})

//async tells the code to be asyncronous and run these functions one after the other
async function init(){
    try{
    //tells javascript to wait for the createPost functions to run before continuing and calling getPosts
   await createPost({title: 'Post Three', body: 'This is post three body'});
    getPosts();
    }
    catch(error){
        console.log(error)
    }
}
init();

