# Cucina Felice

Una piccola PWA in italiano per scegliere ricette low-FODMAP, pianificare i pasti e trasformarli in una lista della spesa utilizzabile.

**Online:** [lollodev123.github.io/cucina-felice](https://lollodev123.github.io/cucina-felice/)

## Perché esiste

La difficoltà non era soltanto trovare piatti adatti, ma decidere cosa cucinare durante la settimana e riunire ingredienti ripetuti senza riscrivere ogni volta la lista. L'app è nata per un uso domestico reale e conserva dati, preferenze e foto sul dispositivo.

## Cosa fa

- raccoglie oltre 100 ricette italiane con ricerca, filtri e preferiti;
- propone un piano per settimana, giorni o numero di pasti;
- permette di sostituire, cercare o aggiungere una ricetta al piano;
- genera una lista della spesa per reparto e numero di persone;
- funziona offline e può essere installata dalla schermata Home;
- salva localmente ricette personali, foto, checklist e preferenze.

## La logica della lista della spesa

Il modulo [`js/planner.js`](js/planner.js):

1. legge gli ingredienti dei pasti selezionati;
2. interpreta numeri decimali e frazioni Unicode;
3. scala le quantità in base al numero di persone;
4. somma ingredienti con lo stesso nome normalizzato e la stessa unità;
5. arrotonda verso l'alto gli elementi che si contano e mantiene separati pesi e volumi;
6. raggruppa il risultato per reparto e separa gli elementi già in dispensa.

Il planner non converte automaticamente unità diverse, per esempio grammi e chilogrammi, e non presume che nomi differenti indichino lo stesso ingrediente.

## Provarla in locale

Non ci sono framework o build step:

```sh
python3 -m http.server 8000
```

Apri `http://localhost:8000`. Per eseguire i test della logica del planner serve Node.js 20 o successivo:

```sh
npm test
```

## Struttura essenziale

```text
index.html          interfaccia dell'app
data/               ricette iniziali
js/planner.js       piano pasti e lista della spesa
js/storage.js       dati locali e foto
js/filters.js       ricerca e filtri
sw.js               supporto offline
```

## Nota low-FODMAP

Le ricette seguono criteri generali riassunti in [`LOW_FODMAP.md`](LOW_FODMAP.md), ma tolleranze e porzioni sono individuali. L'app non fornisce indicazioni mediche e non sostituisce il parere di un professionista sanitario.
