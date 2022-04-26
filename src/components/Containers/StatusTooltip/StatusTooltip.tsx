import React from 'react';
import { useStatusTooltip } from './useStatusTooltip';
import StatusArea from '../../UI/StatusArea/StatusArea';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import './status-tooltip.scss';

const StatusTooltip = () => {
  const { areaRef, statusValue, isEditing, handleChangeStatus, handleSaveStatus, toggleIsEditing } =
    useStatusTooltip();

  return (
    <div className="status-tooltip__wrapper">
      <div className="status-tooltip">
        <div className="status-tooltip__buttons">
          {isEditing && <TransparentButton className="status-tooltip__button" onClick={handleSaveStatus}>Сохранить</TransparentButton>}
          <TransparentButton className="status-tooltip__button" onClick={toggleIsEditing}>
            {isEditing ? 'Отмена' : 'Сменить статус'}
          </TransparentButton>
        </div>
        <div className="status-tooltip__text">
          {!isEditing ? (
            <p>{statusValue || 'Введите свой статус'}</p>
          ) : (
            <StatusArea onInput={handleChangeStatus} contentEditable={true} ref={areaRef} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusTooltip;
