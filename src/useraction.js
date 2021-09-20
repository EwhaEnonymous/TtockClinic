import axios from "axios";

export function papers(dataTosubmit) {
  console.log("data to submit: ", { dataTosubmit });
  const request = axios
    .post("/v1/papers", dataTosubmit)
    .then((response) => console.log(response.data))
    .catch((response) => {
      console.log("Error!");
    });
  return {
    payload: request,
  };
}
