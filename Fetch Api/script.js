// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

//fetch() has replaced XMLHttpRequest
//fetch() global method for making HTTP Request
//2 Ways to call - then, async await

//+ fetch is easy to use compare  to XMLHttpRequest
//+ fetch() returns a promise
//- returned promise can only handle network error
//_ does not support all the older browser

console.clear();

//get data
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        if(!res.ok){
            const message = `${res.status}`
            throw new Error(message)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//send data
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
  })
    .then((res) => {
        if(!res.ok){
            const message = `${res.status}`
            throw new Error(message)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//update data
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body : JSON.stringify({
        id: 1,
        title: 'foo updated',
        body: 'bar updated',
        userId: 1,
    }),
})
    .then((res) => {
        if(!res.ok){
            const message = `${res.status}`
            throw new Error(message)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//update single data
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body : JSON.stringify({
        title: 'foo updated by chandan',
    }),
})
    .then((res) => {
        if(!res.ok){
            const message = `${res.status}`
            throw new Error(message)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//delete data
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'DELETE',
})
    .then((res) => {
        if(!res.ok){
            const message = `${res.status}`
            throw new Error(message)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
