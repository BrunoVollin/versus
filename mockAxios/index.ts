import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default async function getalgumacoisa() {
  const response = await api.get("/posts/1").then((res) => res.data.id);
  return response;
}

// async function main() {
//     const response = await getalgumacoisa();
//     console.log(response);
// }
// main()
