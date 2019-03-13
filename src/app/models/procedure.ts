export interface Procedure {
  id: number;
  ConOrden: number;
  TipoPrest: number;
  CausaS11: number;
  CausaS12: number;
  CausaS2: number;
  CausaS3: number;
  CausaS4: number;
  ProPBSUtilizado: string;
  CausaS5: number;
  ProPBSDescartado: string;
  RznCausaS51: number;
  DescRzn51: string;
  RznCausaS52: number;
  DescRzn52: string;
  CausaS6: number;
  CausaS7: number;
  CodCUPS: string;
  CanForm: string;
  CadaFreUso: string;
  CodFreUso: number;
  Cant: string;
  CantTotal: string;
  CodPerDurTrat: number;
  JustNoPBS: string;
  IndRec: string;
  EstJM: number;
  prescripcionId: number;
  indEntregado: boolean;
}
