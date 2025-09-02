import { TipoEmpresa } from '../dto/tipo-empresa.enum';

export class Empresa {
  id: number;
  nombre: string;
  sitioweb: string;
  tipo: string;

  constructor() {
    this.tipo = TipoEmpresa.PEQUENA;
  }
}
