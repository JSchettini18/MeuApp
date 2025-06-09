import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebaseConfig';
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const user = auth.currentUser;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setNome(user.displayName || '');
      setEmail(user.email || '');
    }
  }, []);

  const editarCampo = async (campo) => {
    const novoValor = prompt(`Digite o novo ${campo}:`);

    if (!novoValor) return;

    try {
      if (campo === 'Nome') {
        await updateProfile(user, { displayName: novoValor });
        setNome(novoValor);
      } else if (campo === 'Email') {
        await updateEmail(user, novoValor);
        setEmail(novoValor);
      } else if (campo === 'Senha') {
        await updatePassword(user, novoValor);
        Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
        return;
      }

      Alert.alert('Sucesso', `${campo} atualizado com sucesso!`);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', `Não foi possível atualizar o ${campo}.`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>⬅ Voltar</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
        style={styles.avatar}
      />
      <Text style={styles.nome}>{nome}</Text>
      <TouchableOpacity style={styles.compartilhar}>
        <Text style={styles.shareText}>Compartilhar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => editarCampo('Nome')}>
        <Text style={styles.botaoTexto}>Editar Nome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => editarCampo('Email')}>
        <Text style={styles.botaoTexto}>Editar Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => editarCampo('Senha')}>
        <Text style={styles.botaoTexto}>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, alignItems: 'center' },
  voltar: { alignSelf: 'flex-start', marginBottom: 20, fontSize: 16, color: '#007bff' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  compartilhar: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginVertical: 10,
  },
  shareText: { fontSize: 14 },
  botao: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoTexto: { fontSize: 16 },
});
