const postData = async ( url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',  // GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', //include, *same-origin, omit
        headers: {
            'Content-Type': 'application/ json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error){
        console.log("error", error);
    }
}

postData('/addMovie', {movie: ' the matrix', score: 5});