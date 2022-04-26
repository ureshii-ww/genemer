import React from 'react';
import { useStatusBlock } from './useStatusBlock';
import StatusArea from '../../UI/StatusArea/StatusArea';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';

const StatusBlock = () => {
  const { statusValue, isEditing, handleChangeStatus, handleSaveStatus, toggleIsEditing } =
    useStatusBlock();

  return (
    <div>
      <div>
        {isEditing && <TransparentButton onClick={handleSaveStatus}>Сохранить</TransparentButton>}
        <TransparentButton onClick={toggleIsEditing}>
          {isEditing ? 'Отмена' : 'Сменить статус'}
        </TransparentButton>
      </div>
      {!isEditing ? (
        <p>{statusValue}</p>
      ) : (
        <StatusArea defaultValue={statusValue} onChange={handleChangeStatus} />
      )}
    </div>
  );
};

export default StatusBlock;
