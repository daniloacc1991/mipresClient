export interface PrescripcionDetalle {
  id: number;
  TipoTecnologia: string;
  ConOrden: number;
  prescripcion: {
    id: number;
    NoPrescripcion: string;
    TipoIDPaciente: string;
    NroIDPaciente: number;
  }
}