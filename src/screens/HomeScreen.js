// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useCarros } from '../hooks/useCarros';
import CarCard from '../components/CarCard';

export default function HomeScreen() {
  const { carros, loading } = useCarros();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo, João</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={carros}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CarCard carro={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
});
