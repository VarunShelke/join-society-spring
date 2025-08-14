# JOIN Society - E-commerce Platform

JOIN Society is a full-stack e-commerce web application built as a term project for Database Management Systems (DBMS). The platform provides a complete online shopping experience with user authentication, product catalog, shopping cart, order management, and payment processing.

## Project Description

JOIN Society is a modern e-commerce platform that allows users to browse and purchase clothing items. The application features a comprehensive product catalog organized by gender and categories, user account management, shopping cart functionality, order history tracking, and a complete checkout process with payment integration.

### Key Features

- **User Authentication**: Registration and login system with secure password handling
- **Product Catalog**: Browse products by gender, categories, colors, and sizes
- **Shopping Cart**: Add/remove items, quantity management, and cart persistence
- **Wishlist**: Save favorite products for later purchase
- **Order Management**: Complete checkout process with order history tracking
- **User Profile**: Manage personal information and addresses
- **Payment Processing**: Integrated payment methods and transaction handling
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

## Technologies Used

### Backend (Spring Boot)
- **Java 17** - Programming language
- **Spring Boot 3.3.5** - Main framework
- **Spring Data JPA** - Database abstraction layer
- **MySQL 8.1** - Primary database
- **Flyway** - Database migration management
- **Maven** - Build tool and dependency management
- **Lombok** - Code generation for reducing boilerplate
- **Apache Commons** - Utility libraries
- **Log4j** - Logging framework

### Frontend (React)
- **React 18.3.1** - Frontend framework
- **TypeScript 5.2.2** - Type-safe JavaScript
- **Vite 5.3.4** - Build tool and development server
- **React Router DOM 6.25.1** - Client-side routing
- **Redux Toolkit 2.2.7** - State management
- **Axios 1.7.2** - HTTP client for API calls
- **Tailwind CSS 3.4.6** - Utility-first CSS framework
- **Headless UI 2.1.2** - Unstyled, accessible UI components
- **React Icons 5.2.1** - Icon library
- **React Hot Toast 2.4.1** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Docker Compose** - Container orchestration for database
- **Node.js v23.1.0** - JavaScript runtime (specified in .nvmrc)

## Project Structure

```
join-society-spring/
├── join-society/                    # Backend Spring Boot application
│   └── join-society/
│       ├── src/main/java/edu/dbms/joinsociety/
│       │   ├── controller/          # REST API controllers
│       │   ├── service/             # Business logic services
│       │   ├── models/              # JPA entity models
│       │   ├── repositories/        # Data access repositories
│       │   ├── dto/                 # Data Transfer Objects
│       │   ├── config/              # Configuration classes
│       │   ├── exceptions/          # Custom exceptions
│       │   └── helper/              # Utility classes
│       ├── src/main/resources/
│       │   ├── db/migration/        # Flyway database migrations
│       │   └── application.properties
│       ├── pom.xml                  # Maven configuration
│       ├── docker-compose.yml       # Database container setup
│       └── .env.example             # Environment variables template
└── join-society-website/            # Frontend React application
    ├── src/
    │   ├── components/              # Reusable React components
    │   ├── pages/                   # Page components
    │   ├── features/                # Feature-specific components
    │   ├── hooks/                   # Custom React hooks
    │   ├── utils/                   # Utility functions
    │   ├── axios/                   # API configuration
    │   ├── constants/               # Application constants
    │   └── assets/                  # Static assets
    ├── public/                      # Public assets
    ├── package.json                 # Node.js dependencies
    ├── vite.config.ts               # Vite configuration
    ├── tailwind.config.js           # Tailwind CSS configuration
    └── tsconfig.json                # TypeScript configuration
```

## How to Setup

### Prerequisites

- **Java 17** or higher
- **Node.js v23.1.0** (use nvm: `nvm use` in the frontend directory)
- **Maven 3.6+**
- **Docker & Docker Compose** (for database)
- **Git**

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd join-society-spring
   ```

2. **Navigate to the backend directory**
   ```bash
   cd join-society/join-society
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env file with your preferred database credentials
   ```

4. **Start the MySQL database using Docker Compose**
   ```bash
   docker-compose up -d
   ```

5. **Build and run the Spring Boot application**
   ```bash
   # Using Maven wrapper (recommended)
   ./mvnw clean install
   ./mvnw spring-boot:run
   
   # Or using system Maven
   mvn clean install
   mvn spring-boot:run
   ```

   The backend API will be available at `http://localhost:8080`

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd join-society-website
   ```

2. **Use the correct Node.js version**
   ```bash
   nvm use
   # If you don't have nvm, install Node.js v23.1.0 manually
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

   The frontend application will be available at `http://localhost:5173`

### Database Setup

The application uses Flyway for database migrations. When you start the Spring Boot application for the first time, it will automatically:

1. Create the database schema
2. Run all migration scripts in order
3. Populate the database with initial data (countries, states, product categories, sample products, etc.)

### Environment Configuration

#### Backend (.env file)
```env
COMPOSE_PROJECT_NAME=dbms-term-project
MYSQL_VERSION=8.1
MYSQL_DATABASE=join_society_db
MYSQL_PORT=3306
MYSQL_ROOT_PASSWORD=root
MYSQL_USER=root
MYSQL_PASSWORD=root
```

#### Frontend
The frontend is configured to connect to the backend API. If you need to change the API base URL, update the axios configuration in `src/axios/`.

### Available Scripts

#### Backend
- `./mvnw spring-boot:run` - Start the development server
- `./mvnw clean install` - Build the application
- `./mvnw test` - Run tests
- `docker-compose up -d` - Start MySQL database
- `docker-compose down` - Stop MySQL database

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Accessing the Application

1. **Frontend**: http://localhost:5173
2. **Backend API**: http://localhost:8080
3. **Database**: localhost:3306 (MySQL)

### Default Database Credentials

- **Host**: localhost
- **Port**: 3306
- **Database**: join_society_db
- **Username**: root
- **Password**: root

## API Documentation

The backend provides RESTful APIs for:

- **Customer Management**: Registration, login, profile management
- **Product Catalog**: Browse products, categories, filters
- **Shopping Cart**: Add/remove items, quantity management
- **Order Processing**: Checkout, payment, order history
- **Wishlist**: Save and manage favorite products
- **Address Management**: Shipping and billing addresses

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is developed as a term project for Database Management Systems (DBMS) course.

## Support

For any issues or questions, please create an issue in the repository or contact the development team.
