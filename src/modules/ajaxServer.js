const ajaxService = (term) =>{
    const url = "https://api.postit.lt/?term="
    const key = "D3o4WwvUMNZwmu5r1w1s";
    return fetch(`${url}${term}&key=${key}`)
    .then(response => response.json());
}

export default ajaxService