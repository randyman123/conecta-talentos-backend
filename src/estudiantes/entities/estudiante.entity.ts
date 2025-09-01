// src/estudiantes/entities/estudiante.entity.ts
export class Estudiante {
  public id: number;
  public nombre: string;
  public apellidos: string;
  public edad: number;
  public email: string;
  public profesion: string;

  constructor(init?: Partial<Estudiante>) {
    Object.assign(this, init);
  }
}
