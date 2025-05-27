import React from "react";
import styles from './style'; 
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native-web";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function Detalhes() {
    const route = useRoute();
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.scrolo}>
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.titulo}</Text>
            <Text style={styles.note}>Nota: {route.params.nota}</Text>
           
            <Image
                source={{ uri: route.params.imagem }}
                style={styles.image}
            />
             <Text style={styles.sino}> sinopse:</Text>
             <Text style={styles.sinopse}> {route.params.sinopse}</Text>
             
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>Clique aqui para voltar</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

