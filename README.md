# 📚 Library — Gerenciador de Livros

Uma aplicação web moderna para cadastro, catálogo e gerenciamento de livros pessoais, desenvolvida com **React 19**, **Vite** e **Tailwind CSS**. Todos os dados e preferências de tema são persistidos diretamente no **`localStorage`** do navegador.

---

## 🚀 Funcionalidades

- 📖 **Cadastro de Livros**: Formulário completo com validação de campos obrigatórios (Título, Autor, Ano de Publicação, Capa e Gênero) utilizando `react-hook-form`.
- 🗂️ **Catálogo de Livros**: Visualização dos livros cadastrados em cards responsivos e estilizados.
- ✏️ **Edição via Modal**: Atualização dos dados do livro em tempo real com modal dedicado e confirmação de salvamento.
- 🗑️ **Exclusão com Confirmação**: Remoção segura de registros com alertas interativos alimentados por `SweetAlert2`.
- 💾 **Persistência no LocalStorage**: Os livros e o tema selecionado permanecem salvos mesmo após fechar ou recarregar o navegador.
- 🌓 **Dark / Light Mode**: Alternância de tema integrada no cabeçalho com transições suaves.
- 🧭 **Roteamento SPA**: Navegação entre páginas sem recarregamento usando `react-router-dom`.
- ✨ **Animações de Interface**: Animações de entrada suaves configuradas no Tailwind CSS v4.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca para interfaces declarativas e baseadas em componentes.
- **[Vite 8](https://vite.dev/)**: Ferramenta de build rápida e servidor de desenvolvimento ágil.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework utilitário de estilização moderna com suporte nativo a dark mode e animações personalizadas.
- **[React Router DOM v7](https://reactrouter.com/)**: Gerenciamento de rotas e navegação client-side.
- **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento e validação de formulários de alta performance.
- **[SweetAlert2](https://sweetalert2.github.io/)**: Popups e diálogos de confirmação interativos e customizáveis.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Pacote de ícones populares para React.

---

## 📁 Estrutura de Pastas

```text
src/
├── assets/          # Ícones e imagens estáticas
├── components/      # Componentes reutilizáveis
│   ├── BookCard.jsx     # Card de exibição individual do livro
│   ├── EditModeForm.jsx # Formulário de edição
│   ├── Header.jsx       # Cabeçalho com navegação e alternador de tema
│   └── Modal.jsx        # Componente de modal reutilizável
├── pages/           # Páginas da aplicação
│   ├── Books.jsx        # Página de listagem e gerenciamento
│   └── RegisterBook.jsx # Página de cadastro de novos livros
├── App.css          # Configurações globais de estilo e animações @theme
└── App.jsx          # Configuração das rotas e ponto de entrada da aplicação
```

---

## 💻 Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm` (ou `yarn` / `pnpm`)
- [Git](https://git-scm.com/) instalado

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd NOME_DO_REPOSITORIO
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse a URL indicada no terminal (geralmente `http://localhost:5173`).

### Outros scripts disponíveis

- `npm run build`: Gera a versão otimizada para produção na pasta `dist/`.
- `npm run preview`: Visualiza localmente o build de produção.
- `npm run lint`: Executa a verificação estática do código com ESLint.

---

## 📌 Próximos Passos e Melhorias Futuras

- [ ] Adicionar barra de pesquisa e filtro por gênero literário.
- [ ] Adicionar ordenação por título, autor ou ano de publicação.
- [ ] Implementar exportação e importação dos dados em arquivo JSON.
- [ ] Integrar com uma API externa de livros (ex: Google Books API).

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
