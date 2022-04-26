import { UniversityModel } from '../../../models/university.model';
import { GetUniversitiesWithSearchDto } from '../../../services/universities/dto/get-universities-with-search.dto';

export interface UniversitiesState {
  data: UniversityModel[] | null;
  isLoading: boolean;
}

export type LoadUniversitiesPayload = GetUniversitiesWithSearchDto;
export type LoadUniversitiesPayloadSuccess = UniversityModel[];