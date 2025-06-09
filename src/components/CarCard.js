import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CarCard({ carro }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { carro })}>
      <View style={styles.card}>
        <Image source={{ uri: carro.imagem }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{carro.nome}</Text>
          <Text style={styles.subtitle}>{carro.descricao}</Text>
          <Text style={styles.price}>R$ {carro.preco.toLocaleString('pt-BR')}</Text>
          <Text style={styles.km}>{carro.km}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: '#444',
    marginVertical: 4,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#009EA4',
  },
  km: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});
