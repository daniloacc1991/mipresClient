import { CausaNoEntregaTipoTecnologia } from './causa-no-entrega-tipo-tecnologia';

export interface CausaNoEntrega {
  id: number;
  descripcion: string;
  aplicaPara: number;
  causasNoEntregaTipoTecnologia: CausaNoEntregaTipoTecnologia[];
  tipoTecnologia: {
    dispositivoMedico: boolean;
    medicamento: boolean;
    procedimiento: boolean;
    servicioComplementario: boolean;
    soporteNutricional: boolean;
  };
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}