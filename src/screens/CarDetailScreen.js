import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CarDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { carro } = route.params;

  const handleWhatsApp = () => {
    const mensagem = `Olá! Tenho interesse no ${carro.nome} que vi no app.`;
    const numero = '5561999999999'; 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>⬅ Voltar</Text>
      </TouchableOpacity>

      <Image source={{ uri: carro.imagem }} style={styles.image} />

      <Text style={styles.title}>
        {carro.nome.split(' ')[0]} <Text style={styles.highlight}>{carro.nome.split(' ').slice(1).join(' ')}</Text>
      </Text>
      <Text style={styles.subtitle}>{carro.descricao}</Text>

      <View style={styles.infoRow}>
        <InfoItem label="Cidade" value="Brasília" />
        <InfoItem label="KM" value={carro.km} />
        <InfoItem label="Cor" value="Azul" />
      </View>

      <View style={styles.infoRow}>
        <InfoItem label="Combustível" value="Gasolina" />
        <InfoItem label="Aceita Troca" value="Sim" />
        <InfoItem label="Câmbio" value="Automático" />
      </View>

      <Text style={styles.price}>R$ {carro.preco.toLocaleString('pt-BR')}</Text>

      <TouchableOpacity style={styles.button} onPress={handleWhatsApp}>
        <Text style={styles.buttonText}>Entrar em contato</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function InfoItem({ label, value }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
  back: { color: '#007bff', fontSize: 16, marginBottom: 12 },
  image: { width: '100%', height: 200, borderRadius: 12, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
  highlight: { color: '#00bcd4' },
  subtitle: { fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  infoItem: { alignItems: 'center', flex: 1 },
  label: { fontWeight: 'bold', fontSize: 13 },
  value: { fontSize: 13, color: '#333', marginTop: 4 },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00bcd4',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00bcd4',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
