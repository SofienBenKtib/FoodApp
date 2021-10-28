import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../colors/Colors";
import Categories from "../data/Categories";
import Popular from "../data/Popular";

const Home = () => {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemText}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected
                ? colors.background
                : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.background}
          />
        </View>
      </View>
    );
  };
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
          <TextInput style={styles.searchText}>Search...</TextInput>
        </View>
      </View>
      {/********  Categories  ********/}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.categoriesList}>
          <FlatList
            data={Categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>
      {/********  Popular  ********/}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularText}>Popular</Text>
        {Popular.map((item) => (
          <View>
            <Text>heyy</Text>
          </View>
        ))}
      </View>
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
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 20,
    color: colors.textDark,
  },
  categoriesList: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: "#F5CA48",
    marginRight: 20,
    borderRadius: 20,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 35,
    height: 35,
    borderRadius: 35,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
  },
});
