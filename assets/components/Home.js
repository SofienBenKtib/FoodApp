import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../colors/Colors";
import Categories from "../data/Categories";
import Popular from "../data/Popular";

const Home = () => {
  return (
    <View style={styles.container}>
      {/********  Header  ********/}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require("../images/sofien.png")}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
      {/********  Titles  ********/}
      <View style={styles.titlesWrapper}>
        <Text style={styles.subtitle}>Food</Text>
        <Text style={styles.title}>Delivery</Text>
      </View>
      {/********  Search  ********/}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search...</Text>
        </View>
      </View>
      {/********  Categories  ********/}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerWrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textDark,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.textLght,
  },
  searchText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: colors.textLght,
  },
});
