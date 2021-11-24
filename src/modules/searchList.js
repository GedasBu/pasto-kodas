const searchList = () => {
    document.querySelector('.history').addEventListener('click', () => {
     console.log(localStorage)
        for(let key in localStorage){
           console.log('key',localStorage.getItem(key));
            if (localStorage.getItem(key) !==null){
let result = JSON.parse(localStorage.getItem(key))
        // console.log(result);
        let li = document.createElement('li');
        li.className ="List-goup-item";
        li.textContent = `Adresas: ${result.address}. Pasto kodas: ${result.post_code}`
        document.querySelector('ul').appendChild(li)

            }
        
    }
})

}
export default searchList