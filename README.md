# 📅 Booking SaaS - Sistema de Agendamento Inteligente

Uma plataforma de agendamento focada em evitar conflitos de horários para prestadores de serviços, como guias locais e agências, garantindo uma gestão de reservas fluida e escalável.

## 🎯 O Problema que Resolvemos
O *overbooking* (conflito de horários) é um dos maiores problemas no gerenciamento de roteiros e serviços. Este sistema foi desenhado do zero para validar disponibilidades e garantir que dois clientes nunca reservem a mesma janela de tempo do mesmo profissional.

## 🏗️ Arquitetura e Tecnologias
- **Banco de Dados:** PostgreSQL / Supabase (Estrutura relacional para Usuários, Serviços e Agendamentos).
- **Lógica de Negócios (Backend):** (Vamos definir no próximo passo)
- **Front-end:** (Vamos definir em breve)

## 🗄️ Esquema do Banco de Dados
O coração do sistema é estruturado para consistência. Confira o arquivo `schema.sql` para ver a modelagem completa, incluindo:
*   Tabela de `users` com divisão de regras (Provedores vs Clientes).
*   Tabela de `services` atrelada aos provedores (ex: roteiros e passeios).
*   Tabela de `appointments` com chaves estrangeiras e controle de *status* (pendente, confirmado, cancelado).
