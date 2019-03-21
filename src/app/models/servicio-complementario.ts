export interface ServicioComplementario {
  id: number;
  ConOrden: number;
  TipoPrest: number;
  CausaS1: number;
  CausaS2: number;
  CausaS3: number;
  CausaS4: number;
  DescCausaS4: string;
  CausaS5: number;
  CodSerComp: number;
  DescSerComp: string;
  CanForm: number;
  CadaFreUso: number;
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
