import React from 'react';
import { useMainForm } from './useMainForm';
import InputBlock from '../../UI/InputBlock/InputBlock';
import InputSelect from '../../UI/InputSelect/InputSelect';
import InputText from '../../UI/InputText/InputText';
import InputCheckbox from '../../UI/InputCheckbox/InputCheckbox';
import MainButton from '../../UI/MainButton/MainButton';
import Separator from '../../UI/Separator/Separator';

const MainForm = () => {
  const { useFormData, universitiesData, citiesData, lastModified, onSubmit } = useMainForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useFormData;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBlock label="Ваш город" name="city">
        <InputSelect {...register('city')} defaultValue="city-placeholder">
          {citiesData.map(city => (
            <option key={`${city.city}-city}`} value={city.city}>
              {city.city}
            </option>
          ))}
        </InputSelect>
      </InputBlock>

      <InputBlock label="Ваш университет" name="university">
        <InputSelect {...register('university')} defaultValue="uni-placeholder">
          {!universitiesData && (
            <option value="uni-placeholder" disabled>
              Выберите университет
            </option>
          )}
          {universitiesData &&
            universitiesData.map((university, i) => (
              <option key={`${university.name}-uni${i}`} value={university.name}>
                {university.name}
              </option>
            ))}
        </InputSelect>
      </InputBlock>

      <Separator />

      <InputBlock
        label="Пароль"
        name="password"
        error={errors.password?.message}
        annotation="Ваш новый пароль должен содержать не менее 5 символов">
        <InputText {...register('password', { required: 'Укажите пароль' })} type="password" />
      </InputBlock>

      <InputBlock
        label="Пароль ещё раз"
        name="passwordRepeat"
        error={errors.passwordRepeat?.message}
        annotation="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.">
        <InputText
          {...register('passwordRepeat', {
            required: 'Повторите пароль',
            validate: value => (value === getValues().password ? true : 'Пароли должны совпадать'),
          })}
          type="password"
        />
      </InputBlock>

      <Separator />

      <InputBlock
        label="Электронная почта"
        name="email"
        error={errors.email?.message}
        annotation="Можно изменить адрес, указанный при регистрации">
        <InputText {...register('email', { required: 'Укажите E-mail' })} type="email" />
      </InputBlock>

      <fieldset>
        <p>Я согласен</p>
        <InputCheckbox
          {...register('isGettingEmails')}
          title="принимать актуальную информацию на емейл"
        />
      </fieldset>

      <div>
        <MainButton>Изменить</MainButton>
        {lastModified && <p>Последнее изменение {lastModified}</p>}
      </div>
    </form>
  );
};

export default MainForm;
