import { Text } from "react-native";
import { getAllUser } from "../services/userService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const fetchAllUser = async () => {
    try {
      const res = await getAllUser();
      dispatch(setUsers(res.data));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <>
      <Text>Home</Text>
    </>
  );
};
export default Home;
