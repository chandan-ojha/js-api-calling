// add jquery libraray cdn
// ajax - asynchronous javascript and xml

console.clear();
//console.log(window);

const makeRequest = async (url,method,data) => {
  try{
      const result = await $.ajax({
          url : url,
          method: method,
          data: data,
      });
      //console.log(result);
      return result;
  } catch(err) {
     console.log(err);
  }
}

//get data
/*const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts","GET")
        .then((res) => console.log(res))
}

getData();*/

//create data
/*const createData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts","POST",{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
        .then((res) => console.log(res))
}

createData();*/

//update data
/*const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","PUT",{
        id: 1,
        title: 'foo update',
        body: 'bar update',
        userId: 1,
    })
        .then((res) => console.log(res))
}

updateData();*/

//delete data
const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","DELETE",)
        .then((res) => console.log(res))
}

deleteData();