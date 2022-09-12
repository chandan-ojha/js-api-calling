/* What is Axios ? */
//axios is a js library
//it helps to make request from browser (plain.js, vue, react, angular, node.js)

/* Axios Benefit */

//+ very easy to use
//+ it supports all modern browser including IE
//+ it returns promise
//+ throws error brilliantly
//+ No need to set header cause axios is intelligent

/* Axios Learning */

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config

console.clear();
//console.log(window);

//get data
/* axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err)); */

//send data
/* axios
    .post("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err)); */

//update data
/*axios
    .put("https://jsonplaceholder.typicode.com/posts/1",{
        //method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo updated',
            body: 'bar updated',
            userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));*/

//update single data
/*axios
    .patch("https://jsonplaceholder.typicode.com/posts/1",{
        body: JSON.stringify({
            title: 'foo updated by chandan',
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));*/

//delete data
/* axios
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err)); */


/** Axios Using by async await **/

const makeRequest = async (config) => {
   return await axios(config);
};

//get data
/*const getData = () => {
   makeRequest("https://jsonplaceholder.typicode.com/posts")
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err))
};

getData();*/

//create data
/*const createData = () => {
   makeRequest({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'post',
      data: JSON.stringify({
         title: 'foo',
         body: 'bar',
         userId: 1,
      }),
   })
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err))
}

createData();*/

//update data
/*const updateData = () => {
   makeRequest({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'put',
      data: JSON.stringify({
         id: 1,
         title: 'foo updated',
         body: 'bar',
         userId: 1,
      }),
   })
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err))
}

updateData();*/

//delete data
const deleteData = () => {
   makeRequest({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'delete'
   })
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err))
}
deleteData();

