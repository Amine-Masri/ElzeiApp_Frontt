export interface RawOperation {
  id: number;
  date: String; // Vous pouvez également utiliser le type Date si nécessaire
  dateValeur: String; // Vous pouvez également utiliser le type Date si nécessaire
  libelle: string;
  montant: number;
  type: any;
  solde: any;
  justificatif: any; // Vous pouvez également utiliser un type spécifique pour le justificatif, comme Blob
}
