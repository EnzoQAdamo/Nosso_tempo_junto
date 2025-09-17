# 💕 Contador de Tempo Romântico

Um site elegante e responsivo que calcula e exibe em tempo real quanto tempo se passou desde uma data específica. Perfeito para comemorar aniversários de relacionamento, datas especiais ou marcos importantes.

## 🚀 Demo

Veja o site funcionando: [https://nossotempojunto.netlify.app/](https://nossotempojunto.netlify.app/)

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna e rápida
- **Lucide React** - Ícones elegantes
- **Google Fonts** - Tipografia Inter

## 📦 Como Clonar e Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd Nosso_tempo_junto
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

## ⚙️ Personalização

### Alterando a Data

No arquivo `src/App.tsx`, encontre a linha 15 e modifique a data:

```typescript
const startDate = new Date('2023-01-15T10:30:00'); // Sua data aqui
```

**Formato**: `YYYY-MM-DDTHH:MM:SS`
- `YYYY`: Ano (ex: 2023)
- `MM`: Mês (01-12)
- `DD`: Dia (01-31)
- `HH`: Hora (00-23)
- `MM`: Minuto (00-59)
- `SS`: Segundo (00-59)

### Alterando a Foto

1. **Usando uma URL externa** (recomendado):
   ```typescript
   src="https://sua-url-da-imagem.com/foto.jpg"
   ```

2. **Usando uma foto local**:
   - Coloque a imagem na pasta `public/`
   - Altere o src para: `src="/nome-da-sua-foto.jpg"`

### Personalizando Textos

No arquivo `src/App.tsx`, você pode alterar:

- **Título principal** (linha ~67):
  ```typescript
  <h1 className="...">Seu Título Aqui</h1>
  ```

- **Texto do contador** (linha ~85):
  ```typescript
  <div className="...">Seu texto personalizado</div>
  ```

- **Mensagem final** (linha ~120):
  ```typescript
  <div className="...">"Sua mensagem especial aqui"</div>
  ```

### Alterando Cores

O projeto usa Tailwind CSS. Para alterar o esquema de cores, modifique as classes:

- **Gradiente de fundo**: `from-rose-50 via-pink-50 to-purple-100`
- **Cores do texto**: `from-pink-500 to-purple-600`
- **Cores dos cartões**: `from-rose-400 to-pink-500`

## 📱 Layout Responsivo

O site se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop**: Layout completo com grade de 3 colunas
- **Tablet**: Layout adaptado com grade de 2 colunas
- **Mobile**: Layout empilhado otimizado para toque

## 🎨 Estrutura do Projeto

```
src/
├── App.tsx          # Componente principal
├── main.tsx         # Ponto de entrada
├── index.css        # Estilos globais e animações
└── vite-env.d.ts    # Tipos do Vite

public/
└── vite.svg         # Favicon padrão

config files:
├── package.json     # Dependências e scripts
├── tailwind.config.js # Configuração do Tailwind
├── vite.config.ts   # Configuração do Vite
└── tsconfig.json    # Configuração do TypeScript
```

## 🚀 Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/` e podem ser hospedados em qualquer servidor web estático.

## 📄 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


---

Feito com ❤️ para celebrar momentos especiais
