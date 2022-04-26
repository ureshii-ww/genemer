import { useState } from 'react';
import { generateUsername } from '../../../helpers/generate-username';

export const useGreetingsBlock = () => {
  const [username, setUsername] = useState<string>(`Человек №${generateUsername()}`)
  
  return {
    username
  }
}