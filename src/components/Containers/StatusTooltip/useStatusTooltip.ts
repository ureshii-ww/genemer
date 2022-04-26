import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { changeNewStatus, saveStatus } from '../../../store/reducers/status';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export const useStatusTooltip = () => {
  const dispatch = useAppDispatch();
  const statusValue = useAppSelector(state => state.status.value);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  const areaRef = useRef<HTMLDivElement>(null)

  const toggleIsEditing = () => {
    setIsEditing(value => !value);
  };

  const handleChangeStatus = (event: ChangeEvent<HTMLDivElement>) => {
    dispatch(changeNewStatus(event.target.innerText));
  };

  const handleSaveStatus = () => {
    dispatch(saveStatus());
    toggleIsEditing();
  };
  
  useEffect(() => {
    if (isEditing && areaRef.current) {
      areaRef.current.innerText = statusValue;
      areaRef.current.focus();
    }
  }, [isEditing])

  return {
    areaRef,
    statusValue,
    isEditing,
    handleChangeStatus,
    handleSaveStatus,
    toggleIsEditing,
  };
};
