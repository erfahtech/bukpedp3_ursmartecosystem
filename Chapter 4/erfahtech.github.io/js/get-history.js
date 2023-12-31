import { URLGetDevice, responseData } from "./gettablehistory.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

document.addEventListener("DOMContentLoaded", function () {
  const getTable = (target_url, responseFunction) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getCookie("token"));

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(target_url, requestOptions)
      .then((response) => response.text())
      .then((result) => responseFunction(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  };

  getTable(URLGetDevice, responseData);
});
