import pandas as pd
import sys
import re
import os
import chardet

def rileva_encoding(file_path):
    """Rileva l'encoding del file"""
    with open(file_path, 'rb') as f:
        raw_data = f.read(10000)  # Prime 10k righe per velocità
        result = chardet.detect(raw_data)
        return result['encoding']

def append_per_anno(file_input, file_append, anno_target=2013):
    """
    APPEND righe filtrate con gestione encoding utf-8
    """
    # Carica input con encoding robusto
    try:
        df_input = pd.read_csv(file_input, sep=';', low_memory=False, encoding='utf-8')
    except UnicodeDecodeError:
        df_input = pd.read_csv(file_input, sep=';', low_memory=False, encoding='latin1')
    
    print(f"Input: {len(df_input)} righe totali")
    
    if 'ANNO' not in df_input.columns:
        print("Colonna 'ANNO' non trovata!")
        print("Colonne:", list(df_input.columns))
        return
    
    # Estrai primo anno da '2013/2014'
    def estrai_anno(anno_str):
        if pd.isna(anno_str):
            return None
        match = re.search(r'(\d{4})', str(anno_str))
        return int(match.group(1)) if match else None
    
    df_input['ANNO_NUM'] = df_input['ANNO'].apply(estrai_anno)
    print(f"Anni disponibili: {sorted(df_input['ANNO_NUM'].dropna().unique())}")
    
    # Filtra righe
    df_filtrato = df_input[df_input['ANNO_NUM'] == anno_target].drop('ANNO_NUM', axis=1)
    n_righe = len(df_filtrato)
    
    if n_righe == 0:
        print(f"Nessuna riga per {anno_target}")
        return
    
    print(f"{n_righe} righe estratte per {anno_target}")
    
    # Gestione file_append con encoding corretto
    encoding_output = 'utf-8'  # Sempre UTF-8 in output
    
    if os.path.exists(file_append):
        # Rileva encoding del file esistente
        encoding_esistente = rileva_encoding(file_append)
        print(f"File esistente encoding: {encoding_esistente}")
        
        try:
            # Prova prima con encoding rilevato
            df_esistente = pd.read_csv(file_append, sep=';', low_memory=False, encoding=encoding_esistente)
        except:
            # Fallback latin1/iso-8859-1
            df_esistente = pd.read_csv(file_append, sep=';', low_memory=False, encoding='latin1')
        
        print(f"File esistente: {len(df_esistente)} righe")
        
        # Verifica colonne
        if not df_esistente.columns.equals(df_filtrato.columns):
            print("Struttura colonne diversa!")
            return
        
        # APPEND
        df_finale = pd.concat([df_esistente, df_filtrato], ignore_index=True)
        print(f"{n_righe} nuove righe aggiunte")
    else:
        df_finale = df_filtrato
        print("🆕 Nuovo file creato")
    
    # Salva SEMPRE in UTF-8
    df_finale.to_csv(file_append, sep=';', index=False, encoding=encoding_output)
    print(f"SALVATO: {file_append} ({len(df_finale)} righe totali)")
    print(f"   Encoding: {encoding_output}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python filter.py <input.csv> <append.csv> [anno]")
        print("Es: python filter.py file-1.csv dataset.csv 2013")
        sys.exit(1)
    
    file_input = sys.argv[1]
    file_append = sys.argv[2]
    anno = int(sys.argv[3]) if len(sys.argv) == 4 else 2013
    
    append_per_anno(file_input, file_append, anno)
