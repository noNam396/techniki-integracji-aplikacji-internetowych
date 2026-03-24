# 🌤️ Weather Aggregator API (Docker)

## 📌 Opis projektu

Projekt przedstawia konteneryzację aplikacji backendowej w Node.js, której zadaniem jest agregowanie danych pogodowych z wielu zewnętrznych API.

Aplikacja pobiera dane z 3 różnych źródeł pogodowych, uśrednia je i udostępnia w formie prostego API REST oraz dashboardu webowego.

---

## 🏗️ Architektura

1. Backend (Node.js + Express) pobiera dane z:

   * OpenWeather
   * WeatherAPI
   * Open-Meteo
2. Dane są ujednolicane i uśredniane
3. API zwraca wynik w formacie JSON
4. Frontend (statyczny HTML) prezentuje dane użytkownikowi

```
API pogodowe → Node.js (agregacja) → REST API → Dashboard (frontend)
```

---

## ⚙️ Wymagania

Na komputerze musi być zainstalowane:

* Docker
* Docker Compose (opcjonalnie)
* Git (opcjonalnie)

---

## 🔑 Konfiguracja

Przed uruchomieniem należy utworzyć plik `.env` w głównym katalogu projektu:

```
PORT=3000
OPENWEATHER_API_KEY=twoj_klucz
WEATHER_API_KEY=twoj_klucz
```

---

## 🔗 API Keys (skąd je wziąć)

### 🌡️ OpenWeather

Rejestracja i pobranie klucza:
https://openweathermap.org/api

**Kroki:**

1. Załóż konto
2. Zaloguj się
3. Wejdź w "My API Keys"
4. Skopiuj klucz

---

### 🌦️ WeatherAPI

Rejestracja i klucz API:
https://www.weatherapi.com/

**Kroki:**

1. Sign up
2. Wejdź do dashboardu
3. Skopiuj API Key

---

### 🌍 Open-Meteo

https://open-meteo.com/

✅ Nie wymaga klucza API

---

## 🚀 Uruchomienie projektu (Docker Compose)

```bash
docker-compose up -d --build
```

lub:

```bash
docker compose up -d --build
```

---

## 🌐 Dostęp do aplikacji

### Dashboard (frontend)

```
http://localhost:3000/
```

### API (JSON)

```
http://localhost:3000/weather/Warsaw
```

---

## 🐳 Uruchomienie BEZ Docker Compose

### 1. Build obrazu

```bash
docker build -t weather-app .
```

### 2. Uruchomienie kontenera

```bash
docker run -d -p 3000:3000 --env-file .env --name weather-app weather-app
```

---

## 🧠 Zastosowane technologie

* Node.js — backend
* Express — API REST
* Axios — komunikacja z API
* Docker — konteneryzacja
* Docker Compose — orkiestracja
* HTML/CSS/JS — frontend dashboard

---

## ⚡ Funkcjonalności

* agregacja danych z 3 API pogodowych
* uśrednianie temperatury i wilgotności
* prosty dashboard webowy
* automatyczne odświeżanie danych (co kilka sekund)
* obsługa błędów (gdy jedno API nie działa)

---

## 📂 Struktura projektu

```
.
├── Dockerfile
├── docker-compose.yml
├── .env
├── app/
│   ├── app.js
│   ├── routes/
│   ├── services/
│   └── public/
```

---

## 🐳 Dockerfile (opis działania)

* wykorzystanie lekkiego obrazu `node:alpine`
* instalacja zależności Node.js
* uruchomienie aplikacji Express

---

## 📌 Autor

Projekt wykonany jako zadanie zaliczeniowe.
