import { ApiProperty } from '@nestjs/swagger';
export class CreateEstudianteDto {
  @ApiProperty({ default: 'randy' })
  public nombre: string;
  @ApiProperty({ default: 'vilches' })
  public apellidos: string;
  @ApiProperty({ default: '31' })
  public edad: number;
  @ApiProperty({ default: 'randy.vilches@outlook.es' })
  public email: string;
  @ApiProperty({ default: 'tecnico' })
  public profesion: string;
}
