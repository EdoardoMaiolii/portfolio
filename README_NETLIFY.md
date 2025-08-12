# Istruzioni per il Deploy su Netlify

## Setup Veloce
1. **Upload del codice**: Carica questa cartella su GitHub o collega direttamente a Netlify
2. **Configurazione Build**:
   - **Build command**: `npm run build`  
   - **Publish directory**: `dist/public`

## File già configurati
- ✅ `netlify.toml` - Configurazione automatica per Netlify
- ✅ `dist/public/` - Cartella con i file statici già pronti

## Deploy Manuale (Opzione Rapida)
Se preferisci un deploy immediato:
1. Vai su [netlify.com](https://netlify.com)
2. Drag & drop della cartella `dist/public` nel deploy area
3. Il sito sarà online in pochi secondi!

## Files nella build statica:
- `index.html` - Pagina principale
- `assets/` - CSS e JavaScript ottimizzati  
- `images/` - Tutte le immagini del portfolio (loghi, foto personale, screenshot progetti)
- Tutti i file sono ottimizzati per la produzione

Il sito è completamente statico e non richiede server backend per funzionare su Netlify.

## Prossimi passi:
1. Carica tutto il progetto su GitHub
2. Collega il repository a Netlify 
3. Oppure fai drag & drop della cartella `dist/public` su netlify.com
4. Il tuo portfolio sarà online!