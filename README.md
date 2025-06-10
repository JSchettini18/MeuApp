**MotorVenda - Seu App de Venda de Carros Online**
MotorVenda é um aplicativo inspirado na Webmotors, projetado para conectar compradores e vendedores de veículos de forma rápida e intuitiva. Com ele, você pode explorar uma variedade de carros, visualizar detalhes completos e entrar em contato diretamente com o vendedor via WhatsApp.

**Propósito**
O objetivo do MotorVenda é simplificar a compra e venda de veículos, oferecendo uma plataforma fácil de usar onde os usuários podem:

Navegar por uma lista de carros disponíveis.

Visualizar detalhes como modelo, ano, preço e especificações técnicas.

Entrar em contato com o vendedor diretamente pelo WhatsApp.

Gerenciar seu perfil e preferências.

**Funcionalidades**
Autenticação de Usuário
Login: Acesso rápido para usuários cadastrados.

Cadastro: Criação de conta simples com e-mail e senha.

**Exploração de Carros**
Listagem de veículos: Visualize os carros disponíveis em cards organizados.

Detalhes do veículo: Acesse informações completas, incluindo fotos, descrição e contato do vendedor.

**Interação com o Vendedor**
Contato via WhatsApp: Botão direto para conversar com o vendedor.

**Menu Lateral (Drawer Navigation)**
Início: Retorna à tela principal.

Perfil: Visualize e edite suas informações cadastrais.

Sair: Faça logout do aplicativo.

**Público-Alvo**
Compradores de veículos: Pessoas em busca de carros novos ou usados.

Vendedores: Proprietários ou concessionárias que desejam anunciar seus veículos.

Entusiastas de carros: Interessados em explorar diferentes modelos e especificações.

**Tecnologias Utilizadas**
O MotorVenda foi desenvolvido com as seguintes tecnologias:

Frontend & Navegação
React Native: Framework para desenvolvimento mobile.

React Navigation:

Drawer Navigation: Menu lateral para acesso rápido às funcionalidades.

Stack Navigation: Navegação entre telas (Home → Detalhes do Carro).

Backend & Autenticação
Firebase:

Autenticação de usuários (login/cadastro).

Armazenamento de dados dos carros e usuários.

**Estrutura do Projeto**
O projeto é organizado em pastas para facilitar a manutenção:

/screens: Telas do aplicativo (Home, Login, Cadastro, Detalhes do Carro, Perfil).

/navigation: Configuração das rotas (DrawerRoutes.js).

/hooks: Lógicas reutilizáveis (useCarros.js).

/components: Componentes compartilhados (CarCard.js).
