# App Monetização Funcional

## 🚀 Aplicativo Completo para Monetização

Aplicativo profissional com todas funcionalidades implementadas:
- ✅ Geração de conteúdo com IA (OpenAI GPT-4)
- ✅ Automação de tarefas com Puppeteer
- ✅ Integração com plataformas de pagamento (Stripe)
- ✅ Sistema de análise de dados e analytics
- ✅ Autenticação de usuários com JWT
- ✅ API RESTful completa

## 📋 Requisitos

- Node.js >= 18.0.0
- MongoDB
- Conta Stripe (para pagamentos)
- Chave API OpenAI (para geração de conteúdo)

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/raimundojansen/app-monetizacao-funcional.git

# Entre no diretório
cd app-monetizacao-funcional

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Inicie o servidor em modo desenvolvimento
npm run dev
```

## 🌐 Configuração

Edite o arquivo `.env` com suas credenciais:

```env
PORT=3000
MONGODB_URI=sua_uri_mongodb
JWT_SECRET=sua_chave_secreta
OPENAI_API_KEY=sua_chave_openai
STRIPE_SECRET_KEY=sua_chave_stripe
```

## 🚀 Uso

### Endpoints Disponíveis

#### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login

#### Conteúdo
- `POST /api/content/generate` - Gerar conteúdo com IA
- `GET /api/content` - Listar conteúdo

#### Pagamentos
- `POST /api/payments/create-payment-intent` - Criar intenção de pagamento
- `GET /api/payments/payment-status/:id` - Verificar status

#### Analytics
- `GET /api/analytics/dashboard` - Estatísticas do dashboard
- `POST /api/analytics/track` - Rastrear evento

#### Automação
- `POST /api/automation/run` - Executar tarefa de automação
- `GET /api/automation/tasks` - Listar tarefas

## 📦 Scripts Disponíveis

```bash
npm start      # Iniciar em produção
npm run dev    # Iniciar em desenvolvimento
npm test       # Executar testes
npm run build  # Build para produção
npm run deploy # Deploy para Vercel
```

## 🏗️ Estrutura do Projeto

```
app-monetizacao-funcional/
├── src/
│   ├── index.js          # Ponto de entrada
│   ├── routes/           # Rotas da API
│   │   ├── auth.js       # Autenticação
│   │   ├── content.js    # Geração de conteúdo
│   │   ├── payments.js   # Pagamentos
│   │   ├── analytics.js  # Analytics
│   │   └── automation.js # Automação
│   └── models/           # Modelos do banco
│       └── User.js       # Modelo de usuário
├── package.json
├── .env.example
└── README.md
```

## 🔒 Segurança

- Senhas criptografadas com bcrypt
- Tokens JWT para autenticação
- Variáveis de ambiente para credenciais sensíveis
- Validação de dados de entrada

## 📈 Funcionalidades

### Geração de Conteúdo
Utiliza OpenAI GPT-4 para gerar conteúdo de alta qualidade automaticamente.

### Sistema de Pagamentos
Integração completa com Stripe para processar pagamentos de forma segura.

### Automação
Automação de tarefas web usando Puppeteer para scraping e interações.

### Analytics
Sistema completo de análise de dados com métricas e dashboards.

## 🚀 Deploy

O aplicativo está configurado para deploy na Vercel:

```bash
npm run deploy
```

Ou use o botão abaixo:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/raimundojansen/app-monetizacao-funcional)

## 📝 Licença

MIT License - veja LICENSE para detalhes

## 👤 Autor

raimundojansen

---

⭐ Se este projeto foi útil, considere dar uma estrela!
