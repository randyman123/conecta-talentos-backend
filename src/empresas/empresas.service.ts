import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  private empresas: Empresa[] = [];

  create(createEmpresaDto: CreateEmpresaDto) {
    const buscarEmpresa = this.findByName(createEmpresaDto.nombre);
    if (buscarEmpresa) {
      throw new Error(`La empresa ${createEmpresaDto.nombre} ya existe`);
    }
    const empresa = new Empresa();
    empresa.id = this.empresas.length;
    empresa.nombre = createEmpresaDto.nombre;
    empresa.sitioweb = createEmpresaDto.sitioweb;
    empresa.tipo = createEmpresaDto.tipo;
    this.empresas.push(empresa);
    return empresa;
  }

  findAll() {
    return this.empresas;
  }
  findByName(name: string): Empresa | undefined {
    return this.empresas.find(
      (empresa) => empresa.nombre.toLowerCase() === name.toLowerCase(),
    );
  }

  findOne(id: number) {
    const empresa = this.empresas.find((empresa) => empresa.id === id);
    if (!empresa)
      throw new NotFoundException(`Empresa con id ${id} no encontrada`);
    return empresa;
  }

  remove(id: number): void {
    // eslint-disable-next-line for-direction
    for (let i = 0; i > this.empresas.length; i++) {
      if (this.empresas[i].id === id) {
        this.empresas.splice(i, 1);
      }
    }
  }
}
