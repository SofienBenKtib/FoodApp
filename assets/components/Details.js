import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import colors from "../colors/Colors";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Details = ({ route, navigation }) => {
  const { item } = route.params;
  const renderIngredientsItem = ({ item }) => {
    return (
      <View style={styles.ingredientsItemWrapper}>
        <Image source={item.image} style={styles.ingredientsImage} />
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons name="star" size={12} color="white" />
          </View>
        </View>
      </SafeAreaView>

      {/*Titles*/}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/*Price*/}
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>€ {item.Price}</Text>
      </View>

      {/*Pizza informations*/}
      <View style={styles.infoWrapper}>
        <View style={styles.leftInfoWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>{item.sizeName}</Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.sizeName}</Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery time</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        {/*The view below will contain the item's picture*/}
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
      {/*Ingredients*/}
      <View style={styles.ingrediantsWrapper}>
        <Text style={styles.ingredientsText}>Magical Ingredients : </Text>
        <View style={styles.ingredientsList}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/*Order button*/}
      <TouchableOpacity onPress={() => alert("Order has been placed")}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Order it !</Text>
          <Feather name="chevron-right" size={18} color="black" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerLeft: {
    borderColor: colors.textLght,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 32,
    color: colors.textDark,
    width: "50%",
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    color: colors.price,
    fontSize: 30,
  },
  infoWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftInfoWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    color: colors.textLght,
  },
  infoItemText: {
    color: colors.textDark,
    fontSize: 18,
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 30,
  },
  ingrediantsWrapper: {
    marginTop: 10,
  },
  ingredientsText: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  ingredientsList: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  ingredientsItemWrapper: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
  },
  ingredientsImage: {
    resizeMode: "contain",
  },
  orderWrapper: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingVertical: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  orderText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
});
