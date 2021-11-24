const clearHistory = () => {
    document.querySelector('#clearHistory').addEventListener('click', () => {        
        document.querySelector('.List-group').remove();
        let ul = document.createElement('ul');
        ul.className = "List-group";
        document.querySelector('section .card-body').appendChild(ul);
        localStorage.clear();
    })

}

export default clearHistory;