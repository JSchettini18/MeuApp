// screens/Cadastro.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    console.log('🟢 Tela Cadastro carregada');
  }, []);

  const handleCadastro = async () => {
    console.log('📨 Dados recebidos para cadastro:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);

    if (!nome || !email || !senha) {
      alert('Erro: Todos os campos devem ser preenchidos.');
      return;
    }

    if (senha.length < 6) {
      alert('Erro: A senha precisa ter no mínimo 6 caracteres.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), senha);

      await updateProfile(userCredential.user, {
        displayName: nome,
      });

      console.log('✅ Usuário criado:', userCredential.user);

      alert('Usuário cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.log('❌ Erro ao cadastrar:', error);
      alert('Erro no cadastro: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={handleCadastro} color="#00D3DB" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, marginBottom: 24, textAlign: 'center' },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
