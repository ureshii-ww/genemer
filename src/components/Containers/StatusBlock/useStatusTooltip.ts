import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { changeNewStatus, saveStatus } from '../../../store/reducers/status';
import { ChangeEvent, useState } from 'react';

export const useStatusTooltip = () => {
  const dispatch = useAppDispatch();
  const statusValue = useAppSelector(state => state.status.value);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleIsEditing = () => {
    setIsEditing(value => !value);
  };

  const handleChangeStatus = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeNewStatus(event.target.value));
  };

  const handleSaveStatus = () => {
    dispatch(saveStatus());
    toggleIsEditing();
  };

  return {
    statusValue,
    isEditing,
    handleChangeStatus,
    handleSaveStatus,
    toggleIsEditing,
  };
};
