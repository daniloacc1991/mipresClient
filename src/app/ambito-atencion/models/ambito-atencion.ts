export interface AmbitoAtencion {
  id: number;
  descripcion: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface AmbitoAtencionWrapper {
  rows: AmbitoAtencion[];
  count: number;
}
