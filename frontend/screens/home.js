import { FlatList, Text, View } from "react-native";
import { getAllUser } from "../services/userService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
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

  const renderItem = ({ item }) => {
    return (
      <>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "red",
            margin: 10,
          }}
        >
          <Text>{item.name}</Text>
        </View>
      </>
    );
  };
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <FlatList
          data={users}
          renderItem={renderItem}
          // showsHorizontalScrollIndicator
          // horizontal
          numColumns={3}
        />
      </View>
    </>
  );
};
export default Home;
