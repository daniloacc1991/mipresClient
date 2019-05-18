export interface Entrega {
  id: number;
  ID?: number;
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
  EstadoEntrega?: number;
  ValorEntregado?: number;
  prescripcionDetalleId: number;
}

export interface EntregaResumen {
  id: number,
  TipoTecnologia: string;
  ConOrden: number;
  PrescripcionId: number;
  NoPrescripcion: number;
  ValorTotal: number;
}