import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ImageSourcePropType } from "react-native";

type PortfolioItemProps = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  link?: string;
};

export default function PortfolioItem({
  title,
  description,
  image,
  link,
}: PortfolioItemProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {link && (
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
          <Text style={styles.link}>View Project</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 6,
  },
  link: {
    color: "blue",
    marginTop: 8,
  },
});
