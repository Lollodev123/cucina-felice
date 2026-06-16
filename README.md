# 🍅 Cucina Felice — ricette low-FODMAP

App semplice e colorata con **58 ricette italiane** (molte romane), ognuna con una
**fonte di proteine + una di carboidrati + una di verdure**. Pensata per chi segue
la dieta **low-FODMAP**: niente aglio/cipolla (si usa olio infuso all'aglio),
**senza lattosio**, **pochi legumi**. Tutte facili, profumate e veloci — fatte apposta
per chi non ama cucinare e si annoia in fretta.

👉 Funziona su **telefono e computer**, dallo stesso indirizzo.

## ✨ Cosa puoi fare
- 🎲 **Sorprendimi**: ti sceglie una ricetta a caso (basta con la paralisi da scelta).
- 🔎 **Cerca** e filtra per **colore, profumo, voglia del momento, tempo** e **preferite**.
- ❤️ Metti **like** alle ricette che ami (vengono spinte in cima e in "Sorprendimi").
- 👣 **Checklist** dei passi + **timer** integrati mentre cucini.
- 📷 Aggiungi la **tua foto** del piatto (diventa anche un diario).
- 🎉 Pulsante **"L'ho cucinata!"** con coriandoli, streak 🔥 e **badge**.
- 🚫 **Escludi gli ingredienti** che non ti piacciono: spariscono tutte le ricette che li usano.
- 🗑️ **Elimina** ricette (finiscono in un cestino da cui puoi **ripristinarle**).
- ➕ **Aggiungi** le tue ricette dall'app, oppure modificando un file.

## ▶️ Provarla in locale
Apri un terminale in questa cartella e lancia un piccolo server:

```bash
python3 -m http.server 8000
```

Poi vai su **http://localhost:8000** dal browser.

> Puoi anche aprire `index.html` con doppio clic: funziona quasi tutto. Per le **foto**
> (che usano IndexedDB) alcuni browser richiedono un server — quindi meglio il comando sopra.

## ➕ Aggiungere ricette
Due modi, scegli quello che preferisci:

1. **Dall'app** — pulsante ➕ in alto. Compili un form, la ricetta si salva sul tuo
   dispositivo. Da ⚙️ **Impostazioni → Esporta** scarichi un file `.json` con tutte
   le tue ricette (backup / da incollare nel file dati).

2. **Nel file dati** — apri [`data/recipes.js`](data/recipes.js), copia un blocco di
   ricetta esistente, incollalo e cambia i campi. Le istruzioni sono in cima al file.
   Ogni ricetta ha bisogno almeno di `id`, `title`, `protein`, `carb`, `veggie` e `steps`.

## ☁️ Pubblicarla gratis (telefono + PC, anche col tuo dominio)

### Opzione A — GitHub Pages (consigliata, gratis)
1. Crea un repository su GitHub e carica questi file (`git init`, `git add .`, `git commit`, `git push`).
2. Su GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   scegli il branch `main` e cartella `/ (root)`. Salva.
3. Dopo un minuto l'app è online su `https://<tuo-utente>.github.io/<repo>/`.
   - **Dominio tuo**: in **Settings → Pages → Custom domain** scrivi il tuo dominio e
     crea un record `CNAME` dal tuo provider DNS verso `<tuo-utente>.github.io`. HTTPS è gratis.

### Opzione B — Cloudflare Pages (anch'essa gratis)
1. Vai su **Cloudflare → Pages → Create a project → Connect to Git** (o carica la cartella).
2. Nessun comando di build: è un sito statico. Imposta la **output directory** sulla root.
3. Collega il **tuo dominio** dalla scheda *Custom domains* (gratis, SSL incluso).

Per questo tipo di sito **entrambe le opzioni costano €0**.

## 🗂️ Struttura
```
index.html            # la pagina dell'app
css/styles.css        # lo stile (colori, layout)
js/storage.js         # salvataggi sul dispositivo (preferiti, foto, esclusioni…)
js/filters.js         # ricerca, filtri, "Sorprendimi"
js/timer.js           # timer dei passi
js/form.js            # form "aggiungi ricetta" + export/import
js/app.js             # cuore dell'app (navigazione, rendering)
data/recipes.js       # le 58 ricette (modificabile a mano)
LOW_FODMAP.md         # le regole della dieta usate + avvertenze
```

## 🌿 Nota importante
Le ricette seguono i **principi low-FODMAP** (riferimento *Monash University*). La
tolleranza è **individuale**: rispetta le porzioni indicate. **Non è un consiglio
medico** — vedi [`LOW_FODMAP.md`](LOW_FODMAP.md).
