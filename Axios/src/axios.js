import axios from "axios";
export default function fetchUserData() {

    axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
            const axiosDiv = document.getElementById('axios');
            axiosDiv.innerHTML = `
          
                  <div>User Id: ${response.data.id}</div>
                  <div>User Email: ${response.data.email}</div>
                  <div>User Name: ${response.data.name}</div>
                  <pre>${JSON.stringify(response.data, null, 4)}</pre>
                 `
            console.log(response.data)
        })
        .catch(function (error) {
            document.getElementById('axios').innerText = "Error fetching data";
            console.error(error);
        });
    //   return(
    //     <div>{response.data.id}</div>
    //   )
}
