import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstudianteDto {
  @ApiProperty({ default: 'randy' })
  public nombre: string;
  @ApiProperty({ default: 'vilches' })
  public apellidos: string;
  @ApiProperty({ default: '31' })
  public edad: number;
  @ApiProperty({ default: 'tecnico' })
  public profesion: string;
}
