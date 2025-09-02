import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpresaDto {
  @ApiProperty({ default: 'Nombre de la empresa'})
  nombre: string;

  @ApiProperty({ default: 'https://www.ejemplo.com' })
  sitioweb: string;

  @ApiProperty({ default: 'pequeña' })
  tipo: string;
}
