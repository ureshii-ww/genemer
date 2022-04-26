import { GetUniversitiesWithSearchDto } from './dto/get-universities-with-search.dto';
import api from '../../api';
import { UniversityModel } from '../../models/university.model';

export const UniversitiesService = {
  getUniversitiesWithSearch: (getUniversitiesWithSearchDto: GetUniversitiesWithSearchDto) => {
    return api.get<UniversityModel[]>('/search', { params: getUniversitiesWithSearchDto });
  },
};
