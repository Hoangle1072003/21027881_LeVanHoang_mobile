import axios from "axios";
let getAllUser = async () => {
  try {
    const res = await axios.get("http://localhost:3000/get-all-users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export { getAllUser };
