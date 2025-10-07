# FoodReceipts MVP

## 🍽️ Project Description

**FoodReceipts** is an MVP web application for automatic recipe extraction from various sources (websites, YouTube, TikTok, Instagram) and creating shopping carts using local Polish product suppliers.

### Key Features:
- 🔍 **Recipe Extraction** from URL or text using Azure AI and multi-level pipeline
- 🤖 **AI Content Processing** using Azure OpenAI for recipe analysis and structuring
- 🔄 **Ingredient Normalization** with unit conversion and allergen detection
- 🎯 **Product Mapping** to supplier products with fuzzy search and match scoring
- 🛒 **Shopping Cart Calculation** with VAT, packaging, and cost per serving
- 💾 **Recipe Saving** to user's personal library with original content
- 📤 **Recipe Sharing** with other users through links and social networks
- 📅 **Weekly Menu Planning** from saved recipes with automatic planning
- 🎬 **Video Recipe Feed** - viewing recipes with video content in chronological order
- ⭐ **Favorites System** - adding recipes to favorites for quick access
- 💬 **Recipe Comments** - ability to leave comments and reviews on recipes
- 💰 **Cost Filtering** - searching for recipes within a given budget
- 🔍 **Advanced Filtering** - filtering by cooking time, difficulty, categories, allergens
- 🌐 **Modern Web Interface** with intuitive UX
- 🥕 **Product Management in DB** - automatic adding, editing, deleting products
- 🤖 **AI Product Image Generation** using Azure AI
- 🔄 **Automatic Product Addition** from recipes when they are missing in the DB
- 📊 **Product Normalization** through artificial intelligence
- 🔍 **Filter Management in DB** - creating, editing, deleting filters in PostgreSQL
- ⚡ **Predefined Filters** - quick access to popular filters
- 🔗 **Filter Integration with Recipes** - applying filters for recipe search
- 🔐 **Authentication & Authorization** - secure user authentication with JWT tokens
- 👤 **User Management** - registration, login, password reset, email confirmation
- 🔒 **OAuth Integration** - Google and Apple login support
- 📱 **Biometric Authentication** - fingerprint/Face ID support in mobile app
- 🛡️ **Security Features** - rate limiting, CSRF protection, input validation

## 🏗️ Architecture

The project follows the **api-core** architectural style and uses Clean Architecture principles:

```
FoodReceipts/
├── FoodReceipts.Core/          # Main application (API Gateway)
├── FoodReceipts.Api/           # API controllers and endpoints
├── FoodReceipts.Api.Service/   # Business logic and services
├── FoodReceipts.DataAccess/    # Repositories and migrations
└── FoodReceipts.Web/           # Next.js frontend
```

### Detailed Architecture:
- **Common.Core** - CQRS infrastructure, domain models, events
- **Common.Base** - exception handling, SimpleInjector extensions
- **Common.Entity** - ready CRUD operations for entities
- **Common.Identity** - JWT authentication and authorization
- **Common.Media** - media file handling

**IMPORTANT**: All Common.* projects are transferred without changes to ensure compatibility with api-core architecture.

## 🔐 Authentication & Authorization

The project implements a comprehensive authentication and authorization system based on the api-core architecture:

### Authentication Features:
- **JWT Token Authentication** - Secure token-based authentication
- **Cookie Authentication** - Session-based authentication for web clients
- **OAuth Integration** - Google and Apple login support
- **Email Confirmation** - Secure email verification for new users
- **Password Reset** - Secure password recovery via email
- **Biometric Authentication** - Fingerprint/Face ID support in mobile app

### Authorization Features:
- **Role-Based Access Control** - User roles and permissions
- **Resource Ownership** - Users can only access their own recipes
- **Admin Authorization** - Admin-only endpoints and features
- **API Endpoint Protection** - Authorization filters protect sensitive endpoints

### Security Features:
- **Rate Limiting** - Prevents brute force attacks
- **CSRF Protection** - Cross-site request forgery protection
- **Input Validation** - All inputs are validated and sanitized
- **CORS Configuration** - Proper cross-origin resource sharing
- **Secure Token Storage** - Tokens stored securely on client devices

### API Endpoints:
Authentication endpoints follow the api-core pattern:
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Token refresh
- `POST /auth/forgot-password` - Password reset request
- `POST /auth/reset-password` - Password reset confirmation
- `GET /auth/confirm-email` - Email confirmation
- `GET /auth/google/login` - Google OAuth login
- `GET /auth/apple/login` - Apple OAuth login

### Architecture Layers:
- **Presentation Layer** (Api) - controllers, request validation
- **Application Layer** (Service) - business logic, orchestration
- **Domain Layer** (Models) - entities, value objects, interfaces
- **Infrastructure Layer** (DataAccess) - repositories, migrations, external APIs

## 🛠️ Technology Stack

### Backend (.NET 9)
- **Framework**: ASP.NET Core 9.0
- **Language**: C# 12
- **Database**: PostgreSQL 16
- **ORM**: Dapper + FluentMigrator
- **DI Container**: SimpleInjector
- **Mediator**: MediatR (CQRS pattern)
- **Validation**: FluentValidation
- **HTTP Client**: HttpClientFactory
- **Logging**: Serilog with Elasticsearch integration
- **Monitoring**: Prometheus metrics with Grafana dashboards
- **Tracing**: OpenTelemetry with Jaeger
- **Caching**: Redis 7
- **Health Checks**: ASP.NET Core Health Checks

### Frontend (Next.js)
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Testing**: Jest + React Testing Library
- **E2E Testing**: Playwright

### DevOps & Infrastructure
- **Containerization**: Docker + Docker Compose with multi-stage builds
- **CI/CD**: GitHub Actions with comprehensive pipeline
- **Database**: PostgreSQL 16 with health checks
- **Caching**: Redis 7 with optimized configuration
- **Monitoring**: Complete observability stack (Prometheus, Grafana, Alertmanager)
- **Logging**: Elasticsearch + Kibana for log aggregation
- **Tracing**: Jaeger for distributed tracing
- **Reverse Proxy**: NGINX with SSL/TLS and rate limiting
- **Security**: Security headers, rate limiting, health checks

### External APIs & Services
- **Recipe Extraction**: HtmlAgilityPack, Schema.org parsing
- **LLM Integration**: OpenAI API (for text parsing)
- **Social Platforms**: oEmbed API, transcripts
- **Vendor APIs**: Lisek (main), Uber Eats, Bolt Food (planned)

## 🗄️ Database

### Main Entities:
- **Recipe** - recipes with ingredients and instructions
- **Ingredient** - original ingredients (before normalization)
- **NormalizedIngredient** - normalized ingredients in SI units
- **Vendor** - product suppliers (Lisek, Uber Eats, etc.)
- **Product** - supplier products
- **ProductOffer** - offers with prices and VAT
- **Basket** - shopping carts with calculations
- **SavedRecipe** - user-saved recipes with metadata and original content
- **RecipeCollection** - user recipe collections
- **SharedRecipe** - recipe sharing between users
- **RecipeShare** - links for recipe sharing
- **WeeklyMenu** - weekly menu with meal planning
- **MenuPlan** - meal plan for a specific day
- **MealPlan** - meal plan (breakfast, lunch, dinner)
- **RecipeFeed** - recipe feed with video content
- **FavoriteRecipe** - user's favorite recipes
- **RecipeComment** - recipe comments
- **RecipeRating** - recipe ratings by users
- **RecipeFilter** - filters for recipe search
- **BudgetFilter** - cost filter for recipes
- **RecipeSearchCriteria** - recipe search criteria
- **Product** - products in database with AI-generated images
- **ProductImage** - product images generated by artificial intelligence
- **ProductCategory** - product categories for organization
- **ProductNormalization** - normalized product data through AI
- **Filter** - recipe search filters stored in PostgreSQL
- **FilterParameter** - filter parameters with conditions and values
- **PredefinedFilter** - predefined filters for quick access

### Value Objects:
- **Money** - monetary amounts in PLN
- **VatRate** - Polish VAT rates (0%, 5%, 8%, 23%)
- **Allergen** - EU 14 allergens enum
- **FilterType** - filter types (cost, time, difficulty, category, allergens)
- **FilterCondition** - filtering conditions (equals, greater than, less than, contains)

## 🔄 Processing Pipeline

### 1. Recipe Extraction with Azure AI (FR-020 - FR-025)
```
URL/Text → Azure Content Extraction → Azure OpenAI Processing → Recipe Structure → Validation
```

### 2. AI Content Processing (FR-096 - FR-100)
```
Raw Content → Azure OpenAI Analysis → Structured Data → Recipe Components → Quality Check
```

### 3. Normalization (FR-026 - FR-030)
```
Recipe → Unit Conversion → Lexicon → Allergen Detection → Nutrition → NormalizedRecipe
```

### 4. Product Mapping (FR-031 - FR-033)
```
NormalizedIngredient → Fuzzy Search → Lemmatization → Product Candidates → Mapping Result
```

### 5. Shopping Cart Calculation (FR-040 - FR-041)
```
Mapping Results → Product Selection → Pack Calculation → VAT → Basket Summary
```

### 6. Recipe Saving (FR-086 - FR-090)
```
Extracted Recipe → User Save → Recipe Library → Collections → Search & Filter
```

### 7. Recipe Sharing (FR-106 - FR-110)
```
Saved Recipe → Share Generation → Public Link → Social Media → Recipe Access
```

### 8. Menu Planning (FR-076 - FR-080)
```
Saved Recipes → Menu Planning → Weekly Schedule → Meal Distribution → Shopping List
```

### 9. Video Recipe Feed (FR-120 - FR-125)
```
Video Recipes → Feed Generation → Chronological Order → User Feed → Video Playback
```

### 10. Favorites System (FR-126 - FR-130)
```
Recipe Selection → Add to Favorites → User Favorites List → Quick Access → Remove from Favorites
```

### 11. Recipe Comments (FR-131 - FR-135)
```
Recipe View → Comment Creation → Comment Validation → Comment Storage → Comment Display
```

### 12. Recipe Cost Filtering (FR-150 - FR-155)
```
Budget Input → Cost Calculation → Recipe Filtering → Filtered Results → Budget Planning
```

### 13. Advanced Recipe Filtering (FR-156 - FR-160)
```
Filter Criteria → Recipe Search → Multi-criteria Filtering → Sorted Results → Filtered Feed
```

### 14. Product Management in DB (FR-200 - FR-210)
```
Product Input → AI Analysis → Database Check → Auto Create/Update → Image Generation → Product Storage
```

### 15. AI Product Image Generation (FR-202)
```
Product Data → Azure AI → Image Generation → Quality Check → Database Storage → Product Update
```

### 16. Automatic Product Addition from Recipes (FR-205)
```
Recipe Analysis → Ingredient Extraction → Product Check → Missing Product Detection → AI Creation → Database Update
```

### 17. Filter Management in PostgreSQL (FR-211 - FR-220)
```
Filter Creation → Database Storage → Validation → Caching → Integration with Recipes → Search Application
```

### 18. Predefined Filters (FR-219)
```
Predefined Filter Setup → Database Seeding → Quick Access → User Selection → Filter Application
```

## 🌐 API Endpoints

### Main endpoints:
- `POST /extract` - recipe extraction from URL/text with Azure AI
- `POST /ai/analyze` - AI content analysis with Azure OpenAI
- `POST /normalize` - recipe and ingredient normalization
- `POST /map` - ingredient mapping to products
- `POST /basket/estimate` - shopping cart calculation
- `GET /vendors` - list of suppliers
- `GET /recipes/{id}` - get recipe
- `POST /recipes/save` - save recipe to library with original content
- `GET /recipes/saved` - get user's saved recipes
- `POST /recipes/collections` - create recipe collection
- `GET /recipes/collections` - get user collections
- `POST /recipes/share` - create recipe sharing link
- `GET /recipes/shared/{shareId}` - get recipe by sharing link
- `POST /recipes/shared/{shareId}/save` - save shared recipe to personal library
- `POST /menu/weekly` - create weekly menu
- `GET /menu/weekly/{id}` - get weekly menu
- `PUT /menu/weekly/{id}` - update weekly menu
- `GET /feed/recipes` - get video recipe feed
- `GET /feed/recipes/{id}` - get specific recipe from feed
- `POST /favorites/add` - add recipe to favorites
- `DELETE /favorites/remove/{recipeId}` - remove recipe from favorites
- `GET /favorites` - get user's favorite recipes list
- `POST /recipes/{id}/comments` - add comment to recipe
- `GET /recipes/{id}/comments` - get recipe comments
- `PUT /comments/{id}` - edit comment
- `DELETE /comments/{id}` - delete comment
- `POST /recipes/{id}/rate` - rate recipe
- `GET /recipes/search` - search recipes with filters
- `POST /recipes/filter` - filter recipes by criteria
- `GET /recipes/budget/{amount}` - search recipes within budget
- `POST /recipes/calculate-cost` - calculate recipe cost
- `GET /recipes/filters/available` - get available filters
- `GET /health` - system health check
- `GET /metrics` - Prometheus metrics

### Product Management Endpoints:
- `POST /products` - create new product
- `GET /products/{id}` - get product by ID
- `PUT /products/{id}` - update product
- `DELETE /products/{id}` - delete product
- `GET /products/search` - search products by name/category
- `POST /products/{id}/generate-image` - generate product image via AI
- `POST /products/normalize` - normalize product names via AI
- `POST /products/auto-create` - automatic product creation from recipe
- `GET /products/categories` - get all product categories

### Filter Management Endpoints:
- `POST /filters` - create new filter
- `GET /filters/{id}` - get filter by ID
- `PUT /filters/{id}` - update filter
- `DELETE /filters/{id}` - delete filter
- `GET /filters/search` - search filters by type/category
- `GET /filters/predefined` - get predefined filters
- `POST /filters/{id}/apply` - apply filter to recipes
- `GET /filters/types` - get all filter types
- `POST /filters/combine` - combine multiple filters

## 🎨 Frontend UX Flow

### Main flow:
1. **UrlOrTextInput** - input URL or recipe text
2. **AzureAIAnalysis** - AI content analysis with Azure OpenAI
3. **RecipePreview** - preview of extracted recipe
4. **SaveRecipeButton** - save recipe to library
5. **PortionsEditor** - edit number of servings
6. **IngredientMapper** - select products for each ingredient
7. **VendorPicker** - select supplier (Lisek by default)
8. **BasketSummary** - cart summary with CSV/PDF export

### Recipe Saving Flow:
1. **RecipeLibrary** - view saved recipes
2. **RecipeCollections** - manage recipe collections
3. **RecipeSearch** - search and filter saved recipes
4. **RecipeDetails** - detailed view of saved recipe with original content

### Recipe Sharing Flow:
1. **ShareRecipeButton** - create recipe sharing link
2. **ShareOptions** - choose sharing method (link, social networks)
3. **SharedRecipeView** - view shared recipe by link
4. **SaveSharedRecipe** - save shared recipe to personal library
5. **ShareAnalytics** - view and save statistics

### Menu Planning Flow:
1. **RecipeLibrary** - select recipes from saved ones
2. **WeeklyMenuPlanner** - plan weekly menu
3. **MealDistribution** - distribute recipes by days and meals
4. **MenuPreview** - preview weekly menu
5. **ShoppingListGenerator** - generate shopping list for the whole week

### Video Recipe Feed Flow:
1. **RecipeFeed** - view video recipe feed in chronological order
2. **VideoPlayer** - embedded video player for viewing video recipes
3. **FeedFilters** - filter feed by categories, cooking time, difficulty
4. **FeedPagination** - pagination for loading additional recipes
5. **RecipePreview** - recipe preview without going to detail page

### Favorites System Flow:
1. **AddToFavoritesButton** - button to add recipe to favorites
2. **FavoritesList** - view list of favorite recipes
3. **FavoritesSearch** - search among favorite recipes
4. **RemoveFromFavorites** - remove recipe from favorites
5. **FavoritesExport** - export list of favorite recipes

### Recipe Comments Flow:
1. **CommentSection** - comments section under recipe
2. **AddCommentForm** - form for adding new comment
3. **CommentList** - comments list with pagination
4. **CommentActions** - comment actions (edit, delete, reply)
5. **CommentModeration** - comment moderation (for administrators)

### Cost Filtering Flow:
1. **BudgetInput** - budget input (e.g., 400 PLN)
2. **CostCalculator** - calculate recipe costs based on supplier prices
3. **BudgetFilter** - filter recipes within budget
4. **BudgetResults** - display recipes that fit the budget
5. **BudgetPlanning** - plan menu within budget

### Advanced Filtering Flow:
1. **FilterPanel** - panel with various filters
2. **CostFilter** - cost filter (up to 100 PLN, 100-300, 300-500, 500+)
3. **TimeFilter** - cooking time filter (up to 30 min, 30-60 min, 60+ min)
4. **DifficultyFilter** - difficulty filter (easy, medium, hard)
5. **CategoryFilter** - category filter (breakfast, lunch, dinner, dessert)
6. **AllergenFilter** - allergen filter (gluten-free, lactose-free, vegan)
7. **FilteredResults** - display filtered results
8. **FilterReset** - reset all filters

### Product Management Flow:
1. **ProductManagement** - main product management page
2. **ProductList** - list of all products with search and filtering
3. **ProductDetails** - detailed product information with AI-generated image
4. **AddProductForm** - form for adding new product
5. **EditProductForm** - form for editing existing product
6. **GenerateImageButton** - button for AI product image generation
7. **ProductCategories** - product category management
8. **AutoCreateProducts** - automatic product creation from recipes

### AI Product Image Generation Flow:
1. **ProductSelection** - select product for image generation
2. **AIImageGeneration** - image generation process via Azure AI
3. **ImagePreview** - preview of generated image
4. **ImageQualityCheck** - image quality check
5. **ImageApproval** - approve or reject generated image
6. **ImageStorage** - save image to database

### Filter Management Flow:
1. **FilterManagement** - main filter management page
2. **FilterList** - list of all filters with search and categorization
3. **FilterDetails** - detailed filter information with parameters
4. **CreateFilterForm** - form for creating new filter
5. **EditFilterForm** - form for editing existing filter
6. **FilterParameters** - filter parameter management
7. **PredefinedFilters** - selection from predefined filters
8. **FilterCombination** - combining multiple filters

### Predefined Filters Flow:
1. **PredefinedFilterSelection** - selection from predefined filters
2. **QuickFilterAccess** - quick access to popular filters
3. **FilterPreview** - preview of filter action
4. **FilterApplication** - apply filter to recipes
5. **FilterResults** - display filtering results
6. **FilterCustomization** - customize predefined filter

## 🧪 Testing

### Test Types:
- **Unit Tests** - testing individual components
- **Integration Tests** - testing layer interactions
- **E2E Tests** - testing complete user scenarios
- **API Tests** - testing endpoints
- **Performance Tests** - load testing

### Coverage:
- Minimum 80% unit test coverage
- 100% coverage of critical business processes
- Automated testing in CI/CD pipeline

## 🚀 Project Setup

### Prerequisites:
- .NET 9 SDK
- Node.js 18+
- PostgreSQL 16
- Docker & Docker Compose
- OpenAI API key
- Redis (optional for local development)

### Local Development:

#### Quick Start with Docker Compose:
```bash
# Clone the repository
git clone https://github.com/your-username/FoodReceipts.git
cd FoodReceipts

# Copy environment variables
cp .env.example .env
# Edit .env file with your API keys

# Start all services (database, Redis, monitoring)
docker-compose up -d

# The API will be available at http://localhost:5000
# Grafana dashboard at http://localhost:3001 (admin/admin123)
# Prometheus at http://localhost:9090
```

#### Manual Development Setup:
```bash
# Backend API
cd src/api/FoodReceipts.Api
dotnet restore
dotnet run

# Database (if not using Docker)
docker-compose up -d postgres redis

# Frontend (if available)
cd src/web
npm install
npm run dev
```

### Production Deployment:
```bash
# Production deployment with NGINX and monitoring
docker-compose -f docker-compose.prod.yml up -d

# The application will be available at https://your-domain.com
```

### Environment Configuration:
```bash
# Copy environment template
cp .env.example .env

# Configure required variables
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET_KEY=your_jwt_secret_key_here
DATABASE_PASSWORD=secure_password

# Optional monitoring configuration
SERILOG_ELASTICSEARCH_URL=http://elasticsearch:9200
JAEGER_ENDPOINT=http://jaeger:14268/api/traces
```

## 🔄 CI/CD with GitHub Actions

### GitHub Actions Pipeline
The project uses GitHub Actions for comprehensive CI/CD automation with security scanning and performance testing:

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  code-quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '9.0.x'
      - name: Restore dependencies
        run: dotnet restore src/api/FoodReceipts.sln
      - name: Build
        run: dotnet build src/api/FoodReceipts.sln --no-restore
      - name: Run unit tests
        run: dotnet test src/api/tests/FoodReceipts.UnitTests.Standalone --no-build --verbosity normal
      - name: Run integration tests
        run: dotnet test src/api/tests/FoodReceipts.IntegrationTests --no-build --verbosity normal

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Snyk security scan
        uses: snyk/actions/dotnet@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  performance-test:
    runs-on: ubuntu-latest
    needs: [code-quality]
    steps:
      - uses: actions/checkout@v4
      - name: Start services
        run: docker-compose up -d
      - name: Run performance tests
        run: |
          npx playwright test tests/performance
      - name: Performance regression check
        run: |
          # Check if response times are within acceptable limits
          npx playwright test tests/performance/regression.spec.js

  deploy:
    runs-on: ubuntu-latest
    needs: [code-quality, security-scan, performance-test]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        run: |
          docker-compose -f docker-compose.prod.yml up -d
          docker-compose exec foodreceipts-api dotnet ef database update
```

### Docker Configuration
```dockerfile
# src/api/Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy solution and project files for layer caching
COPY ["FoodReceipts.sln", "./"]
COPY ["src/api/FoodReceipts.Api/FoodReceipts.Api.csproj", "src/api/FoodReceipts.Api/"]
COPY ["src/api/FoodReceipts.Api.Service/FoodReceipts.Api.Service.csproj", "src/api/FoodReceipts.Api.Service/"]
COPY ["src/api/FoodReceipts.DataAccess/FoodReceipts.DataAccess.csproj", "src/api/FoodReceipts.DataAccess/"]
COPY ["src/api/Common.Base/Common.Base.csproj", "src/api/Common.Base/"]
COPY ["src/api/Common.Core/Common.Core.csproj", "src/api/Common.Core/"]

# Restore packages
RUN dotnet restore "FoodReceipts.sln"

# Copy source code and build
COPY ["src/api/", "src/api/"]
WORKDIR "/src/src/api/FoodReceipts.Api"
RUN dotnet publish "FoodReceipts.Api.csproj" -c Release -o /app/publish

# Runtime stage with security hardening
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 appgroup \
    && adduser --system --uid 1001 --gid 1001 --no-create-home appuser

# Install health check dependencies
RUN apt-get update && apt-get install -y curl wget && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/publish .
RUN chown -R appuser:appgroup /app
USER appuser

ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:5000/health || exit 1

ENTRYPOINT ["dotnet", "FoodReceipts.Api.dll"]
```

```dockerfile
# Dockerfile.web
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine AS final
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose для production
```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  api:
    image: foodreceipts-api:latest
    ports:
      - "80:80"
      - "443:443"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ConnectionStrings__DefaultConnection=${DATABASE_URL}
      - AzureOpenAI__ApiKey=${AZURE_OPENAI_API_KEY}
    depends_on:
      - postgres
      - redis

  web:
    image: foodreceipts-web:latest
    ports:
      - "3000:80"
    depends_on:
      - api

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=foodreceipts
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Переменные окружения CircleCI
```bash
# Environment variables в CircleCI
DATABASE_URL=postgresql://user:password@localhost:5432/foodreceipts
AZURE_OPENAI_API_KEY=your_azure_openai_key
AZURE_AI_SERVICES_KEY=your_azure_ai_services_key
POSTGRES_USER=postgres
POSTGRES_PASSWORD=secure_password
```

### CI/CD Pipeline Stages:
1. **Build** - build .NET and Node.js applications
2. **Test** - run unit and integration tests
3. **Docker Build** - create Docker images
4. **Docker Push** - push images to registry
5. **Deploy** - deploy to production
6. **Health Check** - check system health after deployment

## 📊 Monitoring and Observability

### Implemented Monitoring Stack:
- **Metrics Collection**: Prometheus with custom business metrics
  - HTTP request metrics, response times, error rates
  - Recipe extraction metrics, mapping confidence
  - Basket calculation metrics, user activity tracking
- **Visualization**: Grafana dashboards for application and infrastructure monitoring
- **Alerting**: Alertmanager with email notifications and severity-based routing
- **Logging**: Serilog with structured logging to Elasticsearch/Kibana
- **Distributed Tracing**: Jaeger for request tracing across services
- **Health Checks**: Comprehensive health monitoring for all services

### Monitoring URLs (Development):
- **Grafana**: http://localhost:3001 (admin/admin123)
- **Prometheus**: http://localhost:9090
- **Alertmanager**: http://localhost:9093
- **Kibana**: http://localhost:5601
- **Jaeger**: http://localhost:16686

### Custom Metrics:
- `foodreceipts_http_requests_total` - HTTP request count by method, path, status
- `foodreceipts_receipt_extractions_total` - Receipt extraction attempts
- `foodreceipts_recipe_mapping_confidence` - Recipe mapping quality scores
- `foodreceipts_basket_calculation_amount` - Basket calculation amounts
- `foodreceipts_user_activities_total` - User activity tracking

## 🔒 Security and Compliance

- **Authentication**: JWT tokens (compatible with api-core)
- **Authorization**: Claims-based policies
- **Validation**: FluentValidation for all input data
- **HTTPS**: Mandatory use in production
- **GDPR**: Compliance with European data protection requirements

## 🌍 Localization

- **Primary Language**: Polish (pl-PL)
- **Currency**: PLN
- **VAT**: Polish rates (0%, 5%, 8%, 23%)
- **Allergens**: EU 14 standard
- **Units**: SI + culinary units

## 📈 Scalability

### Horizontal Scaling:
- Stateless API services
- Load balancer for load distribution
- Redis-level caching

### Vertical Scaling:
- Database query optimization
- Asynchronous processing of heavy operations
- PostgreSQL connection pooling

## 🔮 Development Roadmap

### Phase 1 (MVP):
- ✅ Basic recipe extraction functionality
- ✅ Lisek integration
- ✅ Simple web interface
- 🔄 Video recipe feed
- 🔄 Favorites system
- 🔄 Recipe comments
- 🔄 Product cost filtering
- 🔄 Advanced recipe filtering
- 🔄 Product management in DB with AI image generation
- 🔄 Automatic product addition from recipes
- 🔄 Filter management in PostgreSQL without AI
- 🔄 Predefined filters for quick access

### Phase 2:
- 🔄 Uber Eats, Bolt Food integration
- 🔄 Mobile application
- 🔄 AI-based product recommendations
- 🔄 Automatic menu planning considering preferences
- 🔄 Azure Cognitive Search for improved recipe search
- 🔄 Enhanced sharing with social network integration
- 🔄 Improved comment system with replies and reactions
- 🔄 Personalized feed based on user preferences

### Phase 3:
- 🔄 ML models for improved mapping with Azure ML
- 🔄 Social features (sharing recipes and menus)
- 🔄 Integration with other culinary platforms
- 🔄 Menu planning considering seasonality and budget
- 🔄 AI recipe generation with Azure OpenAI
- 🔄 Dish image analysis with Azure Computer Vision
- 🔄 Recipe social network with subscriptions and feeds
- 🔄 Rating and review system
- 🔄 AI-powered content moderation

## 📚 Documentation

- [TASKS.md](./TASKS.md) - detailed task plan (60 microtasks)
- [API Core Style Guide](./docs/api-core-style.md) - architectural guide
- [CQRS Flow Detailed](./docs/cqrs-flow-detailed.md) - detailed command and query flow
- [API Documentation](./docs/api.md) - API documentation (planned)
- [Deployment Guide](./docs/deployment.md) - deployment guide (planned)

## 🤝 Contributing

We welcome contributions to FoodReceipts! Please follow our guidelines to ensure a smooth collaboration process.

### Code of Conduct
- Be respectful and inclusive in all interactions
- Focus on constructive feedback and collaborative problem-solving
- Follow professional communication standards
- Report any inappropriate behavior to the maintainers

### Getting Started
1. **Fork the repository** and create your local copy
2. **Read the documentation** including TASKS.md and architectural guides
3. **Set up the development environment** using Docker Compose
4. **Choose a task** from TASKS.md marked as TODO
5. **Communicate** by creating an issue or commenting on existing ones

### Development Workflow with GitHub Actions:
1. **Create feature branch**: `git checkout -b feat/FR-XXX-description`
   - Use the FR-XXX format from TASKS.md
   - Include a brief, descriptive suffix
   - Example: `feat/FR-205-recipe-product-integration`

2. **Complete task according to TASKS.md**
   - Follow the Definition of Done criteria exactly
   - Implement all specified files and tests
   - Maintain consistency with existing code patterns

3. **Add comprehensive tests**
   - Unit tests for all business logic
   - Integration tests for API endpoints
   - Minimum 80% code coverage required
   - Follow existing test patterns and naming conventions

4. **Update documentation**
   - Update TASKS.md with `SUCCEEDED: FR-XXX` mark
   - Add/update API documentation if endpoints changed
   - Update README.md if new features are user-facing
   - Add code comments for complex business logic

5. **Create Pull Request**
   - Use descriptive title: `feat: FR-XXX - Brief description`
   - Reference the specific task from TASKS.md
   - Include screenshots for UI changes
   - List breaking changes if any

6. **Automated Pipeline**
   GitHub Actions will automatically run:
   - **Code quality checks** (.NET build, test, lint)
   - **Security scanning** (Snyk, CodeQL)
   - **Performance testing** (Playwright)
   - **Docker image creation** and testing
   - **Test coverage analysis**

7. **Code Review Process**
   - At least one maintainer review required
   - Address all feedback before approval
   - Ensure CI/CD pipeline passes completely
   - Resolve any merge conflicts

8. **Merge and Deploy**
   - After successful CI/CD and code review - merge to main
   - GitHub Actions will automatically deploy changes to production
   - Monitor deployment health and logs

### Pull Request Requirements:
- ✅ **All tests pass** (unit, integration, E2E)
- ✅ **Test coverage at least 80%** for new code
- ✅ **Compliance with api-core architectural style**
- ✅ **Documentation updated** if necessary
- ✅ **`SUCCEEDED: FR-XXX` mark** in TASKS.md
- ✅ **No breaking changes** without proper versioning
- ✅ **Security review passed** (no vulnerabilities introduced)
- ✅ **Performance impact assessed** (no significant regressions)

### Coding Standards
#### .NET Backend
- **Framework**: ASP.NET Core 9.0, C# 12
- **Architecture**: Clean Architecture with CQRS pattern
- **Patterns**: Repository pattern, Dependency Injection
- **Naming**: PascalCase for classes/methods, camelCase for variables
- **Comments**: XML documentation for public APIs
- **Error Handling**: Use structured exceptions and logging

#### Frontend (TypeScript/Next.js)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with component-based approach
- **State**: Zustand for state management
- **Testing**: Jest + React Testing Library + Playwright

#### Database
- **Database**: PostgreSQL 16 with Dapper ORM
- **Migrations**: FluentMigrator for version control
- **Naming**: snake_case for tables/columns
- **Constraints**: Use foreign keys and proper indexing

### Issue Reporting
#### Bug Reports
- **Use the bug report template**
- **Include steps to reproduce**
- **Provide environment details** (OS, browser, .NET version)
- **Attach screenshots or logs** if applicable
- **Label with appropriate priority** (critical, high, medium, low)

#### Feature Requests
- **Check TASKS.md first** to avoid duplicates
- **Describe the business value** and user need
- **Provide detailed acceptance criteria**
- **Consider implementation complexity**
- **Reference related tasks** if applicable

### Task Assignment Process
1. **Check TASKS.md** for available TODO tasks
2. **Comment on the task** or create an issue to claim it
3. **Wait for maintainer approval** before starting work
4. **Follow the task Definition of Done** exactly
5. **Ask questions early** if requirements are unclear

### Code Review Guidelines
#### For Contributors
- **Respond promptly** to review feedback
- **Test your changes** thoroughly before requesting review
- **Keep PRs focused** on a single feature/fix
- **Provide context** for complex changes

#### For Reviewers
- **Review within 48 hours** when possible
- **Provide constructive feedback** with suggestions
- **Test functionality** in addition to code review
- **Approve only when fully satisfied** with quality

### Release Process
- **Semantic Versioning**: MAJOR.MINOR.PATCH
- **Release Notes**: Comprehensive changelog for each release
- **Migration Scripts**: Always include database migration instructions
- **Rollback Plan**: Ensure all changes can be safely reverted
- **Performance Testing**: Load testing before major releases

### Communication Channels
- **GitHub Issues**: For bug reports and feature requests
- **Pull Request Comments**: For code-specific discussions
- **GitHub Discussions**: For general questions and architectural discussions
- **Email**: For security-related issues (security@foodreceipts.com)

### Recognition
Contributors will be recognized in:
- **README.md Contributors section** (planned)
- **Release notes** for significant contributions
- **LinkedIn recommendations** for outstanding contributors
- **Project acknowledgments** in documentation

### Resources
- **TASKS.md**: Detailed task breakdown and implementation plan
- **docs/api-core-style.md**: Architectural guidelines and patterns
- **docs/cqrs-flow-detailed.md**: CQRS implementation details
- **Docker Setup**: Quick development environment setup
- **Monitoring Stack**: Grafana dashboards and logging access

### Questions?
If you have questions about contributing:
1. **Check existing documentation** first
2. **Search GitHub issues** for similar questions
3. **Create a new issue** with the "question" label
4. **Join GitHub discussions** for broader architectural questions

Thank you for contributing to FoodReceipts! Every contribution, big or small, helps make this project better for the community.

## 📄 License

MIT License - see [LICENSE](./LICENSE) file.

---

**Project Status**: 🚧 In active development
**Version**: 0.2.0-alpha
**Last Updated**: December 2024

### Recent Achievements:
- ✅ **FR-068**: Complete GitHub Actions CI/CD pipeline
- ✅ **FR-069**: Full monitoring and observability stack
- ✅ **FR-070**: Production-ready Docker containerization
- ✅ **FR-071**: Comprehensive documentation update

### Current Implementation Status:
- **Core API**: ASP.NET Core 9.0 with comprehensive monitoring
- **Database**: PostgreSQL 16 with migration system
- **Caching**: Redis 7 with optimized configuration
- **Monitoring**: Prometheus + Grafana + Alertmanager + Jaeger
- **CI/CD**: GitHub Actions with security and performance testing
- **Containerization**: Docker with production-ready configuration
- **Testing**: Unit, Integration, and E2E test frameworks
