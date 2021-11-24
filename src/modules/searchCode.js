import ajaxService from "./ajaxServer";
import storeSearch from "./storeSearch";
const searchCode = () => {
  // document.querySelector('form').addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     const searchTerm = document.querySelector('.term').value;
  //     let searchResponse;
  //     const input = document.querySelector('.term');
  //     console.log(input);

  //     ajaxService(searchTerm)
  //         .then(result => searchResponse = result)
  //         .then(() => console.log(searchResponse))
  //         .then(() => {
  //             if (searchResponse.total === 1) {
  //                 document.querySelector('.result').value = searchResponse.data[0].post_code
  //                 storeSearch(searchResponse.data[0].post_code, searchResponse.data[0])
  //             } else {
  //                 document.querySelector('main').innerHTML += "<p>Klaida</p>"
  //             }
  //             //.then(result =>document.querySelector('.result').value=result.data[0].post_code)
  //         })
  // })
  let searchResponse;
  const input = document.querySelector(".term");

  let timeoutId;
  const onInput = (event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      ajaxService(event.target.value)
        .then((result) => (searchResponse = result))
        .then(() => console.log("search respons", searchResponse.data))
        .then(() => {
          if (searchResponse.total >= 1) {
            const addressList = searchResponse.data;
            if (addressList.length > 1) {
              for (let address of addressList) {
                // const li = document.createElement('li');
                // li.className="list-group-item";
                // li.innerText = `${address.address},${address.city}                             `
                // document.querySelector('.dropdown-content').appendChild(li);
                const option = document.createElement("option");
                option.value = `${address.address} ${address.city} `;
                document.querySelector("#datalistOptions").appendChild(option);
              }
            } else {
              document.querySelector(".result").value =
                searchResponse.data[0].post_code;
              storeSearch(
                searchResponse.data[0].post_code,
                searchResponse.data[0]
              );
            }
          } else {
            document.querySelector("main").innerHTML += "<p>Klaida</p>";
          }
          //.then(result =>document.querySelector('.result').value=result.data[0].post_code)
        });
    }, 1000);
  };

  input.addEventListener("input", onInput);
};
export default searchCode;
