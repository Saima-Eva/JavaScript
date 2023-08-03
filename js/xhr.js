console.clear();

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()



/* const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
    
    xhr.onload = () => {
        let data = xhr.response;
        console.log(JSON.parse(data))
    }
    xhr.onerror = () => {
        console.log('error is here');
    }
    xhr.send();

}

getData(); */



const makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('content-Type', 'application/json');
    
    xhr.onload = () => {
        let data = xhr.response;
        console.log(JSON.parse(data))
    }
    xhr.onerror = () => {
        console.log('error is here');
    }
    xhr.send(JSON.stringify(data));

}

const getData = () => {
     makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}
const sendData = () => {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
     });
}
const updateData = () => {
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'fooMa',
        body: 'barMa',
        userId: 1,
});

}

const updateSingleData = () => {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        
        title: 'This is Change',
});

}

const deleteData = () => {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1');

}
 deleteData();