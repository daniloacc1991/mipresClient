import { Medicine } from './medicine';
import { Procedure } from './procedure';
import { Device } from './device';
import { ProductNutritional } from './product-nutritional';
import { ServicioComplementario } from './servicio-complementario';

export interface Prescripcion {
  id: number;
  NoPrescripcion: string;
  FPrescripcion: string;
  HPrescripcion: string;
  CodHabIPS: string;
  TipoIDIPS: string;
  NroIDIPS: string;
  CodDANEMunIPS: string;
  DirSedeIPS: string;
  TelSedeIPS: string;
  TipoIDProf: string;
  NumIDProf: string;
  PNProfS: string;
  SNProfS: string;
  PAProfS: string;
  SAProfS: string;
  RegProfS: string;
  TipoIDPaciente: string;
  NroIDPaciente: string;
  PNPaciente: string;
  SNPaciente: string;
  PAPaciente: string;
  SAPaciente: string;
  CodAmbAte: number;
  EnfHuerfana: number;
  CodEnfHuerfana: string;
  EnfHuerfanaDX: number;
  CodDxPpal: string;
  CodDxRel1: string;
  CodDxRel2: string;
  SopNutricional: number;
  CodEPS: string;
  TipoIDMadrePaciente: string;
  NroIDMadrePaciente: string;
  TipoTransc: number;
  TipoIDDonanteVivo: string;
  NroIDDonanteVivo: string;
  EstPres: number;
  createdAt: string;
  medicamentos: Medicine[];
  procedimientos: Procedure[];
  dispositivos: Device[];
  productosnutricionales: ProductNutritional[];
  serviciosComplementarios: ServicioComplementario[];
}
