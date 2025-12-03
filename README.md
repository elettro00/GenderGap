# GenderGap

Analisi e visualizzazione del **gender-gap** (distribuzione Uomini/Donne) per area geografica e anno con particolare attenzione al mondo digitale nei vari atanei italiani ed in alcuni aziende ICT italiane.  
Il progetto comprende un **backend in Node.js + Express + MySQL** e un **frontend in React (Vite)** con grafici realizzati tramite la librearia **ApexCharts**.


## 📚 Stack Tecnologico

### 🔧 Backend
- Node.js + Express  
- MySQL (DB locale o remoto, configurato via `.env`)  
- Libreria DB: `mysql2` 

### 💻 Frontend
- React  
- Vite (dev server + build tool moderno)
- ApexCharts (per i grafici)  
- Altre librerie React per UI/gestione stato

---

## 📁 Struttura della Repository

```

/
├── backend/           # API, servizi, connessione DB, data processing
├── frontend/          # UI React/Vite + grafici
└── README.md          #

```

---

## 🚀 Avvio del Progetto in Locale

### 1️⃣ Clona la repository

```bash
git clone https://github.com/uCiceroCODE/GenderGap.git
cd GenderGap
````

---

## 🗄️ 2️⃣ Configurazione Database MySQL

Puoi usare:

* un MySQL **locale**
* un MySQL **su server remoto/hosting**
* un MySQL **Docker**

Crea un database con una struttura compatibile alla repository oppure installa il file di backup my sql con i dati usati da questa repository nella cartella database/backup.sql


### 📌 Parametri necessari per la connessione

Annota:

| Variabile   | Descrizione               |
| ----------- | ------------------------- |
| DB_HOST     | hostname del server MySQL |
| DB_PORT     | porta (default 3306)      |
| DB_NAME     | nome del database         |
| DB_USER     | utente MySQL              |
| DB_PASSWORD | password                  |

---

## 🔐 3️⃣ Configura il backend con `.env`

Vai nella cartella `backend/`:

```bash
cd backend
```

Crea il file `.env`:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=yourdbname
DB_USER=root
DB_PASSWORD=yourpassword

PORT=8080
NODE_ENV=development
```

> 💡 Se usi un database esterno, sostituisci `localhost` con l’IP o dominio del server.


---

## ▶️ 4️⃣ Avvia il Backend

Installazione dipendenze:

```bash
npm install
```

Avvio server:

```bash
npm run dev
```


L’API sarà ora disponibile su:

```
http://localhost:8080
```

---

## 💻 5️⃣ Avvia il Frontend (React + Vite)

Vai nella cartella:

```bash
cd ../frontend
```

Installa le dipendenze:

```bash
npm install
```

Avvia il client:

```bash
npm run dev
```

Il frontend sarà disponibile su:

```
http://localhost:5167
```

---

## 🔗 Comunicazione Frontend → Backend

Nel frontend dovrai puntare alle API del backend.
Aggiungi un file `.env` in `frontend/`:

```
VITE_API_URL=http://localhost:5167
```

Usalo in React:

```js
const api = import.meta.env.VITE_API_URL;
```

---

## 📊 Funzionamento del progetto

1. Il backend legge i dati dal database MySQL e li espone tramite API REST.
2. Il frontend chiama le API, riceve i dati e li visualizza:

   * Tabelle riassuntive
   * Grafici tramite **ApexCharts**
   * Confronti tra anni / aree geografiche
   * Grafici generabili con filtro a discrezione dell'utente
3. Nuovi dataset possono essere importati tramite script backend o API dedicate.

---

## 🛠️ Scripts Utili

Backend:

```bash
npm run dev           
```

Frontend:

```bash
npm run dev
npm run build
npm run preview
```

---

## 🤝 Contribuire

1. Forka il repository
2. Crea un branch: `git checkout -b feature/tua-feature`
3. Commit: `git commit -m "Aggiunta nuova feature"`
4. Push: `git push origin feature/tua-feature`
5. Apri una Pull Request

---

## 📝 Licenza

Aggiungi qui la tua licenza (MIT consigliata).
Se vuoi posso generare il file `LICENSE`.

---

## 📌 Motivazione

Questo progetto serve per:

* Visualizzare rapidamente la rappresentanza di genere per regione
* Confrontare anni diversi
* Avere una dashboard semplice e leggibile
* Analizzare trend e variazioni nel tempo
* E molto altro...

---

## 📧 Supporto

Per problemi, apri una Issue nella repository.

---

