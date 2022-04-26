import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useEffect, useMemo, useState } from 'react';
import { loadUniversities } from '../../../store/reducers/universities';
import citiesJson from '../../../json/cities.json';
import { CityModel } from '../../../models/city.model';
import { convertDateToString } from '../../../helpers/convert-date-to-string';

export interface MainFormInputs {
  city: string;
  university: string;
  password: string;
  passwordRepeat: string;
  email: string;
  isGettingEmails: boolean;
}

export const useMainForm = () => {
  const dispatch = useAppDispatch();
  const { reset, ...useFormData } = useForm<MainFormInputs>();
  const { data: universitiesData } = useAppSelector(
    state => state.universities
  );
  const [lastModified, setLastModified] = useState<string | null>(null);

  const citiesData = useMemo(() => {
    const citiesArr: CityModel[] = JSON.parse(JSON.stringify(citiesJson));
    const biggestIndex = citiesArr.reduce(
      (iMax, current, index, array) =>
        +current.population > +array[iMax].population ? index : iMax,
      0
    );
    citiesArr.splice(0, 0, citiesArr.splice(biggestIndex, 1)[0]);
    return citiesArr.filter(city => +city.population > 5000);
  }, []);

  const onSubmit = (data: MainFormInputs) => {
    console.log(data);
    setLastModified(convertDateToString(new Date()));
  };

  useEffect(() => {
    if (universitiesData) {
      reset({ university: universitiesData[0].name });
    }
  }, [universitiesData, reset]);

  useEffect(() => {
    dispatch(loadUniversities({ country: 'United Kingdom' }));
  }, [dispatch]);

  return {
    universitiesData,
    useFormData,
    citiesData,
    lastModified,
    onSubmit,
  };
};
