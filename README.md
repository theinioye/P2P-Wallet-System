# P2P Wallet System
## Project Overview
A peer-to-peer wallet system built with AdonisJS v5, providing secure transaction capabilities between users. This system allows users to create wallets, check balances, and perform transactions in a reliable and efficient manner.

## Tech Stack
- Framework : AdonisJS v5 (TypeScript-based Node.js framework)
- Database : PostgreSQL (via Lucid ORM)
- Authentication : AdonisJS Auth
- Language : TypeScript
## Key Features
- User account management
- Wallet creation and management
- Balance checking functionality
- Transaction processing between wallets
- Ledger entry tracking for all financial movements
## Project Structure
- Models : User, Wallet, Transaction, LedgerEntry
- Services : BalanceService for handling wallet balance operations
- Controllers : HTTP controllers for handling API requests
- Validators : Request validation for secure data handling
- Migrations : Database structure setup
## Getting Started
1. 
   Clone the repository
2. 
   Install dependencies: npm install
3. 
   Set up environment variables (copy .env.example to .env )
4. 
   Run migrations: node ace migration:run
5. 
   Start the development server: npm run dev
   
## Development Commands
- npm run dev : Start development server with hot reload
- npm run build : Build for production
- npm start : Run production server
- npm test : Run tests
## Future Enhancements
- Implement scheduled tasks with cron jobs
- Add more comprehensive transaction validation
- Enhance security features
- Develop a frontend interface
This P2P Wallet System provides a solid foundation for building financial transaction applications with a focus on security, reliability, and scalability.
