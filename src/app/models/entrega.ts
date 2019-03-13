export interface Entrega {
  id: number;
  IDEntrega: number;
  NoPrescripcion: string;
  TipoTec: string;
  ConTec: number;
  TipoIDPaciente: string;
  NoIDPaciente: string;
  NoEntrega: number;
  CodSerTecEntregado: string;
  CantTotEntregada: string;
  EntTotal: number;
  CausaNoEntrega: number;
  FecEntrega: string;
  NoLote: string;
  prescripcionDetalleId: number;
}